const express = require('express')

const routes = require('./routes')

const config = require('./config')
const viewEngine = require('./config/viewEngine')



const app = express()
viewEngine(app);


app.use(express.static('./src/public'))
app.use(express.urlencoded({ extended: false }))
app.use(routes)



app.listen(config.PORT, () => console.log(`Server is running on ${config.PORT}...`)); 
