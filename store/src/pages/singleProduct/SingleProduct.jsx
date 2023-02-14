import { Add, Remove } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import axios from "axios";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  gap: 25px;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  margin: 30px 0;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const FilterTitle = styled.span`
  font-weight: 200;
  font-size: 20px;
`;

const FilterColor = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  gap: 5px;
`;

const Amount = styled.span`
  height: 30px;
  width: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  padding: 15px;
  background-color: #fff;
  border: 2px solid teal;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    color: #fff;
    background-color: teal;
    border: 2px solid transparent;
    transition: all 0.2s ease;
  }
`;

const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const product_id = useParams().id;
  const fetchSingleProduct = async () => {
    const res = await axios.get(
      `http://localhost:3000/api/product/find/${product_id}`
    );
    setSingleProduct(res.data);
  };

  useEffect(() => {
    fetchSingleProduct();
  }, []);
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={singleProduct.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{singleProduct.title}</Title>
          <Desc>{singleProduct.desc}</Desc>
          <Price>${singleProduct.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="cyan" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterOption>XS</FilterOption>
                <FilterOption>S</FilterOption>
                <FilterOption>M</FilterOption>
                <FilterOption>XXL</FilterOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default SingleProduct;
