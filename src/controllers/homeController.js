const db = require('../db.json')

exports.getHomePage = (req, res) => {

    const { search } = req.query;
    let cats = db.cats;



    if (search) {
        cats = cats.filter(cat => cat.name.toLowerCase().includes(search.toLowerCase()));
    } else if (search.length = 0) {
        res.redirect('/')
    }

    res.render('index', { cats, search });
}