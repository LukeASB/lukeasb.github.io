import React from "react";
import IPagination from "../shared/interfaces/IPagination";

const Pagination: React.FC<IPagination> = ({totalPosts, postsPerPage, setCurrentPage }: {
  totalPosts: number;
  postsPerPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className={`col-${Math.ceil(totalPosts / postsPerPage)}`}>
            <nav aria-label="pagination">
              <ul className="pagination">
                {pages.map((page, i) => {
                  return (
                    <li className="page-item" key={i}>
                      <button
                      className="page-link"
                      onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
