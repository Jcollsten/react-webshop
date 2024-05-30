import React from "react";
import ProductList from "./ProductList";
import CategoryFilter from "./CategoryFilter";
import imgSrc from "../../Assets/shopImage.jpg";

function Shop() {
  return (
    <div className="pb-20 bg-gray-100">
      <div>
        <div
          className="mb-7"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 99) 100%), url(${imgSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "50vh",
            overflow: "hidden",
          }}
        >
          <div className="flex justify-center pt-20">
            <CategoryFilter />
          </div>
        </div>
        <ProductList />
      </div>
    </div>
  );
}

export default Shop;
