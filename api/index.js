
var firebase = require("firebase");

const config = {
    apiKey: "AIzaSyAU1lbaeLMZdpQ9Zpw8BkJaJ66JkM6dUiQ",
    authDomain: "lab-news-a6a5b.firebaseapp.com",
    databaseURL: "https://lab-news-a6a5b.firebaseio.com",
    projectId: "lab-news-a6a5b",
    storageBucket: "lab-news-a6a5b.appspot.com",
    messagingSenderId: "74350256351"
};

firebase.initializeApp(config);


var loadNews = (id) => {
    let url = '/news/';
    url += (id != undefined) ? id : '';  
    return firebase.database().ref(url).once('value').then(function(snapshot) {
    return snapshot.val();
    });
};

var loadCategories = (id) => {
    let url = '/categories/'; 
    url += (id != undefined) ? id : '';  
    return firebase.database().ref(url).once('value').then(function(snapshot) {
        return snapshot.val();
    });
};

module.exports = {
    news : loadNews,
    categories : loadCategories
};
