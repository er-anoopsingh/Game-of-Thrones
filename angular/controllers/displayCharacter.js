/*to display single character*/
myApp.controller('displayCharCtrl',['getDataFactory','$routeParams', function(getDataFactory, $routeParams) {
  var charId = $routeParams.id;
  var self = this;
  getDataFactory.getSingleCharacter(charId).then(function(response){
    self.character = response.data;
  });

  self.goBack = function(){
    window.history.back();
  };
}]);
