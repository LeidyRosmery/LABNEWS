(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
 const Principal = () => {
    const principal = $('<section class="principal">');
    const container= $('<div class="container-fluid ">');
    const row=$("<div class='row noticia'>");
    const divImg1=$("<div class='col-lg-12 col-md-12 col-xs-12 col-sm-12 new'>");
    const img1=$('<img class="new__imgNew" src="assets/img/'+laboratoriaNews.news[0].img+'" alt="">');
    const text1=$('<h3> </h3>');
    principal.append(container)
    container.append(row);
    row.append(divImg1)
    divImg1.append(img1);
    divImg1.append(text1);

    const row2=$('<div class="row noticia">');
    const divImg2=$('<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12 new">');
    const img2=$('<img class="new__imgNew" src="assets/img/'+laboratoriaNews.news[1].img+'">');
    const text2=$('  <h3> </h3>');
    container.append(row2);
    row2.append(divImg2)
    divImg2.append(img2);
    divImg2.append(text2);


    const divImg3=$('<div class="col-lg-3 col-md-3 col-xs-12 col-sm-12 new">');
    const img3=$('<img class="new__imgNew" src="assets/img/'+laboratoriaNews.news[2].img+'" alt="">');
    const text3=$('  <h3> </h3>');

    row2.append(divImg3)
    divImg3.append(img3);
    divImg3.append(text3);

    const divImg4=$('<div class="col-lg-3 col-md-3 col-xs-12 col-sm-12 new" >');
    const img4=$('<img class="new__imgNew" src="assets/img/'+laboratoriaNews.news[3].img+'" alt="">');
    const text4=$('  <h3> </h3>');

    row2.append(divImg4)
    divImg4.append(img4);
    divImg4.append(text4);

   return principal;
 }

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
    root.append(Principal());
    //root.append(Dashboard());
};

const laboratoriaNews = {
  news : null,
  idNew : null,
  category:null ,
  idCategory:null
}


$( _ => {

  getJSON('/api/news/', (err, json) => {
  laboratoriaNews.news = json;
  console.log(laboratoriaNews.news);
  const root = $('.root');
  render(root);
  });

  getJSON('/api/categories/', (err, json) => {
  laboratoriaNews.category = json;
  console.log(  laboratoriaNews.category);
  });

  getJSON('/api/categories/'+laboratoriaNews.idCategory, (err, json) => {
  laboratoriaNews.idCategory = json;
  console.log(laboratoriaNews.idCategories);
  });

  getJSON('/api/news/' + laboratoriaNews.idNew, (err, json) => {
    laboratoriaNews.idNew = json;
    console.log(laboratoriaNews.idNew);
  });

});

},{}]},{},[1])