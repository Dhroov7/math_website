const express = require('express'),
  app = express()
const bodyParser = require('body-parser')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser())

app.get('/', function (req, res) {
  res.send('Homepage')
})

app.listen(9898, () => {
  console.log('server started at http://localhost:9898')
})
