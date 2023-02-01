const allMessagesReducer = (state = [], action) => {
     switch (action.type) {
        case 'ALL_MESSAGE':
            return action.payload;
        default:
            return state;
     }
}

export default allMessagesReducer;