/**
 * BrokerMortgageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    createLoan_805: function (req, res) {

       // var id = req.body.submitted_cusId;  //getting the customerID input ny the user
    
        var firstName = req.body.submitted_firstname; // getting the First Name input by the user
    
        var lastName = req.body.submitted_lastname;
        var address = req.body.submitted_address;
    
        var phone = req.body.submitted_pnumber;
        var employerName = req.body.submitted_employer;
        var employeeEmail = req.body.submitted_email;
        var mortgageAmount = req.body.submitted_amount;
    
        
        sails.log(firstName); BrokerMortgage.create({ firstName: firstName,
        lastName: lastName, address: address, phone: phone,
        employerName:employerName, employeeEmail:employeeEmail, mortgageAmount:mortgageAmount,status:'Pending'}).exec(function (err) {   if (err) { res.send( {
        error: 'Database error inserting into table' });
    
          }
          res.send({ regSuccess: "success" });
        });
    },

};

