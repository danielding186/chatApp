export const loginService = (username) => {
  return fetch('/login', {
    method: 'POST',
    headers: new Headers( {'content-type': 'application/json'} ),
    body: JSON.stringify( { username } )
  })
  .catch( error => Promise.reject({ error }) )
  .then( response => {
    if( response.ok ) {
       return response.json();
    } 
    return Promise.reject({ message: response.statusText });
  });
};


export const logoutService = (username) => {
  return fetch('/logout', {
      method: 'POST',
      headers: new Headers( {'content-type': 'application/json'} ),
      body: JSON.stringify( {username} )
    })
    .catch( error => Promise.reject({ error }) )
    .then( response => { 
      if( response.ok ) {
         return {'logout':true};
      } 
      return Promise.reject({ message: response.statusText });
    });
};

export const newMessageService = (username, text) => {
  return fetch('/messages/', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify( {username, text} )
  })
  .catch( error => Promise.reject({ error }) )
  .then( response => {
    if( response.ok ) {
       return response.json();
    }
    return Promise.reject({ message: response.statusText });
  });
};

export const messagesService = () => {
  return fetch('/messages/')
    .catch( error => Promise.reject({ error }) )
    .then( response => {
      if( response.ok ) {
        return response.json();
      }
      return Promise.reject({ message: response.statusText });
    });
};