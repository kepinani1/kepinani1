var express = require("express");

var router = express.Router();

// Import the model (budget.js) to use its database functions.
var budget = require("../models/budget.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
budget.all(function(data) {
    var hbsObject = {
      budget: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/budget", function(req, res) {
  budget.create([
    "name", "expense", "income", "amount"
  ], [
    req.body.name, req.body.expense, req.body.income, req.body.amount
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/budget/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  budget.update({
    amount: req.body.amount
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/budget/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  budget.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;