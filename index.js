const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const path = require('path');
const routes = require('./src/infrastructure/routes'); // Certifique-se de que este caminho está correto

const port = 3000;
const app = express();

app.use(helmet());
app.use(session({ secret: 'umassenhaaleatoria', resave: false, saveUninitialized: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'build')));
app.set('views', path.join(__dirname, '/views'));

app.use('/', routes);

app.listen(port, () => {
  console.log('servidor está funcionando');
});
