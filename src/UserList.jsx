import React from 'react';


const UserList = ({ users, currentUser }) => {
  const listItems = Object.values(users).map((user) => {
  	const avatarName = "/avatar/" + (user.avatar === undefined ?  'default.jpg':user.avatar) ;
    const className = "username" + (user.name === currentUser ? ' currentUser' : "");
    const suffix = user.name === currentUser ? " (Me)":"";
    return <li key={user.name}>
        <div className="user">
          <img className="avatar" src={avatarName} alt=""/>
          <span className={className}>{user.name}{suffix}</span>
        </div>
      </li>
  });
  return (
    <ul className="users">
      {listItems}
    </ul>
  );
};

export default UserList;