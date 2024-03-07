const express = require('express');
const router = express.Router();

/* GET home page. */
router.get("/admin/add-book", function(req, res, next) {
  res.render("admin/add-book");
});

router.get("/admin/list-book", function(req, res, next) {
  res.render("admin/list-book");
});

module.exports = router;
