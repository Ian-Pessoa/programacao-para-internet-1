import { Router } from "express";

const pratos = [
  {
    img: "imagens/prato-1.jpg",
    prato: "Filé à Parmegiana",
    preco: "R$ 29",
    descricao: "Filé à parmegiana, macarrão, batastas fritas"
  },
  {
    img: "imagens/prato-2.jpg",
    prato: "Picanha Argentina",
    preco: "R$ 29",
    descricao: "Picanha argentina, arroz, feijão e purê de batata"
  },
  {
    img: "imagens/prato-3.webp",
    prato: "Bacalhau Zé do Pipo",
    preco: "R$ 29",
    descricao: "Bacalhau, molho branco, arroz e purê de batata"
  }
];

export const pratosRoutes = Router();

pratosRoutes.get("/api/pratos", (_, res) => {
  return res.status(200).json(pratos);
});