
const http = require('http') // CommonJS 
const server = http.createServer(function lidaComRequests(request, response) {
    console.log(request.url)
    console.log('request feito')

    const metodos = []
    
    const rotas = []
    rotas['/'] = function(request, response) {
        response.end()
    }
    rotas['/contato'] = '<h1>Contato</h1>'
    
    metodos['GET'] = rotas

    metodos[request.method][request.url]



    if(rotas[request.url]) {
        response.writeHead(200)
        response.end(rotas[request.url])
    } else {
        response.writeHead(404)
        response.end('Não encontrado 404')    
    }

    // if(request.url == '/contato') {
    //     response.writeHead(200)
    //     response.end('<h1>Contato</h1>')
    //     return false
    // }
    // if(request.url  == '/') {
    //     response.writeHead(200)
    //     response.end('<h1>alo alo w brazil</h1>')
    //     return false

    // }

})

// Temporal Deadzone
const port = 3007
// Por padrão usa const
// Se não for mudar usa const
// Se for mudar usa let
// Que var?

server.listen(port, function() { // Anonima
    console.log(`
        Servidor Rodando!
        Para ver acesse http://localhost:${port}
        Para derrubar o servidor aperte Ctrl + C
    `)
})

// TC39 (Fica de olho no github desses caras)
// Ecma 262 (norma que padroniza o JavaScript)
// MDN documentação oficial

