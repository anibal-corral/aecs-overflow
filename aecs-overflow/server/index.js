//Esto es para iniciar el servidor de NodeJS
import http from 'http'
import Debug from 'debug'//Para realizar debug
import app from './app'  //esto es para importar express desde app.js
const PORT = 3000
const debug = new Debug('AECS-overflow:root')


app.listen(PORT,()=>{
  debug(`Server runing at port ${PORT}`)
})
/*
import http from 'http'
import Debug from 'debug'

const PORT = 3000
const debug = new Debug('AECS-overflow:root')

const app = http.createServer((req, res) => {
  debug('New request')
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.write('Hola desde PlatziOverflow')
  res.end()
})

app.listen(PORT, () => {
  debug(`Server running at port ${PORT}`)
})
*/
