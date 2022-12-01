import React, { useContext } from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "./usePagination";
import { HistoryContext } from "../../Contexts/HistoryContext";
import "./style.scss";

const Pagination = (props) => {
  const { setIsNext } = useContext(HistoryContext);
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  function onNext() {
    onPageChange(currentPage + 1);
    setIsNext(true);
  }

  function onPrevious() {
    onPageChange(currentPage - 1);
  }

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames("pagination-container", { [className]: className })}
    >
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className="arrow ">❮</div>
      </li>
      {paginationRange.map((pageNumber, i) => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }

        return (
          <li
            key={i + 1}
            className={classnames("pagination-item", {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className="arrow">❯</div>
      </li>
    </ul>
  );
};

export default Pagination;
