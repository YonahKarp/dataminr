function makeMockData(){
    return {
        feed: createFeed(),
        alerts: createAlerts()
    }
}


function createFeed(){
    var feed = [];

    for (let i = 0; i < 25; i++) {
        var post = {};

        // post.color =  createColor();
        post.type = getRandomType();
        post.time = getRandomDate()
        post.name = getRandomName()
        post.location = getRandLocation();
        post.content = createRandomContent(post.location);
        
        feed.push(post);
    }

    return feed.sort((a,b)=> new Date(a.time) - new Date(b.time))
}


//create mock feed
function createColor(){
    var colorHex = rand(0, Math.pow(16,6));;
    return "#"+colorHex.toString(16);
}

var types = ["MN", "LN", "ALT"]
function getRandomType(){
    return getRand(types);
}

function getRandomDate(startHour, endHour) {
    var date = new Date();
    var hour = Math.random() * 23;
    date.setHours(hour);
    return date;
  }


var name1 = ["steve","john","bob","George","Zack","Alex"]  
var name2 = ["Smith","Jones","Davis","Wiliams","News","Alerts","Updates","TV","Times"]
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
        name: "Iowa",
        coords: {
            lat: 41.8780,
            lng: -93.0977
        }
    },{
        name: "North Carolina",
        coords: {
            lat: 35.7596,
            lng: -79.0193
        }
    },{
        name: "Kentucky",
        coords: {
            lat: 37.8393,
            lng: -84.2700
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
    
    newLocation.coords.lat += Math.random() *.6 * Math.pow(-1, rand(1,3))
    newLocation.coords.lng += Math.random() *.6 * Math.pow(-1, rand(1,3))

    return newLocation;
}

var intro = ["Wow,","Can't believe it,","Check out the","Urgent!","News flash!","Alert!"];
var adj = ["big","giant","huge","small","crazy","rediculous","insane"]
var event = ["fire","earthquake","flood","tornado","accident","crash","party"];
var punctuation = [".", "!", "!!"]
var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

function createRandomContent(location){
    return getRand(intro) + " " + getRand(adj) + " " + getRand(event) + " in "  + location.name + getRand(punctuation) + " " + lorem.split(" ").slice(0,rand(10,36)).join(" ");
}


//create alerts
function createAlerts(){
    var alerts = [];    

    var today = new Date();
    var msPerDay = 86400000;


    alerts.push({
        type: "MN",
        time: new Date(today - 2*msPerDay),
        name: "@NYTimes",
        location: location[0],
        image: "https://media.zenfs.com/en-US/homerun/usa_today_news_641/d69f7bba918efe68b4a072f3c5d05e2a",
        content: "Police: Explosion and fire at Virginia gas station leaves three people dead" + lorem.split(" ").slice(0,rand(10,36)).join(" ")
    });

    

    alerts.push({
        type: "CTR",
        time: new Date(today - 3*msPerDay),
        name: "@Reuters",
        location: location[2],
        content: "Iran commander calls U.S. military in Gulf a target not a threat: ISNA" + lorem.split(" ").slice(0,rand(10,36)).join(" ")
    });

    alerts.push({
        type: "CTR",
        time: new Date(today - 4*msPerDay),
        name: "@USAToday",
        location: location[2],
        image: "https://s.yimg.com/uu/api/res/1.2/kzb3DT_zEqPoLtw13SaVLg--~B/Zmk9c3RyaW07aD0xMjM7cHlvZmY9MDtxPTgwO3c9MjIwO3NtPTE7YXBwaWQ9eXRhY2h5b24-/http://media.zenfs.com/en_us/News/afp.com/9c59bd9990c8fd33e2f7cbfb433ad2fbebd5c3f8.jpg.cf.jpg",
        content: "Venezuela's Juan Guaidó rallies his supporters as President Maduro clamps down" + lorem.split(" ").slice(0,rand(10,36)).join(" ")
    });

    alerts.push({
        type: "MKT",
        time: new Date(today - 5*msPerDay),
        name: "@Reuters",
        location: location[2],
        content: "Graduation gifts: Why stocks are better than straight cash" + lorem.split(" ").slice(0,rand(10,36)).join(" ")
    });
    
    return alerts

}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function getRand(arr){
    return arr[rand(0, arr.length)];
}

export var mockData = makeMockData();