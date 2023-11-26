import { Router } from "express";

export const reservarRoutes = Router();

reservarRoutes.get('/api/form', function(req, res) {
  res.json(req.listaReservas);
});

reservarRoutes.post('/api/form', function(req, res) {
  const nome = req.body.nome;
  const email = req.body.email;
  const telefone = req.body.telefone;
  const data = req.body.data;
  const hora = req.body.hora;
  const convidados = req.body.convidados;

  req.listaReservas.push({
    nome,
    email,
    telefone,
    data,
    hora,
    convidados
  });

  res.json(req.listaReservas);
});
