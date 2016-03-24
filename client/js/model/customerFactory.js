var myApp = angular.module('myApp', ['ngRoute']);

myApp.factory('customerFactory', function($http) {
        
  var customers = [];
  var factory = {};

  factory.getCustomers = function(callback) {
    $http.get('/customers').success(function(output) {
      customers = output;
      callback(customers);
    });
  }

  factory.createCustomer = function(new_customer, callback) {
    $http.post('/addCustomer', new_customer).success(function(output) {
      //customers.push(output);
      console.log(output);
      factory.getCustomers(callback);
      //callback(customers);
    });
  }

  factory.removeCustomer = function(name, callback) {
    $http.post('/removeCustomer', name).success(function(output) {
      factory.getCustomers(callback);
    });
  }

  return factory;   
});
