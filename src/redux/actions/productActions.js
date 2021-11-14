import { CREATE_PRODUCT_FAIL, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAIL, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, GET_CATEGORIES_FAIL, GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS, GET_PRODUCTS_FAIL, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCT_FAIL, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, SEARCH_PRODUCTS_FAIL, SEARCH_PRODUCTS_REQUEST, SEARCH_PRODUCTS_SUCCESS } from "../constants/productConstants"
import Axios  from 'axios'
export const getProducts=(searchTerm)=>async(dispatch)=>{
  if(searchTerm){
  dispatch({type:SEARCH_PRODUCTS_REQUEST})
  try{
    const {data}=await Axios.get(`http://localhost:5000/api/v1/products/search?search_query=${searchTerm}`)
    dispatch({type:SEARCH_PRODUCTS_SUCCESS,payload:data})
  }catch(error){
    dispatch({type:SEARCH_PRODUCTS_FAIL,payload:error.response&&error.response.data.msg?error.response.data.msg:error.message})
  }
}
  dispatch({type:GET_PRODUCTS_REQUEST})
  try{
    const {data}=await Axios.get("http://localhost:5000/api/v1/products")
    dispatch({type:GET_PRODUCTS_SUCCESS,payload:data})
  }catch(error){
    dispatch({type:GET_PRODUCTS_FAIL,payload:error})
  }
}
export const getProduct=(productId)=>async(dispatch)=>{
  dispatch({type:GET_PRODUCT_REQUEST,payload:productId})
  try{
    const {data}=await Axios.get(`http://localhost:5000/api/v1/products/find/${productId}`)
    dispatch({type:GET_PRODUCT_SUCCESS,payload:data})
  }catch(error){
    dispatch({type:GET_PRODUCT_FAIL,payload:error})
  }
}

export const getCatgories=()=>async(dispatch)=>{
  dispatch({type:GET_CATEGORIES_REQUEST})
  try {
    const {data}=await Axios.get("http://localhost:5000/api/v1/products/categories");
    dispatch({type:GET_CATEGORIES_SUCCESS,payload:data})
  } catch (error) {
    dispatch({type:GET_CATEGORIES_FAIL,payload:error})
  }
}
export const addProduct=(product)=>async(dispatch)=>{
  dispatch({type:CREATE_PRODUCT_REQUEST,payload:product})
  try {
    const {data}=await Axios.post("http://localhost:5000/api/v1/products",product)
    dispatch({type:CREATE_PRODUCT_SUCCESS,payload:data})
  } catch (error) {
    const failMessage =
      error.response && error.response.data.msg
        ? error.response.data.msg
        : error.message
    dispatch({type:CREATE_PRODUCT_FAIL,payload:failMessage})
  }
}

export const updateItem=(product)=>async(dispatch)=>{
  dispatch({type:DELETE_PRODUCT_REQUEST,payload:product})
  try {
    const {data}=await Axios.put(`http://localhost:5000/api/v1/products/find/${product._id}`,product)
    dispatch({type:DELETE_PRODUCT_SUCCESS})
    console.log(data);
  } catch (error) {
    const failMessage= error.response && error.response.data.msg
        ? error.response.data.msg
        : error.message
    dispatch({type:DELETE_PRODUCT_FAIL,payload:failMessage})    
  }

}
export const deleteItem=(productId)=>async(dispatch)=>{
  dispatch({type:DELETE_PRODUCT_REQUEST,payload:productId})
  try {
    const {data}=await Axios.delete(`http://localhost:5000/api/v1/products/find/${productId}`)
    dispatch({type:DELETE_PRODUCT_SUCCESS})
    console.log(data);
  } catch (error) {
    const failMessage= error.response && error.response.data.msg
        ? error.response.data.msg
        : error.message
    dispatch({type:DELETE_PRODUCT_FAIL,payload:failMessage})    
  }

}