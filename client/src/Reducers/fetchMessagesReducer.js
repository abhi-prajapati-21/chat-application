const fetchAMessagesReducer = (state = null, action) => {
    switch (action.type) {
        case 'FETCH_MESSAGES':
            return [action.payload];
        default:
            return state;
     }
}
export default fetchAMessagesReducer