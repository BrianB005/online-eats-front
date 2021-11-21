import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
// import FlashMessage from 'react-flash-message'

import styled from "styled-components";
import { login } from "../redux/actions/userActions";
import { useNavigate } from "react-router-dom";
import Alert from "../components/Alert";
// import {showAlert} from '../redux/actions/alertActions'
import { useDispatch, useSelector } from "react-redux";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading, error } = userLogin;
  const [showAlert, setShowAlert] = useState(false);
  // console.log(userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (userInfo) {
    navigate("/");
  }

  if (error) {
    setShowAlert(true);
  }
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Container>
      <Wrapper>
        {showAlert && <Alert type="danger" mtitle={error} />}
        <Title>LOGIN</Title>

        <Logo>OnlineEats</Logo>
        <Form>
          <Input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email address"
          />
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <Check>
            <Checkbox type="checkbox"></Checkbox>
            Remember me?
          </Check>
          <Forgot>Forgot Password?</Forgot>
          <Button type="submit" onClick={handleClick}>
            {loading ? "Loading...." : "LOGIN"}
          </Button>
        </Form>
      </Wrapper>
      <Register>
        Not registered?
        <Link to="/register">
          <RegisterButton>Register</RegisterButton>
        </Link>
      </Register>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: url("https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8yZGIwODI2Mi1jZjZhLTQ5MzgtODRlNy0xMmYxYzI1MTAxMDAuanBlZw==")
    center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 30%;
  position: relative;
  padding: 20px;
  border-radius: 20px;
  /* background: rgba(0, 0, 0, 0.3); */
  backdrop-filter: blur(12px);
  box-shadow: 1px 4px 12px #082032;
  @media screen and (max-width: 1000px) {
    width: 43%;
  }
  @media screen and (max-width: 700px) {
    width: 75%;
  }
`;
const Check = styled.div`
  display: flex;
  align-items: center;
  color: white;
  margin: 10px 0;
  cursor: pointer;
`;
const Checkbox = styled.input`
  margin-right: 3px;
`;
const Forgot = styled.a`
  cursor: pointer;
  color: white;
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }
`;
const Logo = styled.h4`
  position: absolute;
  top: -60px;
  left: 50%;
  background: #082032;
  width: 100px;
  height: 100px;
  // font-weight:700;
  //   font-size:30px;

  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%);
  color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  display: flex;
  padding-top: 30px;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  //   padding-top:17px;
`;

const Input = styled.input`
  //   flex: 1;
  min-width: 40%;
  margin: 10px 5px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 80%;
  margin: auto;
  margin-top: 9px;
  border-radius: 25px;
  transition: all 0.7s linear;
  border: none;
  display: flex;
  justify-content: center;
  padding: 15px 30px;
  background-color: #082032;
  &:hover {
    opacity: 0.8;
  }
  color: white;
  cursor: pointer;
`;
const Register = styled.div`
  display: flex;
  // flex-direction:row;
  padding-top: 14px;
  text-align: center;
  // justify-content:center;
  align-items: center;
`;
const RegisterButton = styled.button`
  // width: 30%;
  margin-left: 9px;
  // margin:auto;
  margin-top: 9px;
  border-radius: 20px;
  transition: all 0.7s linear;
  border: none;
  display: flex;
  justify-content: center;
  padding: 8px 22px;
  margin-bottom: 1px;
  background-color: #082032;
  &:hover {
    opacity: 0.8;
    // background:#FFA6D5;
    // color:#082032;
  }
  color: white;
  cursor: pointer;
`;

export default Login;
