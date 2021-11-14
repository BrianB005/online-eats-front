import { SELECT_CATEGORY } from "../constants/categoryConstants";

export const categoryReducer=(state={},action)=>{
  switch(action.type){
    case SELECT_CATEGORY:
      return {category:action.payload}
   default:
     return state;   
  }
}