//NPM
import express from 'express'
import chalk from 'chalk'
import {ApolloServer} from 'apollo-server-express'

//Project
import config from './config'
import schema from './graphql'
import Models from './models'

const app = express()

app.get('/', (req, res) => {
    res.send({
        message: 'Api started!'
    })
})

//Context object to be passed to server
const context = {
    ...Models
}

//Create Apollo & GraphQl server
const server = new ApolloServer({
    schema,
    context,
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
    context,
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
