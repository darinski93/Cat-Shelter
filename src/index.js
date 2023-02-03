const express = require('express')

const config = require('./config/config')
const viewEngine = require('./config/viewEngine')


const app = express()
viewEngine(app);

app.use(express.static('./src/public'))


app.get('/', (req, res) => {
    res.render('home')
})


app.listen(config.PORT, () => console.log('Server is running on port 5000...')); 
