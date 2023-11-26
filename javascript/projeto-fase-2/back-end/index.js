import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import { pratosRoutes } from "./routes/pratos.js";
import { bebidasRoutes } from "./routes/bebidas.js";
import { sobremesasRoutes } from "./routes/sobremesas.js";
import { reservarRoutes } from "./routes/reservar.js";
import { mensagemRoutes } from "./routes/mensagem.js";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../front-end')));

const listaReservas = [];
const listaMensagens = [];

app.use((req, res, next) => {
  req.listaReservas = listaReservas;
  next();
});

app.use((req, res, next) => {
  req.listaMensagens = listaMensagens;
  next();
});

app.use(pratosRoutes);
app.use(bebidasRoutes);
app.use(sobremesasRoutes);
app.use(reservarRoutes);
app.use(mensagemRoutes);

app.listen(3333, () => {
  console.log('Servidor iniciado!');
});