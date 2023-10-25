const { Router } = require('express');
const { GetAll, GetOne, Create, Update, Delete } = require('../controller/tes.controller');

const router = Router();

router.get('/titleAll', GetAll);
router.get('/titleAll/:id', GetOne);
router.post('/create', Create);
router.put('/update/:id', Update);
router.delete('/delete/:id', Delete);


module.exports = router;