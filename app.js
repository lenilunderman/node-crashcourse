// require the express package to be used
const express = require('express')

// create an express app
const app = express()
// listen to the port of the server
app.listen(3000)

// routers
app.get('/', (req, res) => {
  //res.send('home')
  res.sendFile('./views/index.html', { root: __dirname })
})

app.get('/about', (req, res) => {
  //res.send('./views/about.html')
  res.sendFile('./views/about.html', { root: __dirname })
})

// redirects
app.get('/about-us', (req, res) => {
  res.redirect('/about')
})

// 404 pages...
app.use((req, res) => {
  res.sendFile('./views/404.html', { root: __dirname })
})