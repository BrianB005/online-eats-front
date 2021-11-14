import { SHOW_ALERT,REMOVE_ALERT} from "../constants/alertConstants";

export const alertReducer=(state={show:false},action)=>{
  switch(action.type){
    case SHOW_ALERT:
      return {show:true}
    case REMOVE_ALERT:
      return {show:false}
    default:
      return state;  
  }
}