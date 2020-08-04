import { USERS_SEARCH, USER_FETCH, USER_RESPONSE } from '../actions/userActions';

const UserReducers = (state = { users: [], user: {}, userResponse: {} }, action) => {
    switch (action.type) {
        case USERS_SEARCH: 
            return { ...state,
                users: action.users.map((u) => {
                    return Object.assign(u);
                })
            };
        case USER_FETCH:
            return { ...state,
                user: action.user
            };
        case USER_RESPONSE:
            return { ...state,
                userResponse: action.userResponse
            };
        default:
            return state
    }
}

export default UserReducers;