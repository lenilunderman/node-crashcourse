const http = require('http')
const fs = require('fs')
const { getHeapCodeStatistics } = require('v8')

const server = http.createServer((req, res) => {
  console.log(req.url, req.method)

  // set headers for the site.
  res.setHeader('Content-Type', 'text/html')

  // routers
  let path = './views/'
  switch (req.url) {
    case '/':
      path += 'index.html'
      res.statusCode = 200
      break
    case '/about':
      path += 'about.html'
      res.statusCode = 200
      break
    case '/about-me':
      res.statusCode = 301
      res.setHeader('Location', '/about')
      res.end()
      break
    default:
      path += '404.html'
      res.statusCode = 404
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

// status code
// 100 range - informational responses
// 200 range - success codes
// 300 range - codes for redirects
// 400 range - user or client errros codes
// 500 range - server error codes