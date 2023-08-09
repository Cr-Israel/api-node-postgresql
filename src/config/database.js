import { Pool } from 'pg'
import dotenv from 'dotenv'

dotenv.config()

// Conection with Database
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
}).on('connect', () => {
  console.log('Conectado com a Database')
}).catch(error => {
  console.error('Deu erro aqui na conexão com o Banco: ' + error)
})

export default {
  query: (text, params) => pool.query(text, params)
}
