import React, { useState } from "react";
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
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Green</Option>
            <Option>Yellow</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (low to high)</Option>
            <Option>Price (high to low)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductsLists;
