  import { NOTE_LIST_FAIL, NOTE_LIST_REQUEST, NOTE_LIST_SUCESS,NOTE_CREATE_SUCESS,NOTE_CREATE_FAIL,NOTE_CREATE_REQUEST } from "../constants/noteConstants";

  export const noteListReducer=(state={notes:[]},action)=>{
    switch(action.type){
        case NOTE_LIST_REQUEST: return {loading:true};
        case NOTE_LIST_SUCESS: return {loading:false,notes:action.payload};
        case NOTE_LIST_FAIL: return {loading:false,error:action.payload};
        default:return state;
    }
  }

  export const noteCreateReducer=(state={},action)=>{
switch(action.type){
  case NOTE_CREATE_REQUEST: return {loading:true};
  case NOTE_CREATE_SUCESS: return {loading:false,sucess:true};
  case NOTE_CREATE_FAIL : return {loading:false,error:action.payload};
  default : return state;
}
  }