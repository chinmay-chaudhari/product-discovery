import React from "react";
import { updateFilters } from "../../redux/actions/productActions";
import { connect } from "react-redux";

function Checkbox(props) {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value={props.name}
        name={props.type}
        id={props.id}
        onChange={(e) => {
          props.dispatch(updateFilters(e.target));
        }}
      />
      <label className="form-check-label" htmlFor={props.id}>
        {props.name}
      </label>
    </div>
  );
}

export default connect()(Checkbox);
