const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')

const port = 3000

var path = require('path')
const app = express()

var login = 'admin'
var password = '123456'

app.use(session({ secret: 'umassenhaaleatoria' }))
app.use(bodyParser.urlencoded({ extended: true }))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use('/public', express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, '/views'))

app.post('/', (req, res) => {
  //console.log(req.body.login) //Aqui eu recupero o valor digitado no campo de login posso utilizar isso para enviar para o banco de dados
  if (req.body.password == password && req.body.login == login) {
    //testando se o usuário e senha é o que setei no var caso sim Logado com sucesso
    req.session.login = login
    res.render('logado', { login: login })
  } else {
    res.render('index')
    //Caso não seja podemos colocar um aviso ou seilá
  }
})

app.get('/', (req, res) => {
  if (req.session.login) {
    res.render('logado', { login: login })
    console.log('O meu usuário logado é: ' + req.session.login)
  } else {
  }
  res.render('index.html')
})

app.get('/sobre', (req, res) => {
  if (req.session.login) {
    res.render('sobre', { login: login })
    console.log('Acessando a pagina de login: ' + req.session.login)
  } else {
  }
  res.render('sobre.html')
})

app.get('/cadastroNovoCliente', (req, res) => {
  if (req.session.login) {
    res.render('cadastroNovoCliente', { login: login })
  } else {
  }
  res.render('cadastroNovoCliente.html')
})

app.listen(port, () => {
  console.log('servidor está funcionando')
})
