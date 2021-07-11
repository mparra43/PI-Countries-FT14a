/* rutas del actividaes*/
const {Router} = require('express');
const {check}= require('express-validator');
const {validateInput}= require('../middlewares/validateInput')
const activity = require('../controllers/activity');
const router = Router();


router.post('/activity',
    [// middleware de express validator
        check('name', 'El nombre es obligatoria').not().isEmpty(),
        check('complexity', 'la ').isLength({max: 1}),
        check('term', 'Este campo es obligatoria').not().isEmpty(),
        check('season', 'Este campo es obligatoria').not().isEmpty(),
        validateInput
    ],
    activity);

module.exports = router;