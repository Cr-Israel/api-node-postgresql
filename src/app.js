import express from 'express'
import cors from 'cors'

// Routes
import index from './routes/index.js'
// import productRoute from './routes/productRoute.js'

const app = express()

// Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.json({ type: 'aplication/vnd.api+json' }))
app.use(cors())

app.use(index)
// app.use('/products', productRoute)

export default app
