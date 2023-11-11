const express = require("express")
const morgan = require('morgan')
const Person=  require ('./models/Person')

// Initializers. These blocks should be placed in different files, for example middlewares.js, server.js...
// but let's keep this simple.
const app = express()

app.use(express.json())

morgan.token('body', (request) => {
  return JSON.stringify(request.body)
})
morgan.token('currentUserEmail', (request) => {
  return request.currentUser && request.currentUser.email || "anonymous"
})
const logger = morgan(':method :url :status :res[content-length] - :response-time ms :body (:currentUserEmail)')
app.use(logger)

const attachCurrentuser = (request, response, next) => {
  const email = request.header("X-USER-EMAIL")
  if (email) request.currentUser = { email }
  next()
}
app.use(attachCurrentuser)


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})



// Routes. These blocks should be placed in different files under "routes/" directory
// but let's keep this simple.
app.get("/info", (request, response) => {
  const now = new Date()
  const bodyContentText = `
  Phonebook has info for ${allPersons.length} people.
  ${now.toString()}
  `
  response
    .type("text")
    .send(bodyContentText)
})

app.get("/api/persons", async (request, response) => {
  allPersons= await Person.getAllPerson()
  response.json(allPersons)
})

app.get("/api/persons/:id", (request, response) => {
  const idParam = request.params.id
  const id = Number(idParam)
  const person = allPersons.find(person => person.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete("/api/persons/:id", async (request, response,next) => {
  const idParam = request.params.id
  const id = idParam
  try{
    const deleted =  await Person.deleteOne(id);
    if(deleted){
      response.status(204).end()
    }else{
      response.status(404).end()
    }
  }catch(error){
    next(error)
  }
})

app.post("/api/persons", async (request, response) => {
  const personPayload = request.body

  const errorMessages = []
  if (!personPayload.name) errorMessages.push("name must be present")
  if (!personPayload.number) errorMessages.push("number must be present")
  //const nameExists = allPersons.some(person => person.name === newPerson.name)
  //if (nameExists) errorMessages.push("name must be unique")

  if (errorMessages.length > 0) {
    response
      .status(422)
      .json({
        errorMessages,
      })
    return
  }

  // push not concat here. We want to mutate the array.
  const newPersone = await Person.addOnePerson(
    personPayload.name,
    personPayload.number
    )
    response.json(newPersone)
})



const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

// handler of requests with unknown endpoint
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } 

  next(error)
}

// this has to be the last loaded middleware.
app.use(errorHandler)