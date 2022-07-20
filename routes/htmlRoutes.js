// Pulls router() from the express package

const router = require("express").Router();

// built into node , used for relative pathing.
const path = require("path");

// GET route
// catch all route
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// exports router and all attached routes.
module.exports = router;
