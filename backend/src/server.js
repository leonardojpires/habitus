import "dotenv/config";
import express from "express";
import cors from "cors";
import contactosRoutes from "./routes/contactos.routes.js";
import produtosRoutes from "./routes/produtos.routes.js";

const app = express();
app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:5174'] })); //Frontend Vite/React
app.use(express.json());


// Rota de teste
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

// Rotas principais
app.use('/api/produtos', produtosRoutes);
app.use('/api/contact', contactosRoutes);

// Servir imagens locais, se existirem
app.use('/public', express.static('public'));

app.listen(process.env.PORT || 3001, () =>
  console.log(`API pronta em http://localhost:${process.env.PORT || 3001}`)
);