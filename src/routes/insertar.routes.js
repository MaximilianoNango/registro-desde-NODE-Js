import { Router } from 'express';
import { getInsertar } from '../controllers/insertarcontroller.js';

const router = Router();

router.get('/insertar', getInsertar);
// router.get('/clinica/:id', getClinicas);

export default router;

// router.get('/clinica', (req, res) => {
//     res.send('clinica');
// });