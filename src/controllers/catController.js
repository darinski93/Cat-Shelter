const Cats = require("../models/Cats")
const fs = require('fs');
const db = require("../db.json");
const path = require("path");
const Breeds = require("../models/breed");
const newBr = require('../db-breed.json')




exports.getCreateCat = (req, res) => {
    res.render('addCat', { breeds: newBr.addBr })
}

exports.postCreateCat = (req, res) => {


    const { name, description, image } = req.body
    let breed = req.body.breed
    let cat = new Cats(name, description, image, breed)


    cat.save()
    res.redirect('/')
}

exports.getBreedCreate = (req, res) => {
    res.render('addBreed')
}

exports.postBreedCreate = (req, res) => {

    const breed = req.body.breed
    let newBreed = new Breeds(breed)

    newBreed.save()

    res.redirect('/');
}

exports.getEditCat = (req, res) => {

    let catId = Number(req.params.catId)
    let cat = db.cats.find(x => x.id === catId)

    res.render('editCat', { cat, breeds: newBr.addBr });
};

exports.postEditCat = (req, res) => {

    let catId = Number(req.params.catId);
    let cat = db.cats.find(x => x.id === catId);


    cat.name = req.body.name;
    cat.description = req.body.description;
    cat.breed = req.body.group



    const jsonData = JSON.stringify(db, null, 2)

    fs.writeFileSync(path.resolve(__dirname, '../db.json'), jsonData)

    res.redirect('/');

};


exports.getCatShelter = (req, res) => {

    let catId = Number(req.params.catId);
    let cat = db.cats.find(x => x.id === catId);



    res.render('catShelter', { cat })

}

exports.deleteCat = (req, res) => {

    let catId = Number(req.params.catId);

    db.cats = db.cats.filter(x => x.id !== catId);

    const jsonData = JSON.stringify(db, null, 2)

    fs.writeFileSync(path.resolve(__dirname, '../db.json'), jsonData)


    res.redirect('/');

}
