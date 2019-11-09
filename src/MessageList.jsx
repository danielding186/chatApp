import React from 'react';

function getShortMonth(month) {
  const desp = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  return desp[month-1]; 
}

function getDateTime(date) {
    date = new Date(date);

    let hour = date.getHours();
    let min  = date.getMinutes();
    
    hour = (hour < 10 ? "0" : "") + hour;
    min = (min < 10 ? "0" : "") + min;
   
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day  = date.getDay();
    
    const now = new Date();
    if (now.getDay() === date.getDay()) {
      return hour + ":" + min;
    } else if (now.getDay() === date.getDay()+1) {
      return 'Yesterday ' + hour + ":" + min;
    } else {
      return getShortMonth(month) + "," + day + ' ' + year + " " + hour + ":" + min;
    }
}

const MessageItem = ({className, sender, ts, text, avatar}) => (
  <div className={className}>
      <div className="user-info">       
        <img className="avatar" src={avatar} alt=""/>
        <span className="username">{sender}</span>
      </div>
      <div className="text-info">
        <p className="message-text">{text}</p>
        <span className="timestamp">{getDateTime(ts)}</span>
      </div>
  </div>
);

const MessageList = ({messages, currentUser, users}) => {
	const listItems = messages.map((msg) => {
      let avatar = 'default.jpg';
    	if ((msg.sender in users) && ('avatar' in users[msg.sender]))
        avatar = users[msg.sender]['avatar'];

      let className = 'message-item ';
      className += (currentUser === msg.sender ? 'message-right':'message-left');

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