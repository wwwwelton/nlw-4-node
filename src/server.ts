import express, { response } from 'express'

const app = express()

app.get('/', (request, response) => {
  return response.send({ message: 'Hello Word - NLW04' })
})

app.post('/', (request, response) => {
  return response.send({ message: 'Os dados foram salvos com sucesso!' })
})

app.listen(3333, () => console.log('Server is running!'))