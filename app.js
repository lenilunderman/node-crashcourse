// require the express package to be used
const express = require('express')
const morgan = require('morgan') //logger middleware

// create an express app
const app = express()
app.set('view engine', 'ejs') // using ejs for views and templates
// listen to the port of the server
app.listen(3000)

// middlewares
app.use(morgan('tiny'))
// app.use((req, res, next) => {  // add the next, so the express knows what to do next..
//   console.log('** new request was made **')
//   console.log('host:', req.hostname)
//   console.log('path:', req.path)
//   console.log('method: ', req.method)
//   next() // after the middleware is finished, please carry on..
// })


// routers
app.get('/', (req, res) => {
  // passing static objects into the ejs pages
  const blogs = [
    { title: 'Blog1', snippet: 'lorem 1 blog 1 yeah' },
    { title: 'Blog2', snippet: 'lorem 2 blog 2 yeah' },
    { title: 'Blog3', snippet: 'lorem 3 blog 3 yeah' },
  ]

  res.render('index', { title: 'Homepage', blogs })
})

app.get('/about', (req, res) => {
  //res.send('./views/about.html')
  res.render('about', { title: 'About' })
})

app.get('/blogs/create', (req, res) => {
  //res.send('./views/about.html')
  res.render('create', { title: 'Create Blog' })
})


// 404 pages...
app.use((req, res) => {
  res.status(404).render('404', { title: '404' })
})

// redirects
// app.get('/about-us', (req, res) => {
//   res.redirect('/about')
// })