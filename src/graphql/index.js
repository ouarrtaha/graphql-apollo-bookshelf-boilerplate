import {makeExecutableSchema} from 'graphql-tools'
import {mergeResolvers, mergeTypes} from 'merge-graphql-schemas'

//Import resolvers
import postResolvers from './resolvers/post'

//Import typeDefs
import post from './types/post.gql'
import comment from './types/comment.gql'

//Merge types
const typeDefs = mergeTypes([
    post,
    comment
])

//Merge resolvers
const resolvers = mergeResolvers([
    postResolvers,
])

//Export generated schema
export default makeExecutableSchema({
    typeDefs,
    resolvers
})
