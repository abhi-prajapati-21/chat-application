import * as api from '../api/index'

export const fetchAllMessages = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAllMessages();
        dispatch( {type: 'FETCH_MESSAGES', payload: data} );
    } catch (error) {
        console.log(error);
    }
} 