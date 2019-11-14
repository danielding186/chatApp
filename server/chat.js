const users = { 'Amit': { name: 'Amit', avatar: '1.jpg' }, 'Bao': { name: 'Bao', avatar: '2.jpg' } };

const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));

let messageID = 100;

const messages = [{
	id: 1,
	sender: "Amit",
	timestamp: new Date("2019-03-23 19:22:00"),
	text: "You up?",
},
{
	id: 2,
	sender: "Bao",
	timestamp: yesterday,
	text: "Yeah, still working on this INFO6250 work, but I keep getting distracted by cat videos",
}];

function getMessageID() {
	messageID += 1;
	return messageID;
}


function addMessage({ sender, timestamp, text }) {
	const id = getMessageID();
	messages.push({ id, sender, timestamp, text });
}

function addUser({ username }) {
	users[username] = { name: username };
}

function removeUser({ username }) {
	delete users[username];
}

const chat = {
	users,
	messages,
	addMessage,
	addUser,
	removeUser
};

module.exports = chat;

