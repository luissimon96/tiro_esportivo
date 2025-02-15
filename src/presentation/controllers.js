const renderIndex = (req, res) => {
  if (req.session.login) {
    res.render('logado', { login: req.session.login });
  } else {
    res.render('index');
  }
};

const renderSobre = (req, res) => {
  res.render('sobre');
};

const renderCadastroNovoCliente = (req, res) => {
  res.render('cadastroNovoCliente');
};

const handleLogin = (req, res) => {
  const { login, password } = req.body;
  if (login === 'admin' && password === '123456') {
    req.session.login = login;
    res.render('logado', { login });
  } else {
    res.render('index');
  }
};

module.exports = {
  renderIndex,
  renderSobre,
  renderCadastroNovoCliente,
  handleLogin,
};
