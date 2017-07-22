/*factory to fetch and store data from API*/
myApp.factory('getDataFactory',['$http', function ($http) {
  var allData = {}
  allData.allCharacters = [];
  allData.allBooks = [];
  allData.allHouses = [];

/*to get all books*/
  var getBooks = function() {
    return $http({
      method: 'GET',
      url: 'https://anapioficeandfire.com/api/books?page=1&pageSize=12'
    }).then(function(response){
      return response.data;
    })
  };

/*function called to store all the fetched books in an array*/
  getBooks().then(function(response){
    response.forEach(function(book){
      allData.allBooks.push(book);
    })
  });

/*to get single book*/
  allData.getSingleBook = function(bookId) {
    return $http({
      method: 'GET',
      url: 'https://anapioficeandfire.com/api/books/' + bookId
    });
  };

/*to get all characters*/
  var getCharacters = function(pageId) {
    return $http({
      method: 'GET',
      url: 'https://www.anapioficeandfire.com/api/characters?page=' + pageId + '&pageSize=50'
    }).then(function(response){
      return response.data;
    })
  };

/*function called 43 times because api limits fetching to 50 objects per requests, so to fecth all objects made 43 requests*/
  for(var i=1; i<44; i++){
        getCharacters(i).then(function(response){
            response.forEach(function(character){
              allData.allCharacters.push(character);
            })
          });
    };

/*to get single character*/
  allData.getSingleCharacter = function(charId){
    return $http({
        method: 'GET',
        url: 'https://www.anapioficeandfire.com/api/characters/' + charId
    });
  };

/*to get all books*/
  var getHouses = function(pageId){
    return $http({
      method: 'GET',
      url: 'https://www.anapioficeandfire.com/api/houses?page=' + pageId + '&pageSize=50'
    }).then(function(response) {
      return response.data;
    });
  };

/*function called 9 times because api limits fetching to 50 objects per requests, so to fecth all objects made 9 requests*/
  for(var i=1; i<10; i++){
        getHouses(i).then(function(response){
            response.forEach(function(character){
              allData.allHouses.push(character);
            })
          });
    };

/*to get single house*/
  allData.getSingleHouse = function(houseId){
    return $http({
      method: 'GET',
      url: 'https://www.anapioficeandfire.com/api/houses/' + houseId
    });
  };

  return allData;
}]);
