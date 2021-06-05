const sql = require("./db.js");

// constructor
const Volunteer = function(volunteer) {
  this.first_name = volunteer.first_name;
  this.last_name = volunteer.last_name;
  this.phone = volunteer.phone;
  this.email = volunteer.email;
  this.gender = volunteer.gender;
  this.pan_card = volunteer.pan_card;
  this.country = volunteer.country;
  this.state = volunteer.state;
  this.pin_code = volunteer.pin_code;
};

Volunteer.create = (newCustomer, result) => {
  sql.query("INSERT INTO volunteer SET ?", newCustomer, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created volunteer: ", { id: res.insertId, ...newCustomer });
    result(null, { id: res.insertId, ...newCustomer });
  });
};

Volunteer.findById = (customerId, result) => {
  sql.query(`SELECT * FROM volunteer WHERE id = ${customerId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found volunteer: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Volunteer.getAll = result => {
  sql.query("SELECT * FROM volunteer", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("volunteers: ", res);
    result(null, res);
  });
};

Volunteer.updateById = (id, customer, result) => {
  sql.query(
    "UPDATE volunteer SET email = ?, first_name = ?, phone = ? WHERE id = ?",
    [customer.email, customer.name, customer.active, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated customer: ", { id: id, ...customer });
      result(null, { id: id, ...customer });
    }
  );
};

// Customer.remove = (id, result) => {
//   sql.query("DELETE FROM customers WHERE id = ?", id, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     if (res.affectedRows == 0) {
//       // not found Customer with the id
//       result({ kind: "not_found" }, null);
//       return;
//     }

//     console.log("deleted customer with id: ", id);
//     result(null, res);
//   });
// };

// Customer.removeAll = result => {
//   sql.query("DELETE FROM customers", (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     console.log(`deleted ${res.affectedRows} customers`);
//     result(null, res);
//   });
// };

module.exports = Volunteer;