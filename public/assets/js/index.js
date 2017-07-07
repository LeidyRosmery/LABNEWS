(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// 'use strict';
// const Header = () => {
//   const header = $('<header class="header"></header>');
//   const row = $('<div class="row"></div>');
//   const topHeader = $('<div class="col-xs-12 header__top"></div>');
//   const logo = $('<div id="logo" class="col-sm-1 text-center"><a href="index.html"><img width="35" src="assets/img/pinterest-logo.png" alt="Pinterest" title="Pinterest" /></a></div>');
//   const search = $('<div class="col-sm-9 header__top--buscar"><i class="glyphicon glyphicon-search"></i><input type="text" placeholder="Buscar"></div>');
//   const icons = $('<div class="col-sm-2 text-center"><img width="34" src="assets/img/icon-arrow.png" /><img width="34" src="assets/img/icon-profile.png" /><img width="34" src="assets/img/message.png" /></div>');
//   const belowHeader = $('<div class="col-xs-12 header__below"><div class ="col-xs-5"><i class="glyphicon glyphicon-share header__below--icon"></i></div><div class="col-xs-2"></div><div class="col-xs-5"><button class="header__below--seguir">Seguir tablero</button></div></div>');
//
//   topHeader.append(logo);
//   topHeader.append(search);
//   topHeader.append(icons);
//   row.append(topHeader);
//   row.append(belowHeader);
//   header.append(row);
//
//   return header;
// }

'use strict';

const getJSON = (url, cb) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
        if (xhr.status !== 200) {
            return cb(new Error('Error loading JSON from ' + url + '(' + xhr.status + ')'));
        }
        cb(null, xhr.response);
    });
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.send();
};

'use strict';

const render = (root) => {
    root.empty();
    root.append(Header());
    root.append(Dashboard());
};

const state = {
  news : null,
  idNew : null,
  category:null ,
  idCategory:null
};


$(_ => {

  getJSON('http://localhost:3000/api/news/', (err, json) => {
    if (err) {
        return alert(err.message);
    }
    state.news = json;
    console.log(state.news[0].title);
    console.log(state.news[0].img);
    const root = $('.root');
  //  render(root);
  });

});

},{}]},{},[1])
