
// 1. Function to map the array of restaurants

var r

var addMarker = (restaurant) => {
  r = restaurant;
  console.log(restaurant);
  console.log([restaurant.longitude, restaurant.latitude]);
  var marker = L.marker([restaurant.latitude, restaurant.longitude]);
  marker.addTo(map);
};

$(document).ready(function() {
  CLTrestos.forEach(function(restaurant) {addMarker(restaurant)});
  $.ajax(dataset).done(function(data) {
    var parsedData = JSON.parse(data);
    featureGroup = L.geoJson(parsedData, {
      style: myStyle,
      filter: myFilter
    }).addTo(map);

// 2. Function to filter by a certain array, and put these arrays on a map

// first filter: reviews 4 stars or above

var fourStarsAbove = CLTrestos.filter(function(restaurant) {
  return restaurant."review_count" >= 4;
});

// second filter: reviews 2 stars or below

var twoStarsBelow = CLTrestos.filter(function(restaurant) {
  return restaurant."review_count" <= 2;
});

// third filter: restaurant with most reviews in Charlotte

// 3. Create arrays of the different map requests

// 4. Create a button to move from one array of map requests to the next










var dataset = CLTrestos;
// var featureGroup =

//var myStyle = function(feature) {
//  return {};
//};

//var myFilter = function(feature) {
//  return true;
//};



    // quite similar to _.each
    featureGroup.eachLayer(eachFeatureFunction);
  });
});



$('button#my-button').click(function(e) {
  numericField1 = $('#num1').val();
  console.log("numericFieldMin", numericField1);

  numericField2 = $('#num2').val();
  console.log("numericFieldMax", numericField2);

  booleanField = $('#boolean')[0].checked;
  console.log("booleanField", booleanField);

  stringField = $('#string').val();
  console.log("stringField", stringField);  resetMap();

    /* =====================
      Call our plotData function. It should plot all the markers that meet our criteria
    ===================== */
    plotData();
  });

  $('button').text('Map!').click(function() {
    var data = read();
    console.log(data);
    var marker = L.circleMarker(L.latLng(data.coords.split(',')), { radius:data.radius, color:data.col });
    var popup = '<p><strong>'+data.rest+'</strong><br><em>'+data.desc+'</em></p>';
    popup += (data.cash=="true") ? '<p>Cash only. ' : '<p>Credit cards accepted. ';
    popup += (data.reserv=="true") ? 'Takes reservations.</p>' : 'Does not take reservations.</p>';
    marker.bindPopup(popup).addTo(map);
  });
