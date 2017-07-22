/*to display all characters*/
myApp.directive('showCharacters', function() {
  return{
    templateUrl: 'views/show-characters.html'
  };
})

/*to display filter buttons on character page*/
myApp.directive('showCharSort', function(){
  return{
    templateUrl: 'views/show-char-sort.html'
  };
});
