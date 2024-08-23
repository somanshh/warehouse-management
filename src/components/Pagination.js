import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../redux/actions";
import { globalStates } from "../redux/selectors";

const Pagination = () => {
  const dispatch = useDispatch();
  const { filteredWarehouses, currentPage, itemsPerPage } =
    useSelector(globalStates);

  const totalPages = Math.ceil(filteredWarehouses.length / itemsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <ul>
        {pageNumbers.map((number) => (
          <li key={number} className={number === currentPage ? "active" : ""}>
            <button onClick={() => dispatch(setCurrentPage(number))}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
