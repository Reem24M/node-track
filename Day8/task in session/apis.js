const readline = require('readline')
const { stdin: input, stdout: output } = require('node:process')
const axios = require('axios')
const rl = readline.createInterface({ input, output })

rl.question(`choose a number
  1-New user
  2-Existing user
  3-Get user Data
  4-Exit
 `, (asw) => {
    if (asw === "1") {
        rl.question("enter username ", (username) => {
            rl.question("enter password ", (password) => {
                rl.question("enter email ", (email) => {

                    if (!username || !password || !email) {
                        console.log("register failed");
                        rl.close();
                        return;
                    }

                    axios.post("http://localhost:3000/register", {
                        username,
                        password,
                        email
                    })
                        .then(res => console.log(res.data))
                        .catch(error => console.log(error.message))
                        .finally(() => rl.close());

                });
            });
        });

    } else if (asw === "2") {
        rl.question("enter username ", (username) => {
            rl.question("enter password ", (password) => {
                if (!username || !password) {
                    console.log("login failed");
                    rl.close();
                    return;
                }

                axios.post("http://localhost:3000/login", {
                    username,
                    password
                })
                    .then(res => console.log(res.data))
                    .catch(error => console.log(error.message))
                    .finally(() => rl.close());
            })
        })

    } else if (asw === "3") {
        rl.question("enter username ", (username) => {

            if (!username) {
                console.log("get data failed");
                rl.close();
                return;
            }

            axios.post("http://localhost:3000/getdata", { username })
                .then(res => console.log(res.data))
                .catch(error => console.log(error.message))
                .finally(() => rl.close());
        })

    } else if (asw === "4") {
        rl.close();
    }
})
