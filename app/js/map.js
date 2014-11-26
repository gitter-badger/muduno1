	var mapOptions = {
		zoom: 13,
		center: new google.maps.LatLng(51.511059,-0.117148),
	};

	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	var marker = new google.maps.Marker({
		position: map.getCenter(),
	});

	var markerKingsCross = new google.maps.Marker({
		position: new google.maps.LatLng(51.5290965,-0.1261179),
		map: map,
		icon: "http://www.googlemapsmarkers.com/v1/90ccde/",
		title: "Kings Cross"
	});

	var markerCoventGarden = new google.maps.Marker({
		position: new google.maps.LatLng(51.5117048,-0.1250829),
		map: map,
		icon: "http://www.googlemapsmarkers.com/v1/E66D00/",
		title: "Covent Garden"
	});

	var markerEmbankment = new google.maps.Marker({
		position: new google.maps.LatLng(51.50706,-0.12264),
		map: map,
		icon: "http://www.googlemapsmarkers.com/v1/963933/",
		title: "Embankment"
	});

	var markerBarbican = new google.maps.Marker({
		position: new google.maps.LatLng(51.5202886,-0.0941213),
		map: map,
		icon: "http://www.googlemapsmarkers.com/v1/A6A6A6/",
		title: "Barbican"
	});

	var markerLiverpoolStreet = new google.maps.Marker({
		position: new google.maps.LatLng(51.518752,-0.081437),
		map: map,
		icon: "http://www.googlemapsmarkers.com/v1/5F4A7C/",
		title: "Liverpool Street"
	});

	var markerOxfordCircus = new google.maps.Marker({
		position: new google.maps.LatLng(51.515212,-0.141855),
		map: map,
		icon: "http://www.googlemapsmarkers.com/v1/83c47f/",
		title: "OxfordCircus"
	});

//-------------- When clicked on Marker it centers map ------------------
	google.maps.event.addListener(markerKingsCross, 'click', function() {
		map.setZoom(15);
		map.setCenter(markerKingsCross.getPosition());
	});

	google.maps.event.addListener(markerCoventGarden, 'click', function() {
		map.setZoom(15);
		map.setCenter(markerCoventGarden.getPosition());
	});

	google.maps.event.addListener(markerEmbankment, 'click', function() {
		map.setZoom(15);
		map.setCenter(markerEmbankment.getPosition());
	});

	google.maps.event.addListener(markerBarbican, 'click', function() {
		map.setZoom(15);
		map.setCenter(markerBarbican.getPosition());
	});

	google.maps.event.addListener(markerLiverpoolStreet, 'click', function() {
		map.setZoom(15);
		map.setCenter(markerLiverpoolStreet.getPosition());
	});

	google.maps.event.addListener(markerOxfordCircus, 'click', function() {
		map.setZoom(15);
		map.setCenter(markerOxfordCircus.getPosition());
	});

//------------- Start the initialize function when window is loaded -----
	google.maps.event.addDomListener( window, 'load', function () {
		google.maps.event.trigger(map, 'resize'); 
	});

//------------- When locationtab is clicked, map is resized and centered ---
    $(document).ready(function() {
        $('.locationstab').click(function() {
            google.maps.event.trigger(map, 'resize'); 
            console.log("You have clicked the locationstab");
            map.panTo(marker.getPosition()); 
        });
        $('.headloc1').click(function() {
            console.log("bello,world do I exist thoug?"); 
            google.maps.event.trigger(map, 'resize'); 
            map.panTo(markerKingsCross.getPosition());
            map.setZoom(15);
        });
    });



 	// $(document).ready(function() {
  //       $('.headloc1').click(function() {
  //           console.log("bello,world do I exist thoug?"); 
  //           google.maps.event.trigger(map, 'resize'); 
  //           map.panTo(markerKingsCross.getPosition());
  //           map.setZoom(15);
  //       });
  //   });

 	// $(document).ready(function() {
  //       $('.headloc2').click(function() {
  //           console.log("bello, world do I exist though?") 
  //           google.maps.event.trigger(map, 'resize'); 
  //           map.panTo(markerKingsCross.getPosition());
  //           map.setZoom(15);
  //       });
  //   });