// variables for article search 

var search;
var records;
var startYear;
var endYear;

apiKey = A768OhDdauhFia1APJkDhiFKt8uN9zjs;
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=" + apiKey;


$.ajax({
    url: queryURL,
    method: "GET"
  })
 .then(function(response) {
     
      console.log(response);

    });