import React from "react";
import { Search } from "react-bootstrap-icons";

function FilterLabel(props) {
  return (
    <div className="d-flex flex-row align-items-center">
      <p className="col mt-2 mb-2 fw-bold">{props.label}</p>
      <button className="btn btn-dark btn-sm btn-round" type="button">
        <Search className="flex-shrink-0 flex-grow-0" size="12" />
      </button>
    </div>
  );
}

export default FilterLabel;
