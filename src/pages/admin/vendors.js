import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getAllVendors } from "../../redux/actions/adminActions";
import Loader from "../../components/Loader";
// import { Link } from "react-router-dom";
const Vendors = () => {
  // console.log(role);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllVendors());
    // eslint-disable-next-line
  }, [dispatch]);
  const vendors = useSelector((state) => state.admin);
  const { loading } = vendors;
  // console.log(vendors);
  if (loading) {
    return <Loader />;
  }
  return (
    <ColumnWrapper>
      <Wrapper>
        <Column>Names</Column>
        <Column>Email address</Column>
        <Column>Joined On</Column>
        <Column>Position</Column>
      </Wrapper>

      <Wrapper style={{ display: "flex", flexDirection: "column" }}>
        {vendors?.vendors?.map((user) => {
          return (
            <Wrapper key={user._id}>
              <Column>{user.name}</Column>
              <Column>{user.email}</Column>
              <Column>{user.createdAt.split("T")[0]}</Column>
              <Column>{user.role}</Column>
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

export default Vendors;
