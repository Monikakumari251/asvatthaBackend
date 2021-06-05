module.exports = app => {
    const volunteers = require("../controllers/volunteer.controller");

    // import {Volunteer} from '../controllers/volunteer.controller';
  
    // Create a new Customer
    app.post("/addVolunteer", volunteers.create);
  
    // Retrieve all Customers
    app.get("/getVolunteers", volunteers.findAll);
  
    // Retrieve a single Customer with customerId
    app.get("/getVolunteers/:customerId", volunteers.findOne);
  
    // Update a Customer with customerId
    app.put("/getVolunteers/:customerId", volunteers.update);
  
    // Delete a Customer with customerId
    app.delete("/getVolunteers/:customerId", volunteers.delete);
  
    // Create a new Customer
    app.delete("/getVolunteers", volunteers.deleteAll);
  };