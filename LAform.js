var features = [];

var firstEl = document.querySelector('#first')
var secondEl = document.querySelector('#second')
var thirdEl = document.querySelector('#third')
var buttonEl = document.querySelector('button')
var outputEl = document.querySelector('#output')

// By default querySelector chooses first selector match. querySelectorAll

buttonEl.addEventListener('click', function callback(event){
  event.preventDefault();
  features.push({
      "type": "Feature",
      "properties": {
        "marker-color": "#ccff66",
        "marker-size": "small",
        "marker-symbol": "",
        "name": ,
        "date": second,
        "note": third,
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -478.4564298391342,
          34.00149616927783
        ]
      }
    })
  outputEl.value = JSON.stringify(features, 0, 2)
  first.value = ''
  second.value = ''
  first.focus ()
})
