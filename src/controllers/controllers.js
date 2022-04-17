const Hash = require("../models/url");
// Create and Save a user
exports.createHash = (req, res) => {
  // Validate request
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send({
      error: "Bad request",
    });
  }
  // Create a hash
  const hash = {
    url: req.body.url,
  };
  // Save user in the database
  try {
    let data = Hash.addHash(hash);
    return res
      .status(200)
      .send({ url: `http://localhost:8080/api/hash/${data.hash}` });
  } catch (e) {
    return res.status(500).send({
      message: "Some error occurred while creating the Hash.",
    });
  }
};

// Find a url with a hash
exports.getHash = (req, res) => {
  try {
    let data = Hash.getHash(req.params.hash);
    return res.redirect(data.url);
  } catch (e) {
    return res.status(500).send({
      message: "Some error occurred while redirecting",
    });
  }
};
