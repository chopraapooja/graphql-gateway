'use strict'

const express = require('express')
const graphqlHTTP = require('express-graphql')
const bodyParser = require('body-parser')
const { createSchema } = require('./OTG');

async function startServer() {
  const schema = await createSchema();
  const app = express()
  app.use(bodyParser.json())

  app.use('/', graphqlHTTP({
    schema,
    graphiql: true
  }))

  app.listen(3000, () => {
    console.log(`Access graphql at http://localhost:3000`);
  })
}

// Kick things off:
startServer()