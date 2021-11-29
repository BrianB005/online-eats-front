import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllAdmins, updateRole } from "../../redux/actions/adminActions";
import Loader from "../../components/Loader";
// import { Link } from "react-router-dom";
const Admins = () => {
  // console.log(role);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAdmins());
    // eslint-disable-next-line
  }, [dispatch]);
  const admins = useSelector((state) => state.admin);
  const { loading } = admins;

  if (loading) {
    return <Loader />;
  }
  return (
    <ColumnWrapper>
      <Link to="/admin">
        <button>Back </button>
      </Link>
      <Wrapper>
        <Column>Names</Column>
        <Column>Email address</Column>
        <Column>Joined On</Column>
        <Column>Position</Column>
      </Wrapper>

      <Wrapper style={{ display: "flex", flexDirection: "column" }}>
        {admins?.admins?.admins.map((user) => {
          return (
            <Wrapper key={user._id}>
              <Column>{user.name}</Column>
              <Column>{user.email}</Column>
              <Column>{new Date(user.createdAt).toDateString()}</Column>
              <Column>{user.role}</Column>
              <Buttons>
                <Button
                  onClick={() =>
                    dispatch(updateRole({ id: user._id, role: "vendor" }))
                  }
                >
                  Make Vendor
                </Button>
                <Button
                  onClick={() =>
                    dispatch(updateRole({ id: user._id, role: "user" }))
                  }
                >
                  Demote
                </Button>
              </Buttons>
            </Wrapper>
          );
        })}
      </Wrapper>
    </ColumnWrapper>
  );
};
const ColumnWrapper = styled.div`
  height: 60px;
  margin-top: 80px;
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  button {
    padding: 4px 8px;
    background: #082032;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
  }
`;
const Wrapper = styled.div`
  height: 60px;
  display: flex;
  width: 700px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  margin-bottom: 10px;
  justify-content: space-between;
  position: relative;
`;

const Column = styled.div`
  width: 160px;
  margin-right: 8px;
  flex-wrap: nowrap;
  overflow-x: auto;
  select {
    cursor: pointer;
  }
`;
const Buttons = styled.div`
  display: flex;
  position: absolute;
  right: -100px;
`;
const Button = styled.button`
  margin-right: 5px;
  border-radius: 8px;
  transition: all 0.7s linear;
  border: none;
  display: flex;
  justify-content: center;
  padding: 8px 16px;
  background-color: #082032;
  &:hover {
    opacity: 0.8;
  }
  color: white;
  cursor: pointer;
`;

export default Admins;
