import React from "react";
import "./Hader.css";

const Hader = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 d-flex left">
            <i class="fa-solid fa-paw"></i>
            <h3>Doges Care</h3>
          </div>
          <div className="col-10  right  ">
            <ul className="d-inline-flex ">
              <li className="ps-4">Home</li>
              <li className="ps-4">ABOUT</li>
              <li className="ps-4">SERVIES</li>
              <li className="ps-4">PAGES</li>
              <li className="ps-4">CONTACT</li>

              <input
                type="search"
                name=""
                id=""
                placeholder="Enter keyword "
                className="rounded-pill ms-4"
              />
              <i class="fa-solid fa-magnifying-glass ms-3"></i>

              <i class="fa-regular fa-moon ms-4"></i>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hader;
