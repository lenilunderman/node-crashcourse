const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  console.log(req.url, req.method)

  // set headers for the site.
  res.setHeader('Content-Type', 'text/html')

  // routers
  let path = './views/'
  switch (req.url) {
    case '/':
      path += 'index.html'
      break
    case '/about':
      path += 'about.html'
      break
    default:
      path += '404.html'
  }

  // sending page to the website.
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err)
      res.end()
    }
    else {
      res.write(data)
      res.end()
    }
  })
})

server.listen(3000, 'localhost', () => {
  console.log('listing for request on port 3000')
}) // in order to listen the server...