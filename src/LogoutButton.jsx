import React from 'react';

const LogoutButton = ({onLogout}) => (
    <div className="logout">
        <button type="submit" onClick={onLogout}>Logout</button>
   </div>
);

export default LogoutButton;
