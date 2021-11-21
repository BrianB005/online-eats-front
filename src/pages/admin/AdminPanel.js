import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const AdminPanel = () => {
  return (
    <Wrapper>
      <Link to="/admin/users">
        <Button>All Users</Button>
      </Link>
      <Link to="/admin/vendors">
        <Button>All Vendors</Button>
      </Link>
      <Link to="/admin/admins">
        <Button>All Admins</Button>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  padding: 9px 14px;
  margin-bottom: 30px;
`;

export default AdminPanel;
