const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');
const precoMiddleware = require('../middlewares/precoMiddleware');
const dataMiddleware = require('../middlewares/dataMiddleware');
/* GET produtos*/
router.get('/', produtoController.findAll);
/* POST produtos*/
router.post('/', precoMiddleware.validatePreco,
    dataMiddleware.validateDataAtualizado,
    produtoController.save,
);/* PUT produtos*/
router.put('/', produtoController.update);
/* DELETE produtos*/
router.delete('/:id', produtoController.remove);

module.exports = router;
