import React from "react";
import "./shared.css";

function Product(props) {
  return (
    <div
      className="card border-light mb-2 mt-2 ms-2 me-2"
      style={{ width: "14rem" }}
    >
      <div className="card-body">
        <img
          src={props.product.images[0].src || null}
          className="card-img-top"
        />
        <div>
          <div className="fw-bold">{props.product.brand || null}</div>
          <div className="card-text">
            {props.product.additionalInfo || null}
          </div>
          <div className="d-flex justify-content-start gap-1">
            <div className="fw-bold product-text">{`Rs. ${
              props.product.price || null
            }`}</div>
            {props.product.price !== props.product.mrp ? (
              <>
                <div className="fw-light text-decoration-line-through product-text">
                  {`Rs. ${props.product.mrp || null}`}
                </div>
                <div className="fw-light text-danger product-text">
                  {props.product.discountDisplayLabel || null}
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
