import React, { Component } from 'react';
import './App.css';

import LoginForm from './LoginForm';
import ChatUI from './ChatUI';
import UserError from './UserError';

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
        <LoginForm/>
        <ChatUI />
        <UserError />
      </div>
    );
  }
}

// function to convert the global state obtained from redux to local props
function mapStateToProps(state) {
  return { ...state }
}

// wrapping the component within the connect HOC and calling the default function directly
export default connect(mapStateToProps, { fetchMessages })(App);
