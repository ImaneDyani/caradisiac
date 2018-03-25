const express = require('express')
const router = express.Router();

router.use('/populate', require('./populate'));
router.use('/suv', require('./suv'));

router.get('/', (req,res) => {
    res.send('<p>  Enter http://localhost:9292/populate or http://localhost:9292/suv </p>');
});

module.exports = router;