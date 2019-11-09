import React, { Component } from 'react';
import './App.css';
import UserList from './UserList';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import UserError from './UserError';
import LoginForm from './LoginForm';
import LogoutButton from './LogoutButton';
import { loginService, logoutService, newMessageService, messagesService } from './services';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: {},
      messages: [],
      inputUser: '',
      inputMsg: '',
      isLogined: false,
      currentError: null,
    };
   
    this.handleNewMessage = this.handleNewMessage.bind(this);
    this.handleMsgInput = this.handleMsgInput.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.updateInputUser = this.updateInputUser.bind(this);

  }

  componentDidMount() {
    this.refresh();

    this.interval = setInterval(() => { 
      this.refresh();
    }, 5000);
  }

   componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateInputUser = username => {
    this.setState({inputUser:username});
  };

  handleLogin = () => {
    const username = this.state.inputUser;
    loginService(username).then( info => {
      if (info)
       this.setState({messages: info.messages, users:info.users, isLogined:true, currentError:null});
      else
        this.setState({currentError:new Error(`Error: Cannot login - backend server not started!`)});
    }).catch( error => {
      this.setState({currentError: error});
    });
  }

  handleLogout = user => {
    const username = this.state.inputUser;
    logoutService(username).then(info=> {
      this.setState({messages:[], users:{}, inputUser:'', isLogined:false, currentError:null});  
    }).catch( error => {
      this.setState({currentError: error});
    });
  }

  handleNewMessage = () => {
    if (this.state.inputMsg === "") {
      return;
    }
    const text = this.state.inputMsg;
    const username = this.state.inputUser;
    newMessageService(username, text).then(info=> {
       this.setState({messages: info.messages, currentError:null, inputMsg:""});
    }).catch( error => {
      this.setState({currentError: error});
    });
  }

  handleMsgInput = (text) => {
    this.setState({inputMsg:text})
  }

  refresh() {

    if (!this.state.isLogined)
      return;

    messagesService().then(info => {
        this.setState({users: info.users, messages: info.messages, currentError:null});
    }).catch( error => {
      this.setState({currentError: error});
    });
  }

  render() {

    return (
      <div>

        { !this.state.isLogined && 
          <LoginForm onLogin={this.handleLogin} 
               onInputChange={this.updateInputUser} 
               username={this.state.inputUser}/>  }

        { this.state.isLogined &&
          <div className="main-panel">
            <LogoutButton onLogout={this.handleLogout}/>
            
            <div className="display-panel">
              <UserList users={this.state.users} currentUser={this.state.inputUser}/>
              <MessageList messages={this.state.messages}
                           currentUser={this.state.inputUser}
                           users={this.state.users}
                           />
            </div>
            <MessageInput onNewMessage={this.handleNewMessage}
                         handleMsgInput={this.handleMsgInput}
                         inputMsg = {this.state.inputMsg}
                         /> 
          </div>
        }
 
        <UserError infoError={this.state.currentError}/>
        
      </div>
    );
  }
}

export default App;
