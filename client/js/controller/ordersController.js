myApp.controller('ordersController', function($scope, customerFactory, orderFactory) {

  $scope.orders = [];
  $scope.customers = [];
  $scope.products=["Nike Shoes", "Black Belt", "Ice Creams", "Candies"];
  $scope.orderNos=[1, 2 , 3, 4, 5, 6, 7, 8, 9, 10];
  $scope.newOrder={};
  
  // Default call
  orderFactory.getOrders(function(data) {
    $scope.orders = data;
  });

  // Default call of this method
  customerFactory.getCustomers(function(data) {
    $scope.customers = data;
  });

  $scope.createOrder = function() {

    $scope.newOrder.date = new Date();

    orderFactory.createOrder($scope.newOrder, function(data) {
      $scope.orders = data;
    });
  }

})