let express = require('express')
let path = require('path')
let app = express()

app.use(express.static('public'))
app.use(express.static('files'))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})
app.listen(8000, () => {
	console.log("listening to 8000")
})