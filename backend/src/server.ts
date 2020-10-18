import express from 'express';
import './database/connection';

const app = express();

app.use(express.json())

app.get('/users', (request, response) => {
  return response.json({ message: ' Hello NLW' })
})


app.post('/orphanages', (request, response) => {
  const { name, latitude, longitude, about, instructions, open_on_weekends, opening_hours } = request.body

  return response.json({ message: ' Hello NLW' })
})

app.listen(3333);