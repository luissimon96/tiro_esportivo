const request = require('supertest');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();

app.use(session({ secret: 'umassenhaaleatoria', resave: false, saveUninitialized: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '../views'));

const login = 'admin';
const password = '123456';

app.post('/', (req, res) => {
  if (req.body.password === password && req.body.login === login) {
    req.session.login = login;
    res.status(200).send('Logado');
  } else {
    res.status(401).send('Não autorizado');
  }
});

describe('Auth Tests', () => {
  it('should login with correct credentials', async () => {
    const res = await request(app)
      .post('/')
      .send({ login: 'admin', password: '123456' });
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Logado');
  });

  it('should not login with incorrect credentials', async () => {
    const res = await request(app)
      .post('/')
      .send({ login: 'admin', password: 'wrongpassword' });
    expect(res.statusCode).toEqual(401);
    expect(res.text).toContain('Não autorizado');
  });
});
