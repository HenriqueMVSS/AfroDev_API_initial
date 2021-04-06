const mysql = require('mysql');

// criando conexão com banco de dados
const conexao = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: 'teste123',
  database: 'agenda'

})

module.exports = conexao;