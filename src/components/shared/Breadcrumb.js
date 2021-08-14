import React from "react";

function Breadcrumb() {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb mt-4">
        <li className="breadcrumb-item active" aria-current="page">
          Home
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;
