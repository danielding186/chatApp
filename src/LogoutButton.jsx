import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from './store/actions';

const LogoutButton = ({ logoutUser }) => (
  <div className="logout">
    <form onSubmit={e => {
      e.preventDefault();
      logoutUser();
    }}>
      <button type="submit">Logout</button>
    </form>
  </div>
);

export default connect(null, { logoutUser })(LogoutButton);
