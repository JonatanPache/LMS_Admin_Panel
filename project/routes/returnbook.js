var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/admin/return-a-book", function(req, res, next) {
  res.render("admin/return-a-book");
});

module.exports = router;
