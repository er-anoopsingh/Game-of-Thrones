/*to display all books*/
myApp.directive('showBooks', function() {
  return{
    templateUrl: 'views/show-books.html'
  };
});

/*to display filter buttons on book page*/
myApp.directive('showBookSort', function(){
  return{
    templateUrl: 'views/show-book-sort.html'
  };
});
