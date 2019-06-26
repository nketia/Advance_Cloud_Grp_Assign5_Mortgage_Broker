/**
 * BrokerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

	createLoan_805: function (req, res) {

    var ProvinceID = req.body.submitted_ProvinceID;  //getting the customerID input ny the user

    var fName = req.body.submitted_firstname; // getting the First Name input by the user

    var lName = req.body.submitted_lastname;
    var address = req.body.submitted_address;

    var phone_number = req.body.submitted_pnumber;
    var employerName = req.body.submitted_employer;

    
    sails.log(fName); Mortgage.create({ ProvinceID: ProvinceID, fName: fName,
    lName: lName, address: address, phone_number: phone_number,
    employerName:employerName}).exec(function (err) {   if (err) { res.send( {
    error: 'Database error inserting into table' });

      }
      res.send({ regSuccess: "success" });
    });


  },

  

};

