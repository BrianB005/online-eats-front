import { SELECT_CATEGORY } from "../constants/categoryConstants"

export const changeCategory=(currentCategory)=>(dispatch)=>{
  dispatch ({type:SELECT_CATEGORY,payload:currentCategory})
}