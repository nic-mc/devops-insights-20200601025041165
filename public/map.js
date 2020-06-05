function initMap(){
    //map options
    var options = {
      zoom: 8,
      center:{lat:-37.78333, lng:175.28333}
    }
    localStorage.removeItem('weather')
    var marker;
    //new map
    var map = new google.maps.Map(document.getElementById('map'), options)
    //addMarker({coords:options.center})
    //listen for click on map
    google.maps.event.addListener(map, 'click', function(event){
      //marker.removeItem(1)

      addMarker({coords:event.latLng}); 
      var lat = event.latLng.lat();
      var lon = event.latLng.lng();
      const weather = 'https://api.openweathermap.org/data/2.5/weather?appid=6b7b471967dd0851d0010cdecf28f829&units=metric&lat='+lat+'&lon='+lon;
      // localStorage.setItem('weather',JSON.parse(''));

      const request = new XMLHttpRequest();

      request.open('GET', weather);

      request.send();

      console.log(request.responseText);
      
      request.onreadystatechange = (e) => {
        window.localStorage.setItem('weather', request.responseText);

      }
      
    });

    //add marker function
    function addMarker(props){
      //add marker
      
      if (!marker || !marker.setPosition)
      {
        marker = new google.maps.Marker({
          position:props.coords,
          map:map
        });
      }else
      marker.setPosition(props.coords);
      
    }


  }