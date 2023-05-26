const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
}).listen(8000, function (){
    console.log('The output is on local host 8000 /')
})
