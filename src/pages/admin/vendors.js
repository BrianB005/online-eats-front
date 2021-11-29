import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getAllVendors, updateRole } from "../../redux/actions/adminActions";
import Loader from "../../components/Loader";
// import { Link } from "react-router-dom";
const Vendors = () => {
  // console.log(role);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllVendors());
    // eslint-disable-next-line
  }, []);
  const admin = useSelector((state) => state.admin);
  const { loading } = admin;
  // console.log(vendors);
  const handleClick = (id) => {
    dispatch(updateRole({ id: id, role: "user" }));
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <ColumnWrapper>
      <Link to="/admin">
        <button>Back</button>
      </Link>
      <Wrapper>
        <Column>Names</Column>
        <Column>Email address</Column>
        <Column>Joined On</Column>
        <Column>Position</Column>
      </Wrapper>

      <Wrapper style={{ display: "flex", flexDirection: "column" }}>
        {admin?.vendors?.vendors.map((user) => {
          return (
            <Wrapper key={user._id}>
              <Column>{user.name}</Column>
              <Column>{user.email}</Column>
              <Column>{new Date(user.createdAt).toDateString()}</Column>
              <Column>{user.role}</Column>
              <Button onClick={() => handleClick(user._id)}>Demote </Button>
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

const Button = styled.button`
  padding: 6px 11px;
  cursor: pointer;
  border-radius: 8px;
  background: red;
`;

export default Vendors;
