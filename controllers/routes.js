
const Agendamento = require('../models/Agendamentos')

 
module.exports = app => {
   app.get('/agendamentos', (req, resp) => {
      Agendamento.listagem(resp);
   });

   app.post('/agendamentos', (req, resp) => {
         const agendamento = req.body;
         Agendamento.inserir(agendamento, resp);
   });

   app.get('/agendamentos/:id', (req, resp) => {
     const id = parseInt(req.params.id)
     Agendamento.buscaPorId(id, resp)
   })
   
 }  