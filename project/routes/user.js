var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/admin/add-user", function(req, res, next) {
  res.render("admin/add-user");
});

router.get("/admin/list-user", function(req, res, next) {
  res.render("admin/list-user");
});

module.exports = router;
