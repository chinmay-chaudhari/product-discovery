import React from "react";
import { updateFilters } from "../../redux/actions/productActions";
import { connect } from "react-redux";

function RadioButton(props) {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        id={props.id}
        value={props.name}
        name={props.type}
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

export default connect()(RadioButton);
