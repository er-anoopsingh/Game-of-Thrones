/*to display all houses*/
myApp.directive('showHouses', function(){
  return{
    templateUrl: 'views/show-houses.html'
  }
});

/*to display filter buttons on house page*/
myApp.directive('showHouseSort', function(){
  return{
    templateUrl: 'views/show-house-sort.html'
  };
});
