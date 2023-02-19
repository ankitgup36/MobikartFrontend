import React, { useContext } from "react";
import { MainContext } from "../App";
const Sorting = () => {
  const { setSort } = useContext(MainContext);
  return (
    <>
      <div class="dropdown ms-auto">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenu2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Sort By
        </button>
        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
          <li>
            <button
              value="asc"
              class="dropdown-item fs-6 fw-bold"
              type="button"
              onClick={(e) => {
                setSort(e.target.value);
              }}
            >
              Price - Low to High
            </button>
          </li>
          <li>
            <button
              value="des"
              class="dropdown-item fs-6 fw-bold"
              type="button"
              onClick={(e) => {
                setSort(e.target.value);
              }}
            >
              Price - High to Low
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sorting;
