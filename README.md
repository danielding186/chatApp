### A chat application: a React SPA using React & Redux and Express

* Keypoint:
    * Implemented a backend server(using Express) that will host the React app as well as provide REST services
    * Applied CSS, JavaScript, React, Redux, Express, JSON, Restful API

* Features:
    * Users can login/logout without passwords and send messages
    * User list and message list are visible to all users
    * It can be usable by multiple users simultaneously

* Backend Server API (Running on Port 4000):
    * /login (Post)
    * /logout (Post)
    * /messages (Get)
    * /message (Post)

* React App UI (Running on Port 3000):
    * App
        * LoginForm
        * Chat
            * UserList
            * MessageList
            * MessageInput
            * LogoutButton
        * ErrorInfo

* Redux state:
    * users: {},  // userList
    * messages: [], // messageList
    * currentUser: '', // if currentUser is empty, it means no user has logined. LoginForm will be shown.


### Installation
* after `npm install` in client and server seperately, the application is ready to use
* Go to the client direcotry, `npm start` to start React Server
* If `npm run build` is run, any changes made will be saved and built and `npm run server` will show those changes without additional steps

