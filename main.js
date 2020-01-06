const express = require('express')

const port = 3000 || process.env.PORT;

const app = express()

app.get('/', (req, res) => res.send('Changes done now!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
