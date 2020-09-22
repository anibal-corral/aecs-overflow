//Aqui van todas las rutas que tengan que ver con questions
import express from 'express'
const app = express.Router()

const question ={
  _id:1,
  title: 'Como uso algo en android?',
  description:'Miren esta pregunta',
  createdAt:new Date(),
  icon: 'devicon-android-plain',
  answers:[],
  user:{
    firstName:'Anastasia',
    lastName:'Corral',
    email:'anastasia.corral@gmail.com',
    password:'123456'
  }
}
const questions = new Array(10).fill(question)
/*Cuando el front acceda a api/questions entonces se le devuelven todas las preguntas*/
// /api/questions
app.get('/', (req,res)=>res.status(200).json(questions))
/*Cuando se acceda a api/nquestions/id se devolver[a una pregunta en particular]*/ 
// /api/questions/:id
app.get('/:id', (req,res)=>res.status(200).json(question))


export default app
