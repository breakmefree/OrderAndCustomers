myApp.controller('customersController', function($scope, customerFactory) {
  $scope.customers = [];
  $scope.dup_msg = "";
    customerFactory.getCustomers(function(data) {
      $scope.customers = data;
    });

  $scope.createCustomer = function() {
    if($scope.isDuplicate()){
      $scope.dup_msg = "can\'t add the name because it is already used!";
    }else{
      $scope.newCustomer.date = new Date();
      customerFactory.createCustomer($scope.newCustomer, function(data) {
        $scope.customers = data;
        $scope.newCustomer={};
      });
    }
  }

  $scope.removeCustomer = function(customer) {
    customerFactory.removeCustomer(customer, function(data){
      $scope.customers = data;
    });
  }

  $scope.isDuplicate = function(){
      for(var i=0;i<$scope.customers.length;i++){
        if($scope.new_customer !== undefined){
          if($scope.new_customer.name == $scope.customers[i].name){
            $scope.dup_msg = "name is already used!"
            return true;
          }
        }
      }
    return false; 
  }
})