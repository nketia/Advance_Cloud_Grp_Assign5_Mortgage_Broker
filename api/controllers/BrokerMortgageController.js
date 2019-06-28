/**
 * BrokerMortgageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    createLoan_805: function (req, res) {
            
        var firstName = req.body.submitted_firstname; // getting the First Name input by the user
    
        var lastName = req.body.submitted_lastname;
        var address = req.body.submitted_address;
    
        var phone = req.body.submitted_pnumber;
        var employerName = req.body.submitted_employer;
        var employeeEmail = req.body.submitted_email;
        var mortgageAmount = req.body.submitted_amount;
        
        sails.log(firstName); BrokerMortgage.create({ firstName: firstName,
        lastName: lastName, address: address, phone: phone,
        employerName:employerName, employeeEmail:employeeEmail, mortgageAmount:mortgageAmount,status:'Pending'}).exec(
        function (err){
            if (err) { 
                console.log("Error inserting data");
                res.send( { error: "Database Error: Could not insert into table" }); 
            }
            console.log("Request submitted sucessfully");
            res.send({ regSuccess: "Application was submitted successfully!"});
        });
    },

};

