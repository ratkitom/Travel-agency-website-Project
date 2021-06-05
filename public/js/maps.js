let platform =  new H.service.Platform({
    'apikey':'nv1xcMRmtPnItPtrIYV1RmD-qHN0HB98fZprhu8NR_g'
  });




// Instantiate (and display) a map object:





function landmarkGeocode() {

    let searched = document.querySelector("h1").textContent;

    let geocoder = platform.getSearchService(),
        landmarkGeocodingParameters = {
          q: searched,
          at: '0,0',
          limit: 1
        };
  
    geocoder.discover(
      landmarkGeocodingParameters,
      showMap,
      (e)=>{

        console.log(e)

      }
    );
  }



function showMap(result){


    let location = result.items;

     
     
    let defaultLayers = platform.createDefaultLayers();

    let map = new H.Map(
        document.querySelector('.map'),
        defaultLayers.vector.normal.map,
        {
          zoom: 1500,
          center: { lat: 48.8582709489482, lng: 2.294614483405147 }
        });



    addLocationsToMap(location,map);
    
    let ui = H.ui.UI.createDefault(map, defaultLayers);


}


function addLocationsToMap(locations,map){
    var group = new  H.map.Group(),
        i;
  
    // Add a marker for each location found
    for (i = 0;  i < locations.length; i += 1) {
      let location = locations[i];
      marker = new H.map.Marker(location.position);
      marker.label = location.title;
      group.addObject(marker);
    }
  
    group.addEventListener('tap', function (evt) {
      map.setCenter(evt.target.getGeometry());
      openBubble(
         evt.target.getGeometry(), evt.target.label);
    }, false);
  
    // Add the locations group to the map
    map.addObject(group);
    map.getViewModel().setLookAtData({
      bounds: group.getBoundingBox()
    });
    map.setZoom(17);
  }


landmarkGeocode();

