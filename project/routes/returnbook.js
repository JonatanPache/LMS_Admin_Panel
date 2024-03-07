var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/admin/return-a-book", function(req, res, next) {
  res.render("admin/return-a-book");
});

router.get("/admin/return-list-book", function(req, res, next) {
  res.render("admin/return-list");
});

module.exports = router;
