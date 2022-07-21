const db = require("../db/db.json")

// Pulls router() from the express package

const router = require("express").Router();

// built into node , used for relative pathing.
const path = require("path");

// GET route
// /api/notes
router.get("/notes", (req, res) => {
  res.json(db);
});



// exports router and all attached routes.
module.exports = router;
