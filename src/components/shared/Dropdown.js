import React from "react";
import "./shared.css";

function Dropdown(props) {
  return (
    <div className="dropdown">
      <button
        className="btn btn-sm dropdown-toggle"
        type="button"
        id={props.id}
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {props.name}
      </button>
      <ul className="dropdown-menu" aria-labelledby={props.id}>
        {props.items.map((item, index) => {
          return (
            <li key={index}>
              <a className="dropdown-item" href="#">
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Dropdown;
