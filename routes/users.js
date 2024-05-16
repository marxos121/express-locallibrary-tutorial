var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource: users");
});

router.get("/cool", [
  function (req, res, next) {
    console.log("abc");
    next();
  },
  function (req, res, next) {
    res.send("You are so cool!");
  },
]);

router.get("/cool/:name", function (req, res) {
  res.send(`${req.params.name} is so cool!`);
});

module.exports = router;
