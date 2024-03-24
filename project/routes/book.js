var express = require('express');
const Sequelize = require("sequelize");
var Op = Sequelize.Op;
var categoryModel = require("../models").Category;

var router = express.Router();

/* GET home page. */
router.route("/admin/add-book").get( async function(req, res, next) {
  // fix if there isnt categories
  var categories = await categoryModel.findAll({
    where: {
      status: {
        [Op.eq] : '1'
      }
    }
  });


  res.render("admin/add-book",{
    categories: categories
  });
}).post( function(req, res, next) {
  
});



router.get("/admin/list-book", function(req, res, next) {
  res.render("admin/list-book");
});

module.exports = router;
