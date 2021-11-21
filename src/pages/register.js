import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { register } from "../redux/actions/userActions";
import Alert from "../components/Alert";
const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password2, setPassword2] = useState("");
  // console.log(password2);
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userRegistration = useSelector((state) => state.userRegister);

  const { userInfo, loading, error } = userRegistration;
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  if (userInfo) {
    navigate("/");
  }
  useEffect(() => {
    if (error) {
      setShowAlert(true);
    }
  }, [error]);

  const handleClick = (e) => {
    e.preventDefault();
    if (password !== password2) {
      alert("Password do not match!!");
    } else {
      dispatch(register(name, email, password));
    }
  };
  return (
    <Container>
      {showAlert && <Alert type="danger" title={error} />}
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          {/* <Input placeholder="last name" /> */}
          <Input placeholder="username (optional)" />
          <Input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            type="email"
            required
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            type="password"
            required
          />
          <Input
            onChange={(e) => setPassword2(e.target.value)}
            placeholder="confirm password"
            type="password"
            required
          />
          <Button onClick={handleClick}>
            {loading ? "Hold On...." : "REGISTER"}
          </Button>
        </Form>
        <Login>
          Already have an Account?
          <Link to="/login">
            <button>Login</button>
          </Link>
        </Login>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  /* background:#FFA6D5; */
  background: url("https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8yZGIwODI2Mi1jZjZhLTQ5MzgtODRlNy0xMmYxYzI1MTAxMDAuanBlZw==")
    center center/cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;

  padding: 20px;
  border-radius: 20px;
  background-color: lightgray;
  box-shadow: 1px 4px 17px #ffa6d5;
  @media screen and (max-width: 600px) {
    width: 75%;
  }
  @media screen and (min-width: 900px) {
    width: 39%;
  }
  @media screen and (min-width: 1100px) {
    width: 28%;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
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
    //   opacity:0.8;
    //   background:#FFA6D5;
    color: blue;
  }
  color: white;
  cursor: pointer;
`;
const Login = styled.div`
  margin-top: 18px;
  button {
    padding: 6px 12px;
    margin-left: 4px;
    background: #082032;
    color: white;
    border-radius: 5px;
    transition: all 0.4s linear;
    border: none;
    &:hover {
      border-radius: 15px;
    }
  }
`;
export default Register;
