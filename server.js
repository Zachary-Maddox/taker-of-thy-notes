const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");

// initialize express
const app = express();
// process.env.PORT||3001 allows heroku to pick the port or defers to 3001.
const PORT = process.env.PORT||3001;

//middleware
// serves the public folder to the browser. 
app.use(express.static('public'));

// Routes
app.use("/",htmlRoutes)

// This allows the app to listen on a specific PORT
app.listen(PORT,() => {
  console.log(`app is listening on http://localhost:${PORT}`)
})

