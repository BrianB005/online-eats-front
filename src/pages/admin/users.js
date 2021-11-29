import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, updateRole } from "../../redux/actions/adminActions";
import Loader from "../../components/Loader";
// import { Link } from "react-router-dom";
const Users = () => {
  // console.log(role);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.admin);

  const handleClick = (id) => {
    dispatch(updateRole({ id: id, role: "vendor" }));
  };
  const { success, msg, loading } = useSelector((state) => state.updateUser);
  useEffect(() => {
    if (success) {
      alert(msg.msg);
      dispatch(getAllUsers());
    }

    // eslint-disable-next-line
  }, [success, msg]);

  useEffect(() => {
    dispatch(getAllUsers());
    // eslint-disable-next-line
  }, []);
  if (users.loading) {
    return <Loader />;
  }

  return (
    <ColumnWrapper>
      <Link to="/admin">
        <button>Back</button>
      </Link>
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
            // <Link to={`/admin/users/${user._id}`}>
            <Wrapper key={user._id}>
              <Column>{user.name}</Column>
              <Column>{user.email}</Column>
              <Column>{new Date(user.createdAt).toDateString()}</Column>
              <Column>{user.role}</Column>
              <Button onClick={() => handleClick(user._id)} disabled={loading}>
                {" "}
                Make Vendor
              </Button>
              <Button
                onClick={() =>
                  dispatch(updateRole({ id: user._id, role: "admin" }))
                }
                disabled={loading}
              >
                Make Admin
              </Button>
            </Wrapper>
            // </Link>
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
  margin: auto;
  margin-top: 9px;
  margin-right: 6px;
  border-radius: 8px;
  transition: all 0.7s linear;
  border: none;
  display: flex;
  justify-content: center;
  padding: 8px 16px;
  background-color: #082032;
  &:disabled {
    cursor: not-allowed;
  }
  &:hover {
    opacity: 0.8;
  }
  color: white;
  cursor: pointer;
`;

export default Users;
