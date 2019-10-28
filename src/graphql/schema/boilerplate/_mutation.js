import { gql } from 'apollo-server-express'
const Mutation = gql`
    extend type Mutation {

    }
`

export const mutationTypes = () => [Mutation]
export const mutationResolves = {}
