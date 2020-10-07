// importing the people.js with the require or import
const { names, ages } = require('./people')
console.log('names', names)
console.log('age is:', ages)

const os = require('os')
console.log(os.platform(), os.homedir()) // linux /home/leni