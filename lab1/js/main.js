//Import map

var map = L.map('map', {
        center: [35.2271, -80.8431],
        zoom: 12
      });
var layerGroup = L.layerGroup().addTo(map);

var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
	      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      	subdomains: 'abcd',
      	minZoom: 0,
      	maxZoom: 20,
      	ext: 'png'
      }).addTo(map);

// first create order for the slides
var currentSlide = 0;

// adding text to #main
var addTitle = (title) => {
  $("#title").text(title)
};
var addText = (text) => {
  $("#main").text(text)
};

// remove "previous" button on slide 0, remove "next" button on slide 3
var buttonChange = () => {
    if (currentSlide == 0) {
      $("#previous").hide()
    } else {
      $("#previous").show()
    };
    if (currentSlide == 3) {
      $("#next").hide()
    } else {
      $("#next").show()
        }
      }

//build the slides
  var buildSlide = (slideObject) => {
       addTitle(slideObject.title)
       addText(slideObject.text)
    };


  buildSlide(currentSlide);
  buttonChange();
      $("#next").click(() => {
        currentSlide = currentSlide + 1;
        buttonChange();
       buildSlide(currentSlide);
      })
      $("#previous").click(() => {
        currentSlide = currentSlide - 1;
        buttonChange();
       buildSlide(currentSlide);
      })

      // create the slides
      var slides = [
        {title: "Welcome to Charlotte Restaurant Insider!",
        text: "CRI is here to give you recommendations on the best and worst restaurants in Charlotte, North Carolina, using Yelp's user-generated data. Click NEXT to continue."},
        {title: "Highest Reviewed Charlotte Restaurants",
        text: "The restaurants appearing on the map are those which have received 4 stars or greater from Yelp users, so they are probably good. ",
      },//pins: showFourStarsAbove()},
        {title: "Lowest Reviewed Charlotte Restaurants",
        text: "The restaurants appearing on the map are those which have received 2 stars or below from Yelp users, so they are probably worth avoiding.",
      },//pins: showTwoStarsBelow()},
        {title: "Charlotte Restaurants Reviewed the Most Times",
        text: "The restaurants appearing on the map are those which have been reviewed by Yelp users over 1000 times, so they are probably well-visited.",
      },//pins: showMoreThanFifteenHundred()},
      ];

      // 1. Function to map the array of restaurants

      var r

      var addMarker = (restaurant) => {
        r = restaurant;
        //console.log(restaurant);
        //console.log([restaurant.longitude, restaurant.latitude]);
        var marker = L.marker([restaurant.latitude, restaurant.longitude]);
        marker.addTo(layerGroup);
      };

      // removing the layers
      //var remove = (marker) => {
      //  map.removeLayer(marker);
      //};

      //CLTrestos.forEach(function(restaurant) {addMarker(restaurant)});

      // 2. Function to filter by a certain array, and put these arrays on a map

      // first filter: reviews 4 stars or above

      var showFourStarsAbove = () => {
      	layerGroup.clearLayers();
      	CLTrestos.filter(restaurant => restaurant.stars >= 4).forEach(function(restaurant) {addMarker(restaurant)});
      };

    //  var showFourStarsAbove = () => {
        //remove();
    //    CLTrestos.forEach(function(restaurant) {addMarker(restaurant)});
    //    console.log(showFourStarsAbove);
        //console.log([restaurant.longitude, restaurant.latitude]);
        //var marker = L.marker([restaurant.latitude, restaurant.longitude]);
    //  };

      // second filter: reviews 2 stars or below

      var showTwoStarsBelow = () => {
       layerGroup.clearLayers();
        CLTrestos.forEach(function(restaurant) {addMarker(restaurant)});
        //console.log(showTwoStarsBelow);
        //console.log([restaurant.longitude, restaurant.latitude]);
      };

      // third filter: restaurant with most reviews in Charlotte

      var showMoreThanFifteenHundred = (restaurant) => {
  //      map.removeLayer(restaurant);
        CLTrestos.filter(restaurant => restaurant.review_count >= 1500).forEach(function(restaurant) {addMarker(restaurant)});
        //console.log(showMoreThanFifteenHundred);
    //    console.log([restaurant.longitude, restaurant.latitude]);
      };

      // define the next button, and what to show on each of the next button pages
      $("#next").click(() => {
        if(currentSlide <3){
          currentSlide = currentSlide +1
        };
        if(currentSlide ==3){
          $("#next").hide()
        };
        if(currentSlide == 0){
        } else if(currentSlide == 1){
          showFourStarsAbove();}
          else if(currentSlide == 2){
            showTwoStarsBelow();}
            else if(currentSlide == 3){
              showMoreThanFifteenHundred();}
      });

      // define the previous button
      $("#previous").click(() => {
        if(currentSlide == 0) {
          $("#previous").hide()
        };
        if(currentSlide >0){
          currentSlide = currentSlide -1
        };
        if(currentSlide == 0){
        } else if(currentSlide == 1){
          showFourStarsAbove.filter(restaurant => restaurant.stars >= 4);}
          else if(currentSlide == 2){
            showTwoStarsBelow.filter(restaurant => restaurant.stars <= 2);}
            else if(currentSlide == 3){
              showMoreThanFifteenHundred();}
      });












//hide the previous button on slide [0]
$("#previous").hide();





// remove title and text when updating slides
var cleanup = () => {
  $('#title').remove()
  $('#text').remove()
}
