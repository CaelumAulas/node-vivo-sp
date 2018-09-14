
module.exports = (app) => {

    // Dentro de ./routes
    // Criar o ./routes/livros.js
    // Importar como fizemos com o home.js
    app.get('/livros', async function (req, res, next) {
        const LivrosDAO = require('../infra/LivrosDAO')
        const livrosDAO = new LivrosDAO()
        // # async await: Async que é Sync
        try {
            const livros = await livrosDAO.pegaTodos()
            res.format({
                html: () => {
                    res.render('livros/lista', {
                        titulo: 'Livros',
                        livros: livros
                    })
                },
                json: () => {
                    res.json(livros)
                }
            })
        } catch(err) {
            err.status = 512
            next(err)
        }

    })

    app.post('/livros', async function(request, response, next) {
        // dados do livro
        console.log('Dados no body', request.body)


        // Validações
        const validator = require('fluent-validator')
        const validations = validator()
            .validate(request.body.preco).param('preco').isFloat()
            .validate(request.body.titulo).param('titulo').isNotEmpty()

        if(validations.hasErrors()) {
            response.format({
                html: () => {
                    response.render('livros/form', {
                        erros: validations.getErrors(),
                        livro: request.body
                    })
                },
                json: () => {
                    response.json(validations.getErrors())                    
                }
            })
            return false
        }


        // Inserindo o livro novo!
        const LivrosDAO = require('../infra/LivrosDAO')
        const livrosDAO = new LivrosDAO()
        try {
            const resultado = await livrosDAO.cadastrarLivro(request.body)
            response.status(201)

            response.format({
                html: () => {
                    response.redirect('/livros')
                },
                json: () => {
                    response.send({
                        msg: 'Livro criado com sucessinhos!'
                    })
                }
            })
        } catch(err) {
            next(err)
            // response.status(400)
        }
        // mandar um redirect para a listagem de livros
    })

    app.get('/livros/form', function(req, res) {
        res.render('livros/form')
    })


}