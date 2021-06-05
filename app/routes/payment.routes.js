module.exports = app => {
    const payment = require("../controllers/payment.controller");
  
    // Create a new Customer
    app.post("/orders", payment.post);

    app.post("/addPAyment", payment.create);
  };
