import { gql, ApolloServer } from 'apollo-server-express'
import books from './books/index'

const typeDef = gql`
  type Query
`

const schema = new ApolloServer({
  typeDefs: [typeDef, books.typeDef],
  resolvers: [books.resolvers],
})

export default schema
