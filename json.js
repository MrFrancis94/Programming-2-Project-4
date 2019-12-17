$(() => {

    // Submit a form aka search request
    $('#search-form').submit((e) => {
        e.preventDefault();
        const artist = $('#artist').val();
        const title = $('#title').val();
        getRequest(artist, title);

    });

    function getRequest(artist, title) {
        const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
      
        

        $.getJSON(url, (response) => {
            showResults(response);
        });
    }

    function showResults(lyrics) {
        $('#results').append(lyrics.lyrics);
    }
});


function getWeather(latitude, longtitude) {
  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?q=Helsingborg',
    data: {
      lat: latitude,
      lon: longtitude,
      units: 'metric',
      apikey: '5cd9141e5e460c9f3d40e74a3d7bcafc'
    },
    success: data => {
    }
  })
}

getWeather(56.046880, 12.695250);