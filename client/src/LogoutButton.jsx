import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from './store/actions';

const LogoutButton = ({ logoutUser }) => (
  <div className="logout">
      <button type="submit" onClick={e => {
         e.preventDefault();
         logoutUser();   
      }}>Logout</button>
  </div>
);

export default connect(null, { logoutUser })(LogoutButton);
