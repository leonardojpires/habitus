import { Router } from 'express';
import { pool } from '../db.js';
const router = Router();

router.get('/', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM produtos');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
});


router.get('/produtos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM produtos WHERE id = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar produto' });
    }   
});

export default router;