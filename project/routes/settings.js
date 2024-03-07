var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/admin/currency-settings", function(req, res, next) {
  res.render("admin/currency-settings");
});

router.get("/admin/day-settings", function(req, res, next) {
  res.render("admin/day-settings");
});

module.exports = router;
