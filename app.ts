const express = require('express')
const app = express()
app.use(express.static("static"))
app.get('/', function(res) {
    res.render("index.html")
})
app.listen(3000)