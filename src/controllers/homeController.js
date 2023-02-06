const db = require('../db.json')

exports.getHomePage = (req, res) => {

    //let cats = db.cats
    res.render('index', { cats: db.cats })
}