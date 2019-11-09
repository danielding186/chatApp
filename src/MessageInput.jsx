import React from 'react';

const MessageInput = (props) => (
	<div className="outgoing">
		<input className="msg-input" onKeyPress = {e => {  if (e.key === "Enter") props.onNewMessage(); }}
				 onChange={ e => props.handleMsgInput(e.target.value) }
				 value = {props.inputMsg}  
		 		placeholder="Enter message to send"/>
		 <button className="msg-submit" type="submit" onClick={props.onNewMessage} disabled={props.inputMsg === ''}>Send</button>
     </div>
	
);

export default MessageInput;

