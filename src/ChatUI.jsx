import React from 'react';

import UserList from './UserList';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

import LogoutButton from './LogoutButton';
import { connect } from 'react-redux';

const ChatUI = ({  users, messages, currentUser }) => {
    if (currentUser === '')
        return (<div />);
    return (
        <div className="main-panel">
            <LogoutButton />

            <div className="display-panel">
                <UserList users={users} currentUser={currentUser} />
                <MessageList messages={messages}
                    currentUser={currentUser}
                    users={users} />
            </div>

            <MessageInput />
        </div>
    );
};

export default connect(state => ({ ...state }), null)(ChatUI);