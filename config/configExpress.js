const express = require('express')
const consign = require('consign')


module.exports = () => {
  // criando a aplicação
  const app = express()

  app.use(express.json())
  // use() é utilizado para carregar libs dentro do express, para ler o body html da requisição
  // use() é utilizado para carregar libs dentro do express, para ler o body em json da requisição
  consign()
  .include('controllers')
  .into(app)
   
  return app
}

