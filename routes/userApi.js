const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.status(200).send('Get users'));
router.post('/', (req, res) => res.status(200).send('Create user'));

module.exports = router;
