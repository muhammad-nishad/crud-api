const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()
const user = require('./routes/user')
const connectDb=require('./config/db')
connectDb()

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use('/', user)

const port = 5000 || process.env.PORT

app.listen(port, () => {
    console.log(`server is listning to ${port}`);
})