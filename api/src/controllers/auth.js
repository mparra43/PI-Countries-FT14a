const {response} = require('express');
const bcryptjs = require('bcryptjs');
const {User} = require('../models/User')
const {generateJWT} = require('../middlewares/jwt')

const createUser = async (req, res = response) => {
    const {name, email, password} = req.body;
    try {
        let newUser = await User.findOne({where: {email}});
        if (newUser !== null)  return res.status(400).json({ok: false, msg: "Este usuario ya existe"});
        else {
            // Encriptar contraseña
            const salt = bcryptjs.genSaltSync();
            let encPassword = bcryptjs.hashSync(password, salt);

            // crear usurio en la base de datos
            let newUser = await User.create({
                name,
                email,
                password: encPassword,
            });

                const token = await generateJWT(newUser.id, newUser.name);
                return res.status(201).json({ok: true, msg: "Se ha creado el usuario", token});
        }

    } catch (error) {
        return res.status(500).json({ok: false, msg: "error"})
    }
}
const loginUser = async (req, res = response) => {
    const {email, password} = req.body;
    try {
        let logUser = await User.findOne({where: {email}});
        if (logUser !== null) {
            const validPassword = bcryptjs.compareSync(password, logUser.password);
            if (!validPassword) return res.status(400).json({ok: false, msg: "the password is incorrect"});
            else {
                const token = await generateJWT(logUser.id, logUser.name);
                return res.status(200).json({ok: true, msg: "bienvenido", id: logUser.id, name: logUser.name, token})
            }
        } else {
            return res.status(400).json({ok: false, msg: "this user no  exists"});
        }

    } catch (e) {
        return res.status(500).json({ok: false, msg: "error"})
    }
}
const validateToken = async (req, res = response) => {
    const {id, name} = req;
    const token = await generateJWT(id, name);
    res.json({id: id, name: name, token});
}
module.exports = {
    createUser,
    loginUser,
    validateToken
}