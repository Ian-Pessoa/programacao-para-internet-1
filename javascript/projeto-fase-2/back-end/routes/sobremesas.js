import { Router } from "express";

const sobremesas = [
  {
    img: "imagens/sobremesa-1.jpg",
    prato: "Petit Gateau",
    preco: "R$29",
    descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    img: "imagens/sobremesa-2.jpg",
    prato: "Pudim",
    preco: "R$29",
    descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    img: "imagens/sobremesa-3.jpg",
    prato: "Brownie com Sorvete",
    preco: "R$29",
    descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  }
];

export const sobremesasRoutes = Router();

sobremesasRoutes.get("/api/sobremesas", (_, res) => {
  return res.status(200).json(sobremesas);
});