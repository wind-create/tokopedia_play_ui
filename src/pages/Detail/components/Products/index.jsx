import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../../config/Api";
import ProductCard from "./ProductCard";
import "./index.css";

const Products = ({ video_id }) => {
  const [productsData, setProductsData] = useState([]);
  const getProducts = async () => {
    axios
      .get(`${API_URL}/products/${video_id}`)
      .then((response) => {
        setProductsData(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="flex flex-col gap-3 custom-product-height">
      {productsData.map((product) => (
        <ProductCard
          key={product._id}
          title={product.title}
          img_url={product.img_url}
          price={product.price}
          product_url={product.product_url}
        />
      ))}
    </div>
  );
};

export default Products;
