const app = require('../index')

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));

app.get('/',(req, res) => {

    res.send("Servidor OK");
});
