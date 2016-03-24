//var myApp = angular.module('myApp', ['ngRoute']);

myApp.factory('orderFactory', function($http) {
        
  var orders = [];
  var factory = {};


  factory.getOrders = function(callback) {
    $http.get('/orders').success(function(output) {
      orders = output;
      console.log(JSON.stringify(output[0]));
      callback(orders);
    });
  }

  factory.createOrder = function(new_order, callback) {
    $http.post('/addOrder', new_order).success(function(output) {
      factory.getOrders(callback);
      //callback(orders);
    });
  }

  return factory;
        
});