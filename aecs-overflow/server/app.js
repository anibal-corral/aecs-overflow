//aqui se definene las rutas de express
import express from 'express'

const app = express()

app.get('/',(req,res)=> res.send('Hola desde express!'))

export default app
