/*controller to manage the display of homepage*/
myApp.controller('displayAllCtrl',['getDataFactory','$location','$scope', function(getDataFactory, $location, $scope) {

  var self = this;
  self.toDisplay = 'books'; // to display books by default
  self.toBeDisplayedArray = [];

  var getBooks = function(){ // to store all the books
    self.toBeDisplayedArray = [];
    self.toBeDisplayedArray = getDataFactory.allBooks;
    }

  var getCharacters = function() {// to store all the characters
    self.toBeDisplayedArray = [];
    self.toBeDisplayedArray = getDataFactory.allCharacters;
    }

  var getHouses = function () { // to store all the houses
    self.toBeDisplayedArray = [];
    self.toBeDisplayedArray = getDataFactory.allHouses;
    }

  getBooks(); //show all books by default;

  self.search = ""; //variable for search input

  self.chooseView = function(toDisplay){ // function to choose what to display when user selects the type of view
      self.search = "";
      self.toDisplay = toDisplay;
      if(toDisplay === 'books'){
        getBooks();
      }
      if(toDisplay === 'characters'){
        getCharacters();
      }
      if(toDisplay === 'houses'){
        getHouses();
      }
  }

  self.goToBook= function(url){ // function to go to specific character called from show-charcters.html
    var bookId = url.match(/(\d+)/)[0]; // fetch the character id
    $location.path('/book/' + bookId); // go to specific page
  }

  self.goToChar = function(url){ // function to go to specific character called from show-charcters.html
    var charId = url.match(/(\d+)/)[0]; // fetch the character id
    $location.path('/character/' + charId); // go to specific page
  }

  self.goToHouse = function(url){ // function to go to specific house called from show-houses.html
    var houseId = url.match(/(\d+)/)[0]; // fetch the house id
    $location.path('/house/' + houseId); // go to specific page
  }

/*to implement sorting filter*/
  self.propertyName = 'name';
  self.reverse = false;
  self.sortBy = function(props){
    self.reverse = (self.propertyName === props) ? !self.reverse : true;
    self.propertyName = props;
  }

/*to display limited data on each iteration*/
  var limitStep = 199;
  self.limit = limitStep;
  self.incrementLimit = function() {
    self.limit += limitStep;
  };

}]);
