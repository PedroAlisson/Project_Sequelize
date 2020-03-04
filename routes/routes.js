const express = require('express')
const pessoasController = require('../controllers/pessoasController')
const router = express.Router()

router.get('/', pessoasController.index)

module.exports = {router}