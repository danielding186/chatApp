import React from 'react';
import './LoginForm.css';

const ImageChooser = ({hanldeSubmit}) => (
  <button type="submit" onClick={hanldeSubmit}>Image</button>
);

const NameInput = ({handleInput, username}) => (
  <div className="username-panel">
      <label className="username-label">Username</label>
      <input className="username-input" placeholder="Enter Username"
       onChange={ e => handleInput(e.target.value)} value={username} />
  </div>
);

const SubmitButton = ({handleLogin, username}) => (
  <div className="submit-panel">
      <button className="submit-button" onClick={handleLogin} type="submit" disabled = {username === ""}>Login</button>
  </div>
);


const LoginForm = (props) => (
  <div className="login-panel">
    <NameInput handleInput={props.onInputChange} username={props.username} /> 
    <SubmitButton handleLogin={props.onLogin} username={props.username} /> 
  </div>
);

export default LoginForm;