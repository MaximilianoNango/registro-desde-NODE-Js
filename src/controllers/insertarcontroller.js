import { pool } from "../models/db.js";

export const getInsertar = async (req, res) => {
    const [rows] = await pool.query('Insert into cliente (nombre) values ("Jaime")');
    res.json(rows);
}
