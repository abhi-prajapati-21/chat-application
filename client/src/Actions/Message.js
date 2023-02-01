import * as api from '../api/index'
import { setCurrentUser } from './currentUser';


export const message = (userInfo)=> async (dispatch) => {

       const { Id, message, userName} = userInfo;

    try {
        const { data } = await api.message( Id, message, userName);
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        dispatch({type: 'SEND_MESSAGE', payload: data})
    } catch (error) {
        console.log(error);
    }

}

//  export const allMessages = (allMessages) => async (dispatch) => {
      
//       const { id, message, userName} = allMessages;

//         try {
//           const { data } = await api.allMessages(id, message, userName);
//           dispatch({type: 'ALL_MESSAGE', payload: data})
//         } catch (error) {
//          console.log(error);
//         }
//  }

//  export const friendsMessage = (id, friendsMessage) => async (dispatch) => {

//     try {
//         const { data } = await api.friendsMessage(id, friendsMessage);
//         dispatch({type: 'SEND_MESSAGE', payload: data})
//     } catch (error) {
//         console.log(error);
//     }

// }