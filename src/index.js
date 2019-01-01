import express from 'express'
import config from './config'
import chalk from 'chalk'
import {ApolloServer} from 'apollo-server-express'
import schema from './graphql'

const app = express()

app.get('/', (req, res) => {
    res.send({
        message: 'Api started!'
    })
})


//Create Apollo & GraphQl server
const server = new ApolloServer({
    schema,
    cacheControl: true,
    playground: false
})

server.applyMiddleware({
    app,
    cors: true,
    path: '/graphql'
})

//Create Apollo playground
const playground = new ApolloServer({
    schema,
    cacheControl: false,
    playground: true
})

playground.applyMiddleware({
    app,
    cors: true,
    path: '/graphiql'
})


//Run server
app.listen(config.PORT, () => {
    const log = console.log
    log('\n')
    log(chalk.bgGreen.black(`Server listening on http://localhost:${config.PORT}/ ..`))
    log('\n')

    log(`${chalk.blue('/graphql')}  - endpoint for queries`)
    log(`${chalk.blue('/graphiql')} - endpoint for testing`)
    log('\n')
})

export default app
