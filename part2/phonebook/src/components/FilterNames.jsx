import React from "react";

const FilterNames = ({ setFilter }) => {
  return (
    <div>
      filter shown with <input onChange={(e) => setFilter(e.target.value)} />
    </div>
  );
};

export default FilterNames;
