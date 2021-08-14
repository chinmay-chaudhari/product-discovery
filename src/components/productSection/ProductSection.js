import React from "react";
import { Spinner } from "react-bootstrap";
import { Product } from "../shared";
import { connect, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/actions/productActions";
import "./productSection.css";

function ProductSection(props) {
  React.useEffect(() => {
    props.dispatch(fetchProducts());
  }, []);

  const { error, loading, products } = props;

  /**
   * useSelector to get the store object when filter is set and use the filter object to extract required products to display
   */
  const productList = useSelector((state) =>
    state.products.items.filter((item) => {
      let genderStatus = true;
      let categoryStatus = true;
      let brandStatus = true;
      let searchStatus = true;

      if (state.products.filters.search !== "") {
        searchStatus = false;
        if (
          item.productName
            .toLowerCase()
            .includes(state.products.filters.search.toLowerCase())
        ) {
          searchStatus = true;
        }
      }

      if (state.products.filters.gender.length !== 0) {
        genderStatus = false;
        if (state.products.filters.gender[0] === item.gender) {
          genderStatus = true;
        }
      }

      if (state.products.filters.categories.length !== 0) {
        categoryStatus = false;
        if (state.products.filters.categories.includes(item.category)) {
          categoryStatus = true;
        }
      }

      if (state.products.filters.brands.length !== 0) {
        brandStatus = false;
        if (state.products.filters.brands.includes(item.brand)) {
          brandStatus = true;
        }
      }

      if (genderStatus && categoryStatus && brandStatus && searchStatus) {
        return true;
      }

      if (
        state.products.filters.brands.length === 0 &&
        state.products.filters.categories.length === 0 &&
        state.products.filters.gender.length === 0 &&
        state.products.filters.search === ""
      ) {
        return true;
      }

      return false;
    })
  );

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    return (
      <div className="position-absolute d-flex w-100 h-100 justify-content-center gap-4">
        <Spinner
          animation="grow"
          variant="dark"
          className="spinner-align-center"
        />
        <Spinner
          animation="grow"
          variant="dark"
          className="spinner-align-center"
        />
        <Spinner
          animation="grow"
          variant="dark"
          className="spinner-align-center"
        />
      </div>
    );
  }

  return (
    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-6 mb-1 mt-1 ms-1 me-1">
      {productList.map((product) => (
        <Product key={product.productId} product={product} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error,
  filters: state.filters,
});

export default connect(mapStateToProps)(ProductSection);
