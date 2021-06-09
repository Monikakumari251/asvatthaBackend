// const sql = require("./db.js");

// constructor
const Payment =function(payment) {
  this.name = payment.name;
  this.mobile = payment.mobile;
  this.village = payment.village;
  this.email = payment.email;
  this.district = payment.district;
  this.pan_card = payment.pan_card;
  this.city = payment.city;
  this.state = payment.state;
  this.address = payment.address;
  this.aadhar = payment.aadhar;
  this.amount = payment.amount;
};

// Payment.create = (newCustomer, result) => {
//   sql.query("INSERT INTO tbl_payment SET ?", newCustomer, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }

//     console.log("created payment id: ", { id: res.insertId, ...newCustomer });
//     result(null, { id: res.insertId, ...newCustomer });
//   });
// };

module.exports = Payment;