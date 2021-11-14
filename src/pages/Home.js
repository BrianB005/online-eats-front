import React from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../components/Sidebar';

import Header from '../components/Header';
import Filters from '../components/Filters';
import AddButton from '../components/AddButton';
// import Alert from '../components/Alert'

import Products from '../components/Products';
const Home = () => {
  const userInfo=useSelector((state)=>state.userLogin.userInfo)
  // const{userInfo}=userLogin
  // console.log(userInfo.role);

  const currentCategory=useSelector((state)=>state.category.category)
  return (
    <div>
    <Sidebar/>
    <Header title={currentCategory} />
    {/* <Alert removeAlert message="Hello from app"/> */}
    {userInfo?.user?.role==="vendor" &&<AddButton>Add New Item</AddButton>}
    <Filters/>
    <Products/>
   </div>
  )
}

 

export default Home;
