var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/admin/add-category", function(req, res, next) {
  res.render("admin/add-category");
});

module.exports = router;
