const connectionFactory = require('./connectionFactory')

class LivrosDAO {
    pegaTodos() {
        return new Promise((resolve, reject) => {
            connectionFactory()
                .then(function(connection) {
                    connection.query(`SELECT * FROM livros2`, function(err, results) {
                            if(err) {
                                reject(err)
                            }
                            resolve(results)
                        })
                })
        })
    }

    cadastrarLivro(livro) {
        return new Promise((resolve, reject) => {
            connectionFactory()
                .then(function(connection) {
                    connection.query(`INSERT INTO livros SET ?`, livro, function(err, results) {
                            if(err) {
                                reject(err)
                            }
                            resolve(results)
                        })
                })
        })
    }

}


module.exports = LivrosDAO
