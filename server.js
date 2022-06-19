const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

const connectDb = require('./config/config')
const presidentRoutes = require('./routes/presidentRoutes')
const vicePresidentRoutes = require('./routes/vicePresidentRoutes')
const indexRoutes = require('./routes/indexRoutes')

dotenv.config();
connectDb();

const app = express();
app.use(cors())
app.use(express.json())

app.use('/api/presidents', presidentRoutes)
app.use('/api/vicepresidents', vicePresidentRoutes)
app.use('/', indexRoutes)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})