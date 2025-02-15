const express = require('express');
const router = express.Router();
const { renderIndex, renderSobre, renderCadastroNovoCliente, handleLogin } = require('../presentation/controllers');

router.get('/', renderIndex);
router.post('/', handleLogin);
router.get('/sobre', renderSobre);
router.get('/cadastroNovoCliente', renderCadastroNovoCliente);

module.exports = router;
