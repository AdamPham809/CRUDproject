let express = require('express');
let router = express.Router();
let indexController = require('../controller/index');
/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET products page. */
router.get('/products', indexController.displayProductPage);

/* GET Shopping Bag page. */
router.get('/shopping bag', indexController.displayShoppingBag);

module.exports = router;
