// FUNÇÃO DO ARQUIVO: inicializar o servidor em noje.js
const app = require("./src/app");
const PORT = 8080;


// console.log(app)


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})