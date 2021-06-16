const { Router } = require('express');

const {
    getWorkers,
    postWorker,
    patchWorker,
    deleteWorker
} = require('../controllers/workers')

const router = Router();

router.get('/', getWorkers);

router.post('/', postWorker);

router.patch('/:id', patchWorker);

router.delete('/:id', deleteWorker);

module.exports = router;