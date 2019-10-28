import { types } from './_type'
import { queryTypes, queryResolves } from './_query'
import { mergeTypes } from 'merge-graphql-schemas'
import { gql } from 'apollo-server-express'
// import inputTypes from './_input'
// import { mutationTypes, mutationResolves } from './_mutation'

export default {
  types: () => gql`
    ${mergeTypes(queryTypes, types)}
  `,
  resolvers: Object.assign(queryResolves),
}

// import { types, typeResolvers } from './_type'
// import { queryTypes, queryResolves } from './_query'
// import inputTypes from './_input'
// import { mutationTypes, mutationResolves } from './_mutation'

// export default {
//   types: () => [types, queryTypes, mutationTypes, inputTypes],
//   resolvers: Object.assign(queryResolves, mutationResolves, typeResolvers),
// }
