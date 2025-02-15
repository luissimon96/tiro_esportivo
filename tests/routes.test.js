const request = require('supertest');
const express = require('express');
const session = require('express-session');
const path = require('path'); // Adicionei a importação do path
const app = express();

app.use(session({ secret: 'umassenhaaleatoria', resave: false, saveUninitialized: true }));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '../views'));

app.get('/', (req, res) => {
  if (req.session.login) {
    res.status(200).send('Logado');
  } else {
    res.status(200).send('Index');
  }
});

app.get('/sobre', (req, res) => {
  res.status(200).send('Sobre');
});

app.get('/cadastroNovoCliente', (req, res) => {
  res.status(200).send('Cadastro Novo Cliente');
});

describe('Route Tests', () => {
  it('should return index page', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Index');
  });

  it('should return sobre page', async () => {
    const res = await request(app).get('/sobre');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Sobre');
  });

  it('should return cadastro novo cliente page', async () => {
    const res = await request(app).get('/cadastroNovoCliente');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Cadastro Novo Cliente');
  });
});
