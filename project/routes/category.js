var express = require('express');

var categoryModel = require("../models").Category;


var router = express.Router();


router.route("/admin/add-category").get(function(req, res, next){
  
  res.render("admin/add-category");

}).post( function(req, res, next){
  
  categoryModel.create({
    name: req.body.name,
    status: req.body.status,
  }).then( (category) => {
    res.redirect("/admin/add-category");
  }); 


});


router.get("/admin/list-category", function(req, res, next) {
  res.render("admin/list-category");
});

module.exports = router;
