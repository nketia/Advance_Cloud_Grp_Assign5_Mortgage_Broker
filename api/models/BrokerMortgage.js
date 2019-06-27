/**
 * BrokerMortgage.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    firstName : {
      type: 'string',
      required:true
    },
    lastName : {
      type: 'string',
      required:true
    },
    address:{
      type:"string",
      required:true
    },
    phone : {
      type: 'number',
      required:true
    },
    employerName:{
      type: 'string',
      required:true
    },
    employeeEmail:{
      type: 'string',
      required:true
    },
    mortgageAmount: {
      type: 'number',
      required: true
    },
    status: {
      type: 'string'
    },
  },

};

