const sql = require("./db.js");

// constructor
const Payment =function(payment) {
  this.name = volunteer.name;
  this.mobile = volunteer.mobile;
  this.village = volunteer.village;
  this.email = volunteer.email;
  this.district = volunteer.district;
  this.pan_card = volunteer.pan_card;
  this.city = volunteer.city;
  this.state = volunteer.state;
  this.address = volunteer.address;
  this.aadhar = volunteer.aadhar;
  this.amount = volunteer.amount;
};

// const Payment =function(payment) {
//     name: req.body.name,
//     mobile: req.body.mobile,
//     village: req.body.village,
//     district: req.body.district,
//     city: req.body.city,
//     state: req.body.state,
//     email: req.body.email,
//     address: req.body.address,
//     aadhar: req.body.aadhar,
//     amount: req.body.amount,
//     pan_card: req.body.pan_card
// };

Payment.create = (newCustomer, result) => {
  sql.query("INSERT INTO tbl_payment SET ?", newCustomer, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created payment id: ", { id: res.insertId, ...newCustomer });
    result(null, { id: res.insertId, ...newCustomer });
  });
};

module.exports = Payment;