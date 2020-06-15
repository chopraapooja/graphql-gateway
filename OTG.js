const OTG = require('openapi-to-graphql')

async function createSchema() {
  // use OpenAPI-to-GraphQL to create a GraphQL schema:
  const oas = require('./swagger.json')
  const { schema, report } = await OTG.createGraphQLSchema(oas, {
    simpleNames: false,
    // singularNames: true,
  });

  // log any errors while creating schema
  console.info(JSON.stringify(report, null, 2))
  return schema;
}

module.exports = {
  createSchema,
}