const express = require('express');
const populate = require('../Elastic')
const router = express.Router();

router.get('/', (req, res) => {
    res.send('<p> index records to Elasticsearch </p>');
    populate.insertElastic();
    console.log("done");
});

module.exports = router;