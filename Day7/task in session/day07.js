const readline = require('readline')
const { stdin: input, stdout: output } = require('node:process')
const rl = readline.createInterface({ input, output })
// create a function that resolves after 1 second
function delayValue(value, ms) {

    Promise((resolve) => {
            setTimeout(() => {
           
                resolve(value)
        }, (1000))
        })
};

// create a function that rejects after 1 second
function delayFail(error, ms) {
    Promise((resolve, rejected) => {
            setTimeout(() => {
                rejected(error)
        })
    }, (1000))
};

// Task 2 — promisifyQuestion(rl, question)
// Wrap readline.question into a Promise that resolves with the
// user's trimmed answer, or rejects if something goes wrong.
// (No async/await; use new Promise + rl.question)
function promisifyQuestion(rl, question) {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            const trimmed = answer.trim();
            if (trimmed) {
                resolve(`thanks ${trimmed}`);
            } else {
                reject('no answer found');
            }
            rl.close();
        });
    });
}
 
promisifyQuestion(rl, "what's your name? ")
    .then(res => console.log(res))
    .catch(err => console.error(err));