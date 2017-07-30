/**Directive to resolve each link within a category and display it's clickable name
  *for example: if you go to character: 'character/823' Petyr Baelish you will see various links in raw data like
  *https://www.anapioficeandfire.com/api/houses/10 for house, https://www.anapioficeandfire.com/api/books/8 for books
  *what this directive does is take out the id from url and checks if its from house or book or character and then
  *call the respective factory method with this id to get the detailed array as a response
  **/

myApp.directive('showLink',['getDataFactory',function(getDataFactory){
  return{
    scope: {
      prop: "@" // takes an expression containing url as attribute value
    },
    link: function(scope, elem, attr){

      url = attr.prop; //stores the url

      if(url.indexOf("/houses/") !== -1){ // checks if it is a house url
        var idx = url.indexOf("/houses/");
        var id = url.substring(idx + "/houses/".length,url.length); // extracts id from url

        getDataFactory.getSingleHouse(id).then(function(response){
          elem.append("<a class='resLink' href='#!house/" + id+ "'>" + response.data.name + "</a>");
        });
      }
      if(url.indexOf("/characters/") !== -1){ // checks if it is a character url
        var idx = url.indexOf("/characters/");
        var id = url.substring(idx + "/characters/".length,url.length);// extracts id from url

        getDataFactory.getSingleCharacter(id).then(function(response){ //calls factory method with id to get data
          elem.append("<a class='resLink' href='#!character/" + id+ "'>" + response.data.name + "</a>"); // appends the name with link to it's detailed page
        });
      }
      if(url.indexOf("/books/") !== -1){ // checks if it is a book url
        var idx = url.indexOf("/books/");
        var id = url.substring(idx + "/books/".length,url.length);// extracts id from url

        getDataFactory.getSingleBook(id).then(function(response){
          elem.append("<a class='resLink' href='#!book/" + id+ "'>" + response.data.name + "</a>");
        });
      }
    }
  };
}]);
