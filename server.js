const express = require('express')
  const app = express()
  const port = 3245
  const path = require('path');

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.listen(port, () => {
    console.log(`Example app listening at ${port}`)
  })
