/* rutas del pokemons */
const {Router} = require('express');
const {validateJwt} = require('../middlewares/validateJwt');
const {check} = require('express-validator');
const {validateInput} = require('../middlewares/validateInput');
const {pokeAll, pokemonId, pokemonName, addPokemon, allTypes} = require('../controllers/pokemon');
const router = Router();

router.get('/all', validateJwt, pokeAll);
router.get('/all/types', validateJwt, allTypes);

router.get('/:id', [
        check('id', 'el id es obligatorio').isLength({min: 1}),
        validateInput,
        validateJwt
    ],
    pokemonId);
router.get('/', validateJwt, pokemonName);

router.post('/addPokemon',
    [// middleware de express validator
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('lives', 'EL numero de vidas debe ser de 1 a 9').isLength({max: 1}),
        check('attack', 'El ataque es obligatorio').not().isEmpty(),
        check('defense', 'la defensa  es obligatoria').not().isEmpty(),
        check('speed', 'la velocidad  es obligatoria').not().isEmpty(),
        check('height', 'la altura  es obligatoria').not().isEmpty(),
        check('weight', 'El peso  es obligatorio').not().isEmpty(),
        check('picture', 'El peso  es obligatorio').not().isEmpty(),
        validateInput, validateJwt
    ],
    addPokemon);


module.exports = router;