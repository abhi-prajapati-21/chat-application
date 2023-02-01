
const fetchUsersReducer = (state = null, action) => {
       
       switch (action.type) {
        case 'FETCH_USERS':
           return action.payload;
        default:
            return state;
       }
}

export default fetchUsersReducer