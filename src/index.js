import express from 'express'
import chalk from 'chalk'
import config from "./config"

const app = express()

app.get('/', (req, res) => {
    res.send({
        message: 'Api started!'
    })
})


//Run server
app.listen(config.PORT, () => {
    const log = console.log
    log('\n')
    log(chalk.bgGreen.black(`Server listening on http://localhost:${config.PORT}/ ..`))
    log('\n')

})

export default app
