import { combineReducers } from "redux";
import authReducer from "./authReducer";
import currentUserReducer from "./currentUser";
import fetchUsersReducer from "./fetchUsersReducer";
import messagesReducer from "./msgsReducers";
import allMessagesReducer from "./friendsMessageReducer";
import fetchAMessagesReducer from "./fetchMessagesReducer";
import loginUserReducer from "./loginUserReducer";

export default combineReducers({
  authReducer, 
  currentUserReducer, 
  fetchUsersReducer,
  messagesReducer, 
  allMessagesReducer,
  fetchAMessagesReducer,
  loginUserReducer
})