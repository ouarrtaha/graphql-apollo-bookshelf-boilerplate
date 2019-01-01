import {makeExecutableSchema} from 'graphql-tools'
import {mergeTypes, mergeResolvers} from 'merge-graphql-schemas'

//Import resolvers
import postResolvers from './resolvers/post'

//Import typeDefs
import post from './types/post.gql'

//Merge types and resolvers
const typeDefs = mergeTypes([
  post
])

const resolvers = mergeResolvers([
  postResolvers,
])

//Export generated schema
export default makeExecutableSchema({
  typeDefs,
  resolvers
})
