const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
var jwt = require('jsonwebtoken')
var express = require('express')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('dist'));


//simulate login
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'dist/html'))
})

app.listen(3000, function() {
    console.log('Node listening on port 3000')
})

// Export your express server so you can import it in the lambda function.
module.exports = app