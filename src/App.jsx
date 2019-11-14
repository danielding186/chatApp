import React, { Component } from 'react';
import './App.css';

import LoginForm from './LoginForm';
import ChatUI from './ChatUI';
import ErrorInfo from './ErrorInfo';

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
    if (this.props.currentUser === '')
      return;
    this.props.fetchMessages();
  }

  render() {
    return (
      <div>
        <LoginForm />
        <ChatUI />
        <ErrorInfo />
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
