import { REMOVE_ALERT,SHOW_ALERT } from "../constants/alertConstants"

export const showAlert=()=>(dispatch)=>{
  dispatch({type:SHOW_ALERT})
}
export const removeAlert=()=>(dispatch)=>{
  dispatch({type:REMOVE_ALERT})
}