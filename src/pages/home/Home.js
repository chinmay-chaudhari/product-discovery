import React from "react";
import { Spinner } from "react-bootstrap";
import FilterSection from "../../components/filterSection/FilterSection";
import ProductSection from "../../components/productSection/ProductSection";
import { Breadcrumb, Dropdown } from "../../components/shared";
import "./home.css";

const bundleDropdown = {
  id: "bundleDropdown",
  name: "Bundle",
  items: ["Bundle1", "Bundle1", "Bundle1"],
};

const sizesDropdown = {
  id: "sizesDropdown",
  name: "Sizes",
  items: [
    "6",
    "7",
    "8",
    "9",
    "10",
    "28",
    "30",
    "32",
    "34",
    "36",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
  ],
};

function Home() {
  return (
    <div className="container-fluid">
      <Breadcrumb />

      <div className="row border-bottom container-fluid align-items-center">
        <div className="col-2">
          <span className="fw-bold">FILTERS</span>
        </div>
        <div className="col-10 align-items-center">
          <div className="d-flex flex-row gap-4">
            <div>
              <Dropdown
                id={bundleDropdown.id}
                name={bundleDropdown.name}
                items={bundleDropdown.items}
              />
            </div>
            <div>
              <Dropdown
                id={sizesDropdown.id}
                name={sizesDropdown.name}
                items={sizesDropdown.items}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row overflow-hidden full-height">
        <div className="col-2 mt-2 mb-2 border-end">
          <FilterSection />
        </div>
        <div className="col-10 position-relative">
          <ProductSection />
        </div>
      </div>
    </div>
  );
}

export default Home;
