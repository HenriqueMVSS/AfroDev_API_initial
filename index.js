const configExpress = require("./config/configExpress");
const conexao = require("./conexao");
const Tabelas = require("./Tabelas");

// O conect é responsavel por conectar no servidor.
conexao.connect(error => {
    if(error){
        throw error
    }
    // criando as tabelas ao iniciar o app
    Tabelas.init(conexao)

    // O configExpress é uma função que retorna o nossa app configurado.
    // Chamando a função para obter o app criado.
    app = configExpress()

    // subindo servidor na porta 3000 e assim que subir executar uma função
    app.listen(3000,() => {
        console.log('Servidor Rodando na porta 3000')
    })

    
})





