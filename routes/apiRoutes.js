const db = require("../db/db.json");
const fs = require("fs");
// Pulls router() from the express package

const router = require("express").Router();

// built into node , used for relative pathing.
const path = require("path");

// GET route
// /api/notes
router.get("/notes", (req, res) => {
    res.json(db);
});

// POST route
///api/notes
router.post("/notes", (req, res) => {
    // pushes new notes to db array
    db.push(req.body);

    // write modified db array to db.json
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(db));

    // sends json back to front end
    res.json(db);
});

// exports router and all attached routes.
module.exports = router;
