const Express = require('express')
const app = new Express()

app.set('view engine', 'ejs')

// # Middlewares
app.use(Express.static('./public'))
// app.get('/css/bootstrap.min.css', (req,res) => {
//     res.renderFile('./public/css/bootstrap.min.css')
// })

// Chamar o home e passar o app pro require
require('./routes/home')(app) // Da console.log nisso
require('./routes/livros')(app) // Express Router 



module.exports = app