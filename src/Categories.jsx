import React from "react";

const Categories = ({ categories, handleFilter }) => {
  return (
    <div className="btn-container">
      {categories.map((category, i) => {
        return (
          <button
            onClick={() => handleFilter(category)}
            key={i}
            className="filter-btn"
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
