import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.5)),
    url("https://www.thistlesstirling.com/wp-content/uploads/2016/08/BW6100-Thistles-Spring_Summer-Fashion-Web-Banner-1920x1080px2.jpg")
      no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #fff;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 12px;
  margin: 10px 0;

  &:focus {
    outline-color: teal;
  }
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: #fff;
  cursor: pointer;
  transition: 0.5s ease;
  margin-bottom: 20px;

  &:hover {
    background-color: #00abab;
  }
`;

const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  color: teal;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" autoFocus />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link href="#">Forgot Password?</Link>
          <Link href="#">Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
