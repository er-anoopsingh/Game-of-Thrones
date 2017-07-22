/*to display single house*/
myApp.controller('displayHouseCtrl',['getDataFactory','$routeParams', function(getDataFactory, $routeParams) {
  var houseId = $routeParams.id;
  var self = this;
  getDataFactory.getSingleHouse(houseId).then(function(response){
    self.house = response.data;
  });

  self.goBack = function(){
    window.history.back();
  };
}]);
