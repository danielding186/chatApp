import React from 'react';
import './LoginForm.css';

import { connect } from 'react-redux';
import { loginUser } from './store/actions';

const LoginForm = ({currentUser, loginUser }) => {
  if (currentUser !== '')
    return (<div/>);

  let input;
  return (
    <div className="login-panel">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        loginUser(input.value);
        input.value = ''
      }}>

        <div className="username-panel">
          <label className="username-label">Username</label>
          <input className="username-input" placeholder="Enter Username"
            ref={node => (input = node)} />
        </div>
        <div className="submit-panel">
          <button className="submit-button" type="submit">Login</button>
        </div>
      </form>
    </div>)
};

export default connect(state => ({currentUser: state.currentUser}), { loginUser })(LoginForm);