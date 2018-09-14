var mysql      = require('mysql');
var connection = mysql.createConnection({
    user     : 'root',
    password : '',
    host     : 'tcp://0.tcp.ngrok.io',
    port: '10007',
    database: 'casadocodego'
});

connection.connect();

connection.query('SELECT * FROM livros', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
  });
  
  
