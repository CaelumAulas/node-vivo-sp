// Se você importa um módulo:
// 1 - Tenta pegar a lib do core
// 2 - Tenta pegar da Node Modules (se baseando no package.json)
// 3 - Importando arquivos seus, sempre passa caminho relativo
const app = require('./app')

const port = 3007
app.listen(port, function() { // Anonima
    console.log(`
        Servidor Rodando!
        Para ver acesse http://localhost:${port}
        Para derrubar o servidor aperte Ctrl + C
    `)
})