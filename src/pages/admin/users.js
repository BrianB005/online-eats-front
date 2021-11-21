import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/actions/adminActions";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";
const Users = () => {
  // console.log(role);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
    // eslint-disable-next-line
  }, [dispatch]);
  const users = useSelector((state) => state.admin);
  const { loading } = users;

  if (loading) {
    return <Loader />;
  }
  return (
    <ColumnWrapper>
      Total Number:{users?.length}
      <Wrapper>
        <Column>Names</Column>
        <Column>Email address</Column>
        <Column>Joined On</Column>
        <Column>Position</Column>
      </Wrapper>
      <Wrapper style={{ display: "flex", flexDirection: "column" }}>
        {users.users?.users.map((user) => {
          return (
            <Link to={`/admin/users/${user._id}`}>
              <Wrapper key={user._id}>
                <Column>{user.name}</Column>
                <Column>{user.email}</Column>
                <Column>{user.createdAt.split("T")[0]}</Column>
                <Column>{user.role}</Column>
              </Wrapper>
            </Link>
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

export default Users;
