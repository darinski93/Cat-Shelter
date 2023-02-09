const Cats = require("../models/Cats")
const fs = require('fs');
const db = require("../db.json");
const path = require("path");






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

    let catId = Number(req.params.catId)
    let cat = db.cats.find(x => x.id === catId)

    res.render('editCat', { cat });
};

exports.postEditCat = (req, res) => {
    
    let catId = Number(req.params.catId);
    let cat = db.cats.find(x => x.id === catId);



    cat.name = req.body.name;
    cat.description = req.body.description;
    cat.breed = req.body.group;

    const jsonData = JSON.stringify(db, null, 2)

    fs.writeFileSync(path.resolve(__dirname, '../db.json'), jsonData)

    res.redirect('/');

};
