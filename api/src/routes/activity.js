/* rutas del actividaes*/
const {Router} = require('express');
const {check} = require('express-validator');
const {validateJwt }= require('../middlewares/validateJwt');
const {validateInput} = require('../middlewares/validateInput')
const {activity, activitiesAll }= require('../controllers/activity');
const router = Router();

router.get('/activities/all', validateJwt, activitiesAll );

router.post('/activity',
    [// middleware de express validator
        check('name', 'El nombre es obligatoria').not().isEmpty(),
        check('complexity', 'la ').isLength({max: 1}),
        check('term', 'Este campo es obligatoria').not().isEmpty(),
        check('season', 'Este campo es obligatoria').not().isEmpty(),
        check('country', 'Este campo es obligatoria').not().isEmpty(),
        validateInput, validateJwt
    ],
    activity);

module.exports = router;