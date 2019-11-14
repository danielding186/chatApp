A chat application: a React SPA using React & Redux

Features:
* Implemented a backend server(using Express) that will host the React app as well as provide REST services
* Use CSS and DOM
* Use Redux to maintain the state of Components
* Users can login/logout without passwords and send messages
* Can be usable by multiple users simultaneously, users and messages are visible to all users.

Backend Server API (Running on Port 4000):
1 /login (Post) 
2 /logout (Post)
3 /messages (Get)
4 /message (Post)

React App UI (Running on Port 3000):
App
    LoginForm
    Chat
        UserList
        MessageList
        MessageInput
        LogoutButton
    ErrorInfo

Redux state:
const initialState = {
    users: {},  // userList
    messages: [], // messageList
    currentUser: '', // if currentUser === '', it means no User has logined
};


### Installation
* after `npm install`, the application is ready to use
* `npm start` to start React Server
* If `npm run build` is run, any changes made will be saved and built and `npm run server` will show those changes without additional steps

