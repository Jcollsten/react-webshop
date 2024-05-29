import React from "react";
import ProductList from "./ProductList";
import CategoryFilter from "./CategoryFilter";

function Shop() {
  return (
    <div className="bg-gray-100 pb-20">
      <div>
        <h2>SHOP</h2>
        <div className="flex justify-center pt-4">
          <CategoryFilter />
        </div>

        <ProductList />
      </div>
    </div>
  );
}

export default Shop;
