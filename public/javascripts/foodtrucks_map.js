$(function() {
  
  google.maps.visualRefresh = true;
  var mapOptions = {
    center: new google.maps.LatLng(37.7833,-122.4167),// SF location
    zoom: 12,
    streetViewControl: false,
  };

  // create and add google map to DOM
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  // get foodtruck data and use clustering function to process it
  var foodtrucks = $.getJSON(
    "http://data.sfgov.org/resource/rqzj-sfat.json", {
      $where: "status='APPROVED' AND latitude IS NOT NULL AND longitude IS NOT NULL",
      $select: "objectid,applicant,facilitytype,address,fooditems,location,schedule"
    },
    function(data) {
      clusterer(data);
    });

  // loops through each food truck, adds it to the DOM in the form of a marker, and assigns it an event listener for clicking
  function clusterer(foodtrucks) {
    var marker;
    var marker_array = [];
    var lat;
    var lng;
    var latLng;
    
    for (var i = 0; i < foodtrucks.length; i++) {
      lat = foodtrucks[i].location.latitude;
      lng = foodtrucks[i].location.longitude;
      latLng = new google.maps.LatLng(lat, lng);
      marker = new google.maps.Marker({
        'objectid': foodtrucks[i].objectid,
        'address': foodtrucks[i].address,
        'position': latLng,
        'applicant': foodtrucks[i].applicant,
        'facilitytype': foodtrucks[i].facilitytype,
        'fooditems': foodtrucks[i].fooditems,
        'icon': 'images/marker-1.png',

      });

      // When click on the marker, the information window will open.
      google.maps.event.addListener(marker, 'click', function() {
        console.log(this.fooditems);
        this.fooditems = this.fooditems.replace(/:/g, ",").split(',').splice(0,12).join(',');

        // info window
        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        var contentString = 
          '<div class="info-wrapper" id="objectid'+ this.objectid +'">' +
            '<div class="foodtruck-info">' +
              '<div class="foodtruck-applicant" >'+ this.applicant +'</div>' +
              '<div class="foodtruck-details"><span style="color:#6699FF; font-weight:bold;">TYPE: </span>' + this.facilitytype +'</div>' +
              '<div class="foodtruck-details"><span style="color:#6699FF; font-weight:bold;">FOOD: </span></br>'+ this.fooditems +'</div>' +
              '<div class="foodtruck-details"><span style="color:#6699FF; font-weight:bold;">ADDRESS: </span></br><address>'+ this.address +'</address></div>' +
            '</div>' +
          '</div>';
        
        infowindow.setContent(contentString);
        infowindow.open(map, this);
      });

      marker_array.push(marker);
    }


    // make clusters
    var markerCluster = new MarkerClusterer(map, marker_array, {
      minimumClusterSize: 2,
      averageCenter: true,
    });

    // get total number of food trucks
    var getTotalTrucks = function(total) {
      $('#foodtrucks-number').text(total);
    };
    getTotalTrucks(foodtrucks.length);

  };

});