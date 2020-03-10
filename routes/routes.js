const express = require('express')
const pessoasController = require('../controllers/pessoasController')
const router = express.Router()

router.get('/', pessoasController.index)
router.get('/create', )
router.post('/create', pessoasController.store)
router.get('/update', )
router.post('/update', pessoasController.updatePessoa)
router.get('/delete', pessoasController.deletePessoa)


module.exports = {router}