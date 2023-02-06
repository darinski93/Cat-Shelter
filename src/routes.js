const router = require('express').Router()

const catController = require("./controllers/catController");
const homeController = require("./controllers/homeController");





router.get('/', homeController.getHomePage)


router.get('/cats/add-breed', catController.getBreedCreate)

router.get('/cats/add-cat', catController.getCreateCat)
router.post('/cats/add-cat', catController.postCreateCat)


module.exports = router