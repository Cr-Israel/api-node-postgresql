import express from 'express'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger_output.json'

// Routes
import productRoute from './routes/productRoute.js'

const app = express()

// Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.json({ type: 'aplication/vnd.api+json' }))
app.use(cors())

// Doc
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(productRoute)

export default app
