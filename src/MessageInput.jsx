import React from 'react';

import { connect } from 'react-redux';
import {postMessage} from './store/actions';

const MessageInput = ({postMessage}) => {
	let input;
  	return (
		<div className="outgoing">
			<form onSubmit={e => {
				e.preventDefault()
				if (!input.value.trim()) {
				return
				}
				postMessage(input.value);
				input.value = ''
			}}>
				<input className="msg-input" 
						placeholder="Enter message to send"
						ref= {node => (input = node)} />
				<button className="msg-submit" type="submit">Send</button>
	 		</form>
	 	</div>
	);
}

export default connect(null, {postMessage})(MessageInput);

