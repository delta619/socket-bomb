const express = require('express')

const port = process.env.PORT || 3000;

const app = express()

app.get('/', (req, res) => res.send('Changes done now!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
