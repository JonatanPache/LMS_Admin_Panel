var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/admin/add-category", function(req, res, next) {
  res.render("admin/add-category");
});

router.get("/admin/list-category", function(req, res, next) {
  res.render("admin/list-category");
});

module.exports = router;
