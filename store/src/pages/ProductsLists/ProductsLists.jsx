import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../../components/annoucement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Products from "../../components/Products/Products";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option``;

const ProductsLists = () => {
  const [showAccouncement, setShowAccouncement] = useState(true);
  const [sort, setSort] = useState("newest");
  const [filter, setFilter] = useState({});
  const category = useParams().id;

  const handlefilters = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
      {showAccouncement && (
        <Announcement showAccouncement={setShowAccouncement} />
      )}
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handlefilters}>
            <Option>Color</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>green</Option>
            <Option>yellow</Option>
          </Select>
          <Select name="size" onChange={handlefilters}>
            <Option>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select
            onChange={(e) => {
              setSort(e.target.value);
            }}
          >
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (low to high)</Option>
            <Option value="desc">Price (high to low)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filter={filter} sort={sort} />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductsLists;
