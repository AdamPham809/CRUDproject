let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next) =>{
    res.render('index', {title: 'Home'});
}

module.exports.displayProductPage = (req, res, next) =>{
    res.render('index', {title: 'Products'});
}

module.exports.displayShoppingBag = (req, res, next) =>{
    res.render('index', {title: 'Shopping Bag'});
}