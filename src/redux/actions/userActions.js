import { searchUsers, 
    getUserById, 
    deleteUser,
    createUser,
    updateUser } from '../../services/UserService'
export const USERS_SEARCH = 'USERS_SEARCH';

const internalLoad = (users) => {
    return {
        type: USERS_SEARCH,
        users
    }
}

export const findUsers = term => {
    return (dispatch) => {
        searchUsers(term).then(json => dispatch(internalLoad(json)));
    }
};

export const USER_FETCH = 'USER_FETCH';

const internalFetch = (user) => {
    return {
        type: USER_FETCH,
        user
    }
}

export const getUser = id => {
    return (dispatch) => {
        getUserById(id).then(json => dispatch(internalFetch(json)));
    }
}

export const USER_RESPONSE = 'USER_RESPONSE';

export const internalResponse = (userResponse) => {
    return {
        type: USER_RESPONSE,
        userResponse
    }
}

export const addUser = userModel => {
    return (dispatch) => {
        createUser(userModel).then(json => dispatch(internalResponse(json)));
    }
}

export const editUser = userModel => {
    return (dispatch) => {
        updateUser(userModel).then(json => dispatch(internalResponse(json)));
    }
}

export const removeUser = id => {
    return (dispatch) => {
        deleteUser(id).then(json => dispatch(internalResponse(json)));
    }
}

export const cleanReponse = () => {
    return (dispatch) => {
        dispatch(internalResponse({}));
    }
}