import { Pool } from 'pg'
import dotenv from 'dotenv'

dotenv.config()

// Conection with Database
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})
pool.on('connect', () => {
  console.log('Connected to Database')
})

export default {
  query: (text, params) => pool.query(text, params)
}
