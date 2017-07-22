/*to display single book*/
myApp.controller('displayBookCtrl',['getDataFactory','$routeParams', function(getDataFactory, $routeParams) {

  var self = this;
  var bookId = $routeParams.id;
  getDataFactory.getSingleBook(bookId).then(function(response){
    self.book = response.data;
  }).catch(function(error) {
    console.log(error);
  });

  self.goBack = function(){
    window.history.back();
  };

}]);
