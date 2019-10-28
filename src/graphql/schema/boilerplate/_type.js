import { gql } from 'apollo-server-express'

const Product = gql`
  type Product {
    name: String!
    price: String!
  }
`

export const types = () => [Product]
// export const typeResolvers = {}
