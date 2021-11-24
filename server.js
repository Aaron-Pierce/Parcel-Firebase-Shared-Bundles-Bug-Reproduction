const express = require('express')
const app = express()
const path = require('path');
const port = 3000

app.use("/", express.static(path.join(__dirname, "built/")));

app.get('/', (req, res) => {
  res.send(`
    <a href="page1/page1.html">Page 1</a>
    <a href="page2/page2.html">Page 2</a>
  `)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

