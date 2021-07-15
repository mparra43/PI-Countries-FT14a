/* rutas del citys*/
const {Router} = require('express');
const {validateJwt }= require('../middlewares/validateJwt');
const {check}= require('express-validator');
const {validateInput}= require('../middlewares/validateInput');
const { countriesAll, countryId, countryName}= require('../controllers/country');
const router = Router();


router.get('/countries', validateJwt, countriesAll);
router.get('/countries/:id',[

        check('id', 'el id es obligatorio').isLength({min: 3}),
        validateInput,
        validateJwt
    ],
    countryId);
router.get('/countries/:name ',

    [
        check('name', 'el name es obligatorio').not().isEmpty(),
        validateInput,
        validateJwt
    ], countryName);

module.exports = router;