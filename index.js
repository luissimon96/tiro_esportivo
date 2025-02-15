const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const port = 3000;

var path = require('path');
const app = express();

var login = 'admin';
var password = '123456';

app.use(helmet());
app.use(session({ secret: 'umassenhaaleatoria', resave: false, saveUninitialized: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

app.post('/', (req, res) => {
  if (req.body.password === password && req.body.login === login) {
    req.session.login = login;
    res.render('logado', { login: login });
  } else {
    res.render('index');
  }
});

app.get('/', (req, res) => {
  if (req.session.login) {
    res.render('logado', { login: login });
  } else {
    res.render('index');
  }
});

app.get('/sobre', (req, res) => {
  if (req.session.login) {
    res.render('sobre', { login: login });
  } else {
    res.render('sobre');
  }
});

app.get('/cadastroNovoCliente', (req, res) => {
  if (req.session.login) {
    res.render('cadastroNovoCliente', { login: login });
  } else {
    res.render('cadastroNovoCliente');
  }
});

app.listen(port, () => {
  console.log('servidor está funcionando');
});
