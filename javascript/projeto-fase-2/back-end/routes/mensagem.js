import { Router } from "express";

export const mensagemRoutes = Router();

mensagemRoutes.get('/api/mensagem', function(req, res) {
  res.json(req.listaMensagens);
});

mensagemRoutes.post('/api/mensagem', function(req, res) {
  const nome = req.body.nome;
  const email = req.body.email;
  const assunto = req.body.assunto;
  const comentario = req.body.comentario;

  req.listaMensagens.push({
    nome,
    email,
    assunto,
    comentario,
  });

  res.json(req.listaMensagens);
});