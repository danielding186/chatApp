import { FETCH_MESSAGES, POST_MESSAGE, LOGIN_USER, LOGOUT_USER } from '../actions';

const initialState = {
    users: {},
    messages: [],
    inputUser: '',
    isLogined: false,
};

const myReducer = (state = initialState, action) => {
    console.log('myReducer:' + { action });
    switch (action.type) {
        case FETCH_MESSAGES:
        case POST_MESSAGE:
            return {
                ...state,
                messages: action.payload.messages,
                users: action.payload.users
            };
        case LOGIN_USER:
            return {
                ...state,
                messages: action.messages,
                users: action.users,
                inputUser: action.username,
                isLogined: true
            };
        case LOGOUT_USER:
            return {
                ...state,
                inputUser: "",
                isLogined: false
            };
        default:
            return state;
    }
};

export default myReducer;
