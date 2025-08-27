const express = require('express');
const app = express();
app.use(express.json());

const users = {}; 


app.post('/register', (req, res) => {
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
        return res.send("Register failed");
    }
    if (users[username]) {
        return res.send("the user already exists");
    }
    users[username] = { username, password, email };
    return res.send("user registered successfully");
});


app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.send("Login failed");
    }
    if (!users[username]) {
        return res.send("there is no user with this username");
    }
    if (users[username].password !== password) {
        return res.send("Incorrect password");
    }
    return res.send("user login successfully");
});


app.post('/getdata', (req, res) => {
    const { username } = req.body;
    if (!users[username]) {
        return res.send("there is no user with this username");
    }
    return res.json(users[username]);
});

app.listen(3000, () => {
    console.log("server is running");
});
