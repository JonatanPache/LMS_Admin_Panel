var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/admin/issue-a-book", function(req, res, next) {
  res.render("admin/issue-a-book");
});

router.get("/admin/issue-history", function(req, res, next) {
  res.render("admin/issue-history");
});

module.exports = router;
