const configExpress = require("./config/configExpress");
const conexao = require("./conexao");
const app = configExpress();

conexao.connect(error => {
    if(error){
        throw error;
    }
})


app.listen(3000, () => console.log('Servidor rodando na porta 3000'));


