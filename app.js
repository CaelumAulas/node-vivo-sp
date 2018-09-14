const Express = require('express')
const bodyParser = require('body-parser')

const app = new Express()

app.set('view engine', 'ejs')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const cors = require('cors')
app.use(cors())
// # Middlewares
app.use(Express.static('./public'))
// app.get('/css/bootstrap.min.css', (req,res) => {
//     res.renderFile('./public/css/bootstrap.min.css')
// })

// Chamar o home e passar o app pro require
var consign = require('consign');
// require('./routes/home')(app) // Da console.log nisso
// require('./routes/livros')(app) // Express Router 
consign()
  .include('routes')
  .into(app);

app.get('/pagina-errada', (req,res,next) => {
    const err = true
    if(err) {
        const erro = new Error('Alguma coisa deu errado, na vida')
        erro.status = 512
        next(erro)
        return
    }
    res.send('xablau')
})

// Momento Vários Nada
app.use((req,res,next) => {
    res.status(404).send('Você caiu no limbo: 404')
})

app.use((err, req,res,next) => { // Ponto final
    res.status(err.status).send({
        message: err.message
    })
})






module.exports = app