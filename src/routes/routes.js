module.exports = routes => {
    const controllers= require("../controllers/controllers");
   
    var router = require("express").Router();
    // Hash
    // Create a new hash
    router.post("/hash", controllers.createHash);
    // Redirect hash
    router.get("/hash/:hash", controllers.getHash);
    // all hash
    router.get("/hash", controllers.getAllHash);
    

    routes.use('/api', router);
  };