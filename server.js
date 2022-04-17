const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:3030"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
require("./src/routes/routes.js")(app)

// simple route
app.get("/", (req, res) => {
  res.json({ message: "running" });
});

app.get("/redirect/:hash", (req, res) => {
    res.json({ message: req.params.hash });
  });
  app.post("/redirect/", (req, res) => {

    res.json({ message: req.params.hash });
  });







// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});