const db = require('../db.json')

exports.getHomePage = (req, res) => {

    res.render('index', { cats: db.cats })
}