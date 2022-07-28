const router = require('express').Router();
var { testController } = require('../controllers/testController');
router.post('/login', testController.testControl);
console.log('router=>')
module.exports = router
