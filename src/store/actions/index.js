import store from '../index';

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const POST_MESSAGE = 'POST_MESSAGE';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const fetchMessages = () => dispatch => {
  console.log('fetching ....');
  fetch('/messages/')
    .then(res => res.json())
    .then(infos => dispatch({
      type: FETCH_MESSAGES,
      payload: infos
    }));
};

export const postMessage = text => dispatch => {
  console.log('postMessage:' + text);
  let username = store.getState().inputUser;
  fetch('/messages/', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({ username, text })
  })
    .then(res => res.json())
    .then(infos => dispatch({
      type: POST_MESSAGE,
      payload: infos
    }));
};

export const loginUser = (username) => dispatch => {
  console.log('loginUser ....');
  fetch('/login', {
    method: 'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify({ username })
  })
    .then(res => res.json())
    .then(infos => dispatch({
      type: LOGIN_USER,
      username,
      ...infos
    }
    ));
};

export const logoutUser = () => dispatch => {
  console.log('logoutUser ....');
  let username = store.getState().inputUser;
  fetch('/logout', {
    method: 'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify({ username })
  })
    .then(res => res.json())
    .then(infos => dispatch({
      type: LOGOUT_USER,
    }));
};