const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

const connectDb = require('./config/config')
const presidentRoutes = require('./routes/presidentRoutes')
const vicePresidentRoutes = require('./routes/vicePresidentRoutes')

dotenv.config();
connectDb();

const app = express();
app.use(cors())
app.use(express.json())

app.use('/api/presidents', presidentRoutes)
app.use('/api/vicepresidents', vicePresidentRoutes)

app.get('/', async (req, res) => {
    res.send("<h1>Hey There</h1>")
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})