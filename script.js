function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function change() {
    var fgimages = ['images/Icon-awesome-fire.svg', 'images/Icon-awesome-mountain.svg', 'images/Icon-ionic-ios-thermometer.svg', 
    'images/Icon-metro-directions-bike.svg'];
    var bgimages = ['images/Rectangle-136.svg', 'images/Rectangle-137.svg', 'images/Rectangle-207.svg'];
    document.getElementById('bgImg').src = bgimages[getRandomInt(3)];
    document.getElementById('fgImg').src = fgimages[getRandomInt(3)];
}