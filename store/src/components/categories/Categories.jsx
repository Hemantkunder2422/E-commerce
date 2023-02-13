import styled from "styled-components";
import { categories } from "../../data";
import CategoryItem from "../categoryItem/CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  gap: 20px;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => {
        return <CategoryItem item={item} key={item.id} />;
      })}
    </Container>
  );
};

export default Categories;
