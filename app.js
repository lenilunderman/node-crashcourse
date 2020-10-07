// require the express package to be used
const express = require('express')

// create an express app
const app = express()
app.set('view engine', 'ejs') // using ejs for views and templates
// listen to the port of the server
app.listen(3000)

// routers
app.get('/', (req, res) => {
  //res.send('home')
  res.render('index')
})

app.get('/about', (req, res) => {
  //res.send('./views/about.html')
  res.render('about')
})

app.get('/blogs/create', (req, res) => {
  //res.send('./views/about.html')
  res.render('create')
})


// 404 pages...
app.use((req, res) => {
  res.status(404).render('404')
})

// redirects
// app.get('/about-us', (req, res) => {
//   res.redirect('/about')
// })