const express = require('express')
// access the database, model folder to get the model
const Blog = require('../models/blog')


const router = express.Router()

// blog routes
router.get('/blogs', (req, res) => {
  // Access the schema to be used and find all posts
  Blog.find().sort({ createdAt: -1 }) // since it takes time, return a promise
    .then((result) => {
      res.render('index', { title: 'All Blogs', blogs: result })
    })
    .catch((err) => {
      console.log(err)
    })
})

router.post('/blogs', (req, res) => {
  //console.log(req.body)
  const blog = new Blog(req.body)
  blog.save()
    .then((result) => {
      res.redirect('/blogs')
    })
    .catch((err) => {
      console.log(err)
    })
})

router.get('/blogs/create', (req, res) => {
  //res.send('./views/about.html')
  res.render('create', { title: 'Create Blog' })
})

router.get('/blogs/:id', (req, res) => {
  const id = req.params.id
  Blog.findById(id)
    .then(result => {
      res.render('details', { blog: result, title: 'Blog Details' })
    })
    .catch(err => {
      console.log(err)
    })
})

router.delete('/blogs/:id', (req, res) => {
  const id = req.params.id
  Blog.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/blogs' })
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router