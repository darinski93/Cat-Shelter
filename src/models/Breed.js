const db = require('../db-breed.json')
const fs = require('fs')
const path = require('path')


class Breeds {

    constructor(breed) {

        this.breed = breed

    }

    save() {


        db.addBr.push(this)

        const jsonData = JSON.stringify(db, null, 2)

        fs.writeFileSync(path.resolve(__dirname, '../db-breed.json'), jsonData)

    }


}

module.exports = Breeds;