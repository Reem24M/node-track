const express = require('express');
const path = require('path');
const app = express();
const { connectDB } = require('./config/connectDb');
const { mongoose } = require('mongoose');
const session = require('express-session');
app.use(express.json());
app.set('json spaces', 2)
connectDB();


app.use('/auth',require('./Routes/authRouter'))


const ips = ['http://127.0.0.1:3000', "http://localhost:3000", "http://127.0.0.1:5500"];
app.use(cors({
    origin: (ip, callback) => {
        try {
            console.log(ip);
            if (!ip || ips.includes(ip)) {
                callback(null, true);
            }
            else {
                callback("Not allowed by CORS");
            }
        }
        catch (error) {
            console.log(error);
        }

    }
}))
app.use(session({
    secret: "mysercetKey",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60,
        httpOnly: true,
        secure: false
    }
}));

mongoose.connection.once('open', () => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
});

module.exports = { app };