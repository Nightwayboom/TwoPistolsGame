const express = require('express')
const removeHeaders = require('./middleware/removeHeaders')
const path = require('path')
const app = express()
const cors = require('cors')
require('dotenv').config()
const cookieParser = require('cookie-parser')

app.use(cors({ credentials: true, origin: ['http://localhost:5173'] }))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(removeHeaders)
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser())

const indexRouter = require('./routes/index.routes')

app.use('/api', indexRouter)

app.listen(process.env.PORT, () => {
	console.log(`Игровой флексипукси ${process.env.PORT} порту`)
})
