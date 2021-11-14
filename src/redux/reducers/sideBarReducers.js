import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from "../constants/sidebarConstants";

export const sideBarReducer=(state={sideBarOpen:false},action)=>{
  switch(action.type){
    case OPEN_SIDEBAR:
      return{sideBarOpen:true}
    case CLOSE_SIDEBAR:
      return {sideBarOpen:false}
    default:
      return state;
  } 
}