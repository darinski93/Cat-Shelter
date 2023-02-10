const router = require('express').Router()

const catController = require("./controllers/catController");
const homeController = require("./controllers/homeController");





router.get('/', homeController.getHomePage)


router.get('/add-breed', catController.getBreedCreate)
router.post('/add-breed', catController.postBreedCreate)

router.get('/cats/add-cat', catController.getCreateCat)
router.post('/cats/add-cat', catController.postCreateCat)

router.get('/edit/:catId', catController.getEditCat)
router.post('/edit/:catId', catController.postEditCat);


router.get('/cat-shelter/:catId', catController.getCatShelter);
router.post('/cat-shelter/:catId', catController.deleteCat);


module.exports = router