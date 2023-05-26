const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/dipesh', (req, res) => {
  res.writeHead(200, {'Content-type':'text/html'})  
  res.end('<h1 align="center" style="color: red">Hello World</h1>')
}).listen(8000, (err) => {
    if(err) throw err;
    console.log('lala');
})
