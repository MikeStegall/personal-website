// const calc = require('./calc')
//
// const numbersToAdd = [
//   3,
//   4,
//   10,
//   2
// ]
//
// const result = calc.sum(numbersToAdd)
// console.log(`The result is: ${result}`)

// const readline = require('readline')
const moment = require('moment')
const chalk = require('chalk')
var day = moment().format('dddd, MMMM Do YYYY, h:mm:ss a')

console.log(chalk.blue('Hello World'))

console.log(day)

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
//
// rl.question('What do you think of Node.js? ', (answer) => {
//   let length = answer.length
//   console.log(`Thank you for your valuable feedback: ${length}`)
//
//   rl.close()
// })
