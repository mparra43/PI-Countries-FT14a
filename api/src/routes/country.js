/* rutas del citys*/
const {Router} = require('express');
const router = Router();
const { countriesAll, countryId, countryName}= require('../controllers/country')

router.get('/countries', countriesAll);
router.get('/countries/{idPais}:', countryId);
router.get('/countries?name ', countryName);

module.exports = router;