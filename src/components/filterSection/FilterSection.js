import React from "react";
import { Checkbox, FilterLabel, RadioButton } from "../shared";
import store from "../../redux/store/store";
import "./filterSection.css";

function FilterSection() {
  /**
   * States for Filters, if any new product added the category/brand wil automatically show in the list
   */
  const [radioFilters, setRadioFilters] = React.useState([
    { id: "1", name: "Men", type: "gender" },
    { id: "2", name: "Women", type: "gender" },
    { id: "3", name: "Boys", type: "gender" },
    { id: "4", name: "Girls", type: "gender" },
  ]);
  const [categories, setCategories] = React.useState([]);
  const [brands, setBrands] = React.useState([]);
  const prices = [
    { id: "1", name: "Rs. 99 to Rs. 36450", type: "Price-Filter-Group" },
  ];

  /**
   * useEffect to subscribe to store changes and extract unique sets for Brands and Categories for Filtering use
   */
  React.useEffect(() => {
    const unSubscribe = store.subscribe(() => {
      if (store.getState().products.items !== undefined) {
        const uniqueCategories = [
          ...new Set(
            store.getState().products.items.map((item, index) => {
              return { id: index, name: item.category, type: "categories" };
            })
          ),
        ];
        setCategories(uniqueCategories);

        const uniqueBrands = [
          ...new Set(
            store.getState().products.items.map((item, index) => {
              return { id: index, name: item.brand, type: "brands" };
            })
          ),
        ];

        setBrands(uniqueBrands);
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  /**
   * render for Filter section
   */
  return (
    <>
      <div className="container-fluid border-bottom">
        {radioFilters.map((item, index) => {
          return (
            <RadioButton
              key={index}
              id={item.id}
              type={item.type}
              name={item.name}
            />
          );
        })}
      </div>

      <div className="container-fluid border-bottom mt-2 mb-2">
        <FilterLabel label="CATEGORIES" />
        {categories.map((item, index) => {
          if (index < 8)
            return (
              <Checkbox
                key={index}
                id={item.id}
                name={item.name}
                type={item.type}
              />
            );
        })}
        {categories.length !== 0 ? (
          <p className="text-danger ms-3 mt-2 mb-2">
            + {categories.length - 8} More
          </p>
        ) : null}
      </div>

      <div className="container-fluid border-bottom  mt-2 mb-2">
        <FilterLabel label="BRANDS" />
        {brands.map((item, index) => {
          if (index < 8)
            return (
              <Checkbox
                key={index}
                id={item.id}
                name={item.name}
                type={item.type}
              />
            );
        })}
        {brands.length !== 0 ? (
          <p className="text-danger ms-3 mt-2 mb-2">
            + {brands.length - 8} More
          </p>
        ) : null}
      </div>

      <div className="container-fluid border-bottom  mt-2 mb-2">
        <FilterLabel label="PRICE" />
        {prices.map((item, index) => {
          return <Checkbox key={index} id={item.id} name={item.name} />;
        })}
      </div>
    </>
  );
}

export default FilterSection;
