const { response } = require("express")

 
module.exports = app => {
   app.get('/agendamentos', (req, res) => {
     res.send('servidor Ok 2222')
   })
   
 }