const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');




const app = express();
const corsOptions ={
  origin:'http://localhost:3008', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));

// parse requests of content-type: application/json
app.use(bodyParser.json());
// app.use(cors(bodyParser.json()))

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors(bodyParser.urlencoded({ extended: true })));

// simple route
app.get("/payment", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/volunteer.routes")(app);
require("./app/routes/payment.routes")(app);
// app.use("/payment", require("./app/routes/payment.routes"));
// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
