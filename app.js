// require the express package to be used
const express = require('express')
const morgan = require('morgan') //logger middleware
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes')
// const database = require('./connection')

const { render } = require('ejs')

// create an express app
const app = express()
const PORT = process.env.PORT || 3000

//?? connection to mongoDB - user - pass - database name
const database = 'mongodb+srv://lenilunderman:M@forty42two@nodeleni.az2vk.mongodb.net/leni-database?retryWrites=true&w=majority'
// using mongoose to connect
mongoose.connect(process.env.MONGODB_URI || database, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(PORT)) // will listen to requests just after the connection is made.
  .catch((err) => console.log(err))


app.set('view engine', 'ejs') //!! using ejs for views and templates

// middlewares
app.use(express.urlencoded({ extended: true })) // middleware to encode to json format *IMPORTANT*
app.use(express.static('public')) //!! tells what folder is public inside the project, so the css can go in here
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
  // const blogs = [
  //   { title: 'Blog1', snippet: 'lorem 1 blog 1 yeah' },
  //   { title: 'Blog2', snippet: 'lorem 2 blog 2 yeah' },
  //   { title: 'Blog3', snippet: 'lorem 3 blog 3 yeah' },
  // ]

  // res.render('index', { title: 'Homepage', blogs })
  res.redirect('/blogs')
})

app.get('/about', (req, res) => {
  //res.send('./views/about.html')
  res.render('about', { title: 'About' })
})

// blog routes
app.use(blogRoutes)

// 404 pages...
app.use((req, res) => {
  res.status(404).render('404', { title: '404' })
})

/* sandbox for mongoose and mongodb database */
// app.get('/add-blog', (req, res) => {
//   // create a new instance and save to the blog collection
//   const blog = new Blog({
//     title: 'gene',
//     snippet: 'the blog about bears',
//     body: 'more information soon'
//   })

//   blog.save()  // since it takes some time, it retuns a promise.
//     .then((result) => {
//       res.send(result)
//     })
//     .catch((err) => {
//       console.log(err)
//     })

// })

// // get all blogs
// app.get('/all-blogs', (req, res) => {
//   //name of the collection . find() to list all.
//   Blog.find()
//     .then((result) => {
//       res.send(result)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// })

// // get single post
// app.get('/single-blog', (req, res) => {
//   //name of the collection . find() to list all.
//   Blog.findById('5f7e91df94695b5f69b5ebbc')
//     .then((result) => {
//       res.send(result)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// })

// redirects
// app.get('/about-us', (req, res) => {
//   res.redirect('/about')
// })