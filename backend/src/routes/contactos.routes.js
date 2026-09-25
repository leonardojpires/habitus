import { Router } from 'express';
import { pool } from '../db.js';
const router = Router();

// POST novo contacto
router.post('/', async (req, res) => {
  const { nome, email, mensagem } = req.body;

  if (!nome || !email || !mensagem) {
    return res.status(400).json({ error: 'Campos obrigatórios: nome, email, mensagem' });
  }

  try {
    await pool.query(
      'INSERT INTO contactos (nome, email, mensagem) VALUES (?, ?, ?)',
      [nome, email, mensagem]
    );
    res.status(201).json({ success: true, message: 'Mensagem enviada com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
});

// (Opcional) GET todos os contactos — útil se quiseres ver no Postman
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM contactos ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
});

export default router;