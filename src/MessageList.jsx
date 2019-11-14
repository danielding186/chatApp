import React from 'react';
import getDateTime from './Utils';

const MessageItem = ({ className, sender, ts, text, avatar }) => (
  <div className={className}>
    <div className="user-info">
      <img className="avatar" src={avatar} alt="" />
      <span className="username">{sender}</span>
    </div>
    <div className="text-info">
      <p className="message-text">{text}</p>
      <span className="timestamp">{getDateTime(ts)}</span>
    </div>
  </div>
);

const MessageList = ({ messages, currentUser, users }) => {
  const listItems = messages.map((msg) => {
    let avatar = 'default.jpg';
    if ((msg.sender in users) && ('avatar' in users[msg.sender]))
      avatar = users[msg.sender]['avatar'];

    let className = 'message-item ';
    className += (currentUser === msg.sender ? 'message-right' : 'message-left');

    avatar = '/avatar/' + avatar;
    return <li key={msg.id}>
      <MessageItem className={className}
        sender={msg.sender}
        ts={msg.timestamp}
        text={msg.text}
        avatar={avatar} />
    </li>
  });
  return (
    <ul className="messages">{listItems}</ul>
  );
}

export default MessageList;