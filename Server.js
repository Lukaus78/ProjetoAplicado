const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let usuarios = [];

// Rota para adicionar um novo usuário
app.post("/usuarios", (req, res) => {
  const novoUsuario = req.body;
  novoUsuario._id = Date.now().toString(); // Gerar um ID único
  usuarios.push(novoUsuario);
  res.status(201).json({ message: "Usuário adicionado com sucesso!" });
});

// Rota para obter a lista de usuários
app.get("/usuarios", (req, res) => {
  res.status(200).json(usuarios);
});

// Rota para remover um usuário
app.delete("/usuarios/:id", (req, res) => {
  const id = req.params.id;
  usuarios = usuarios.filter(usuario => usuario._id !== id);
  res.status(200).json({ message: "Usuário removido com sucesso!" });
});

// Iniciar o servidor
app.listen(8000, () => {
  console.log("Servidor backend está em execução na porta 8000");
});
