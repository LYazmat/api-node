// FUNÇÃO DO ARQUIVO: armazenar as principais importações e informações da aplicação
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

//  rotas do nosso projeto

const movies = require("./routes/moviesRoutes");

// definir rota principal

// app.use("/movies", movies);

module.exports = app;