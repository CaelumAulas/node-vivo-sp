
module.exports = (app) => {

    // Dentro de ./routes
    // Criar o ./routes/livros.js
    // Importar como fizemos com o home.js
    app.get('/livros', async function (req, res) {
        debugger
        const LivrosDAO = require('../infra/LivrosDAO')
        const livrosDAO = new LivrosDAO()
        // # async await: Async que é Sync
        try {
            const livros = await livrosDAO.pegaTodos()
            res.render('livros/lista', {
                titulo: 'Livros',
                livros: livros
            })
        } catch(err) {
            res.send(err)
        }

    })

    app.post('/livros', function(request, response) {

        console.log('Dados no body', request.body)
        // dados do livro
        // inserir o livro novo
        // mandar um redirect para a listagem de livros
    })

    app.get('/livros/form', function(req, res) {
        res.render('livros/form')
    })


}