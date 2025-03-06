import { Router } from 'express';
import { getBased } from '../controllers/basedcontroller.js';

const router = Router();

router.get('/based', getBased);
// router.get('/clinica/:id', getClinicas);

export default router;

// router.get('/clinica', (req, res) => {
//     res.send('clinica');
// });