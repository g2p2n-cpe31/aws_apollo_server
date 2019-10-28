import { gql } from 'apollo-server-express'

const Query = gql`
  type Query {
    product: [Product]
  }
`

export const queryTypes = () => [Query]

export const queryResolves = {
  Query: {
    product: () => [
      { name: 'ทุเรียน', price: '2100' },
      { name: 'มะม่วง', price: '500' },
    ],
  },
}
