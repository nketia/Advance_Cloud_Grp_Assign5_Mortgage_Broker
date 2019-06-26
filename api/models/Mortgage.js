/**
 * Mortgage.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {



 
    ProvinceID: {
        type: "string",
        required: true,
        maxLength: 9,
      example: "123456",
        unique: true
    },

    fName: {
        type: "string",
        required: true,
        maxLength: 100,
        example: "Mercy"
    },

    lName: {
        type: "string",
        required: true,
        maxLength: 100,
        example: "Baffour"
    },

    address: {
        type: "string",
        required: true,
        maxLength: 40,
        example: "201809"
    },

    phone_number: {
        type: "string",
        required: true,
        maxLength: 10,
        example: "201809"
    },


 employerName: {
        type: "string",
        required: true,
        maxLength: 20,
        example: "201809"
    },
  },
  datastore: "sailsmysql"

};

 
