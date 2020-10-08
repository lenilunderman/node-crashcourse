const fs = require('fs')

//read file
fs.readFile('./docs/blog1.txt', (err, data) => {
  if (err) {
    console.log(err)
  }
  return console.log(data.toString()) // return a buffer to string...
})

//writting file
fs.writeFile('./docs/blog2.txt', 'leni lunderman was here!', () => {
  console.log('file was written')
})

//delete files - check if files exists
if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('file deleted')
  })
}

//creating directories - check if the folder exists or not...
if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('folder created')
  })
} else {
  fs.rmdir('./assets', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('folder deleted')
  })
}
