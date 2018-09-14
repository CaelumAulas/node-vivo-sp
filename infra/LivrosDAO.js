const connectionFactory = require('./connectionFactory')

class LivrosDAO {
    pegaTodos() {
        return new Promise((resolve, reject) => {
            connectionFactory()
                .then(function(connection) {
                    connection.query(`SELECT * FROM livros`, function(err, results) {
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
