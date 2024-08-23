import React, { useState, useEffect, useRef } from "react";
import "./DataTbl.css";

const Searching = () => {
  //   for fetch api
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  //   for infinite scroll
  const [hasMore, setHasMore] = useState(true);

    // onIntersection 
  const elementRef = useRef(null);
  const onIntersection = (entries) => {
    const firstEntry = entries[0];
    if (firstEntry.isIntersecting && hasMore) {
      fetchData();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection);
    if (observer && elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [users]);

//   get data 
  async function fetchData(){
    const response = await fetch(`https://dummyjson.com/users?limit=10&skip=${
          page * 10
        }`)
    const data = await response.json()
    if(data.users.length == 0){
        setHasMore(false)
    }else{
        setUsers(prevusers => [...prevusers, ...data.users])
        setPage(prevPage=>prevPage+1)
    }
}


  return (
    <>
        <h1>Data Table</h1>
      <div className="tablemaindiv">
        <table id="mytable">
          <thead>
            <tr className="mainheading">
              <th onClick={() => handleSort("id")}>Id</th>
              <th onClick={() => handleSort("firstName")}>Name</th>
              <th onClick={() => handleSort("age")}>Age</th>
              <th onClick={() => handleSort("gender")}>Gender</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>
                  <img src={user.image} alt={user.firstName} width="50" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
        {hasMore && (
            <div ref={elementRef} className="loading">
              <div class="loader"></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Searching;
