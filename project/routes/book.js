var express = require('express');
const Sequelize = require("sequelize");
var Op = Sequelize.Op;
var categoryModel = require("../models").Category;
var bookModel = require("../models").Book;

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
  if (!req.files) {
    req.flash("error","Please upload some file");
  } else {
    
    var image_attr = req.files.cover_image;

    image_attr.mv("./public/uploads/" + image_attr.name);

    bookModel.create({
      name: req.body.name,
      categoryId: req.body.dd_category,
      description: req.body.description,
      amount: req.body.amount,
      cover_image: "/uploads/" + image_attr.name,
      author: req.body.author,
      status: req.body.status
    }).then( (data) => {
      if(data){
        // save
        req.flash("success", "Book has been created");
      } else {
        // not saved
        req.flash("error", "Failed to created book");
      }

      res.redirect("/admin/add-book");
    })
  }
});



router.get("/admin/list-book", function(req, res, next) {
  res.render("admin/list-book");
});

module.exports = router;
