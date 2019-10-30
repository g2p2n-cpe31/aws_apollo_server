import { gql, ApolloServer } from 'apollo-server-express'
import books from './books/index'

const typeDef = gql`
  type Query
`

const schema = new ApolloServer({
  typeDefs: [typeDef, books.typeDef],
  resolvers: [books.resolvers],
  // playground: {
  //   endpoint: '/v01/api/graphql',
  //   settings: {
  //     'editor.theme': 'dark',
  //   },
  // },
})

export default schema

// import util from 'util'
// import { mergeTypes } from 'merge-graphql-schemas'
// import { types } from 'util'
// import fs from 'fs'
// import path from 'path'
// import { merge } from 'lodash'

// const Query = gql`
//   type Query {
//     status: String
//   }
// `

// const Mutation = gql`
//   type Mutation {
//     _empty: String
//   }
// `

// let resolvers = {
//   Query: {
//     status: () => 'ok',
//   },
// }

// const typeDefs = gql`
//   ${mergeTypes([Query, Mutation])}
// `

// const typeDefs = [Query, Mutation]
// console.log(Mutation)
// console.log(util.inspect(typeDefs, false, null, true))
// Read the current directory and load types and resolvers automatically
// fs.readdirSync(__dirname)
//   .filter(dir => dir.indexOf('.') < 0)
//   .map(dir => {
//     const tmp = require(path.join(__dirname, dir)).default // eslint-disable-line
//     // resolvers = merge(resolvers, tmp.resolvers)
//     // typeDefs.push(tmp.types)
//     console.log(tmp)
//   })
// console.log(typeDefs)

// const schema = new ApolloServer({
//   typeDefs,
//   resolvers,
//   playground: {
//     endpoint: '/v01/api/graphql',
//     settings: {
//       'editor.theme': 'dark',
//     },
//   },
// })

// export default schema
