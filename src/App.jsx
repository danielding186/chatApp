import React, { Component } from 'react';
import './App.css';
import UserList from './UserList';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import UserError from './UserError';
import LoginForm from './LoginForm';
import LogoutButton from './LogoutButton';

import { connect } from 'react-redux';
import { fetchMessages } from './store/actions';


class App extends Component {
  componentDidMount() {
    this.interval = setInterval(() => { 
      this.refresh();
    }, 5000);
  }

   componentWillUnmount() {
    clearInterval(this.interval);
  }

  refresh() {
    if (!this.props.isLogined)
      return;
    this.props.fetchMessages();
  }

  render() {

    return (
      <div>

        { !this.props.isLogined && 
          <LoginForm />  }

        { this.props.isLogined &&
          <div className="main-panel">
            <LogoutButton/>
            
            <div className="display-panel">
              <UserList users={this.props.users} currentUser={this.props.inputUser}/>
              <MessageList messages={this.props.messages}
                           currentUser={this.props.inputUser}
                           users={this.props.users}
                           />
            </div>
            <MessageInput/> 
          </div>
        }
 
        <UserError/>
        
      </div>
    );
  }
}

// function to convert the global state obtained from redux to local props
function mapStateToProps(state) {
  console.log('mapStateToProps:' + state.isLogined + ' messages:' +  state.messages);
  return {...state}
}

// wrapping the component within the connect HOC and calling the default function directly
export default connect(mapStateToProps, { fetchMessages })(App);
