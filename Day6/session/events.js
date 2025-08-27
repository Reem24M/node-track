const events = require('events')
const emit = new events.EventEmitter()

const dataUser = require('./data')


emit.on('Register', (data) => {
    if (dataUser[data.username]) {
        console.log("the username is found");
    } else if (data.pass.length < 8) {
        console.log("the password should not be less than 8");
    }else
    {
        // store the data
        dataUser[data.username]=data 
        console.log("this is users data",dataUser);
        console.log("congrts you register !!");
    }
})

emit.on('Login', (data) => {
    const user = Object.values(dataUser).find(user => user.email === data.email);

    if (!user) {
        console.log("❌ The email was not found");
    } else if (user.pass !== data.pass) {
        console.log("❌ Incorrect password");
    } else {
        console.log(`✅ Welcome back, ${user.username}`);
    }
});

module.exports = emit
