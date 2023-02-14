import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../../data";
import Product from "../Product/Product";
import axios from "axios";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ category, filter, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        category
          ? `http://localhost:3000/api/product/all?category=${category}`
          : "http://localhost:3000/api/product/all"
      );
      setProducts(res.data);
    } catch (err) {}
  };
  console.log(filteredProducts);

  useEffect(() => {
    fetchProducts();
  }, [category]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) => {
        [...prev].sort((a, b) => a.createdAt - b.createdAt);
      });
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filter]);

  return (
    <Container>
      {category
        ? filteredProducts.map((item) => {
            return <Product item={item} key={item._id} />;
          })
        : products.slice(0, 8).map((item) => {
            return <Product item={item} key={item._id} />;
          })}
    </Container>
  );
};

export default Products;
