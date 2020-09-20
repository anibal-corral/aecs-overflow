//aqui se definene las rutas de express
import express from 'express'
import {question} from './routes'
const app = express()

app.use('/api/questions',question)

export default app
