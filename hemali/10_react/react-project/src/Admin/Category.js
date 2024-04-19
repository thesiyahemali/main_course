import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Category.css';
import EditCategory from './EditCategory';

const Category = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getCat();
  }, []);

  const deleteCat = (index) => {
    axios.delete(`http://localhost:8000/category/${index}`).then(() => {
      getCat();
    });
  };

  const getCat = () => {
    axios.get('http://localhost:8000/category').then((res) => {
      setCategory(res.data);
      console.log(res.data);
    });
  };

  const editCategory = (id) => {
    navigate(`/admin/category/editcategory/${id}`);
  };

  return (
    <>
      <br />
      <Link to={'/admin/category/addcate'} className="btn btn-primary">Add Category</Link>
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col-md-12">
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">Category</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {category.length !== 0 ? (
                <>
                  {category.map((res) => {
                    return (
                      <tr key={res.id}>
                        <td>{res.name}</td>
                        <td>
                          <button
                            onClick={() => deleteCat(res.id)}
                            className="btn btn-outline-danger btn-sm text-secondary fw-bold"
                          >
                            Delete
                          </button>
                          <button
                            onClick={() => editCategory(res.id)}
                            className="btn btn-outline-warning btn-sm text-secondary fw-bold mx-3"
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </>
              ) : (
                <tr>
                  <td colSpan={2}>No Data Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Category;
