import { Router } from "express";

const bebidas = [
  {
    img: "imagens/bebida-1.jpg",
    prato: "Sucos de Fruta",
    preco: "R$29",
    descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    img: "imagens/bebida-2.webp",
    prato: "Vinho",
    preco: "R$29",
    descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    img: "imagens/bebida-3.jpg",
    prato: "Champanhe",
    preco: "R$29",
    descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  }
];

export const bebidasRoutes = Router();

bebidasRoutes.get("/api/bebidas", (_, res) => {
  return res.status(200).json(bebidas);
});