const Cats = require("../models/Cats")



exports.getCreateCat = (req, res) => {
    res.render('addCat')
}

exports.postCreateCat = (req, res) => {
    

    const { name, description, image, breed } = req.body
    let cat = new Cats(name, description, image, breed)


    cat.save()
    res.redirect('/')
}

exports.getBreedCreate = (req, res) => {
    res.render('addBreed')
}

exports.getEditCat = (req, res) => {
    res.render('editCat')
}