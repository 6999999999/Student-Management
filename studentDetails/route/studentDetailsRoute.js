const express = require('express');
const studentDetailsCtrl = require('../controller/studentDetailsCtrl');
const router = express.Router();

router.use('/all', (req, res) => {
    switch (req.method) {
        case 'GET':
            return studentDetailsCtrl.getAllStudent(req, res);
        default:
            return res.send({message: 'Invalid Request Method'});
    }
});

module.exports = router;
