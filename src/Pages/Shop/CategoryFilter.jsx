import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

export default function CategoryFilter() {
  const { category, setCategory } = useContext(ShopContext);
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  return (
    <div className="flex justify-center flex-col w-full md:w-3/5 lg:w-2/5 mx-auto shadow-2xl rounded-md bg-gray-100 bg-opacity-30 backdrop-filter backdrop-blur-md p-7 md:p-20 ">
      <p className="flex justify-center text-3xl text-white font-semibold">
        Sort by category here!
      </p>
      <select
        onChange={handleCategoryChange}
        value={category}
        className="py-2 px-4 mt-2 rounded-md"
      >
        <option value="">All</option>
        <option value="laptops">laptops</option>
        <option value="smartphones">smartphones</option>
        <option value="tablets">tablets</option>
        <option value="mobile-accessories">mobile-accessories</option>
        <option value="furniture">furniture</option>
        <option value="groceries">groceries</option>
        <option value="kitchen-accessories">kitchen-accessories</option>
        <option value="home-decoration">home-decoration</option>
        <option value="tops">tops</option>
        <option value="skin-care">skin-care</option>
        <option value="beauty">beauty</option>
        <option value="fragrances">fragrances</option>
        <option value="sunglasses">sunglasses</option>
        <option value="mens-watches">mens-watches</option>
        <option value="mens-shoes">mens-shoes</option>
        <option value="mens-shirts">mens-shirts</option>
        <option value="womens-bags">womens-bags</option>
        <option value="womens-dresses">womens-dresses</option>
        <option value="womens-jewellery">womens-jewellery</option>
        <option value="womens-shoes">womens-shoes</option>
        <option value="womens-watches">womens-watches</option>
        <option value="sports-accessories">sports-accessories</option>
        <option value="motorcycle">motorcycle</option>
        <option value="vehicle">vehicle</option>
      </select>
    </div>
  );
}
