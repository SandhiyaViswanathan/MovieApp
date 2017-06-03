const express = require('express');
const router = express.Router();

const bear = require('./bear');


router.use((req, res, next) => {
    
	
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});


router.use('/bear', bear)


module.exports = router;