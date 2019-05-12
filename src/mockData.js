function makeMockData(){
    var feed = [];

    for (let i = 0; i < 20; i++) {
        var post = {};

        post.color =  createColor();
        post.time = getRandomDate()
        post.name = getRandomName()
        post.location = getRandLocation();
        post.content = createRandomContent(post.location);
        
        feed.push(post);
    }

    console.log(feed);

    return feed.sort((a,b)=> new Date(a.time) - new Date(b.time))
}

function createColor(){
    var colorHex = rand(0, Math.pow(16,6));;
    return "#"+colorHex.toString(16);
}
function rand(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function getRandomDate(startHour, endHour) {
    var date = new Date();
    var hour = Math.random() * 23;
    date.setHours(hour);
    return date;
  }


var name1 = ["steve","john","bob","George","Zack","Alex"]  
var name2 = ["News","Alerts","Updates","TV","Times"]
function getRandomName(){
    return "@" + getRand(name1) + getRand(name2) + rand(1,99);
}


var location = [
    {
        name: "New York",
        coords: {
            lat: 40.7128,
            lng: -74.0060
        } 
    },{
        name: "California",
        coords: {
            lat: 36.7783,
            lng: -119.4179
        }
    },{
        name: "Florida",
        coords: {
            lat: 27.6648,
            lng: -81.5158
        }
    },{
        name: "Texas",
        coords: {
            lat: 31.9686,
            lng: -99.9018
        }
    },{
        name: "Utah",
        coords: {
            lat: 39.3210,
            lng: -111.0937
        }
    },{
        name: "Nevada",
        coords: {
            lat: 38.8026,
            lng: -116.4194
        }
    },{
        name: "North Carolina",
        coords: {
            lat: 35.7596,
            lng: -79.0193
        }
    },{
        name: "New Jersey",
        coords: {
            lat: 40.0583,
            lng: -74.4057
        }
    },{
        name: "Washington",
        coords: {
            lat: 47.7511,
            lng: -120.7401
        }
    }
];
function getRandLocation(){
    var newLocation = JSON.parse(JSON.stringify(getRand(location)));
    
    newLocation.coords.lat += Math.random() *.1 * Math.pow(-1, rand(1,3))
    newLocation.coords.lng += Math.random() *.1 * Math.pow(-1, rand(1,3))

    return newLocation;
}

var intro = ["Wow,","Can't believe it,","Check out the","Urgent!","News flash!","Alert!"];
var adj = ["big","giant","huge","small","crazy","rediculous","insane"]
var event = ["fire","earthquake","flood","tornado","accident","crash","party"];

function createRandomContent(location){
    return getRand(intro) + " " + getRand(adj) + " " + getRand(event) + " in "  + location.name;
}

function getRand(arr){
    return arr[rand(0, arr.length)];
}

export var mockData = makeMockData();