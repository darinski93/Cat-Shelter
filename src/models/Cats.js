const db = require('../db.json')
const fs = require('fs')
const path = require('path')


class Cats {

    constructor(name, description, image, breed) {

        this.name = name
        this.description = description
        this.image = image
        this.breed = breed

    }

    save(cat) {

        this.id = db.cats[db.cats.length - 1].id + 1


        db.cats.push(this)

        const jsonData = JSON.stringify(db, null, 2)

        fs.writeFileSync(path.resolve(__dirname, '../db.json'), jsonData)

    }


}

module.exports = Cats;