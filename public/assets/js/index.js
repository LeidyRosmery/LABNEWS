(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
 const Principal = () => {
    const principal = $('<section class="principal">');
    const container= $('<div class="container-fluid ">');
    const row=$("<div class='row noticia'>");
    const divImg1=$("<div class='col-lg-12 col-md-12 col-xs-12 col-sm-12 new'>");
    const img1=$('<img class="new__imgNewLG" src="assets/img/'+laboratoriaNews.news[0].img+'" alt="">');
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
    const divText2=$('<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12 new__textLG">');
    container.append(row2);
    row2.append(divImg2)
    divImg2.append(img2);
    divImg2.append(divText2);
    divText2.append(text2);


    const divImg3=$('<div class="col-lg-3 col-md-3 col-xs-12 col-sm-12 new">');
    const img3=$('<img class="new__imgNew" src="assets/img/'+laboratoriaNews.news[2].img+'" alt="">');
    const text3=$('  <h3> </h3>');
    const divText3=$('<div class="col-lg-3 col-md-3 col-xs-12 col-sm-12 new__textLG">');

    row2.append(divImg3)
    divImg3.append(img3);
    divImg3.append(divText3);
    divText3.append(text3);

    const divImg4=$('<div class="col-lg-3 col-md-3 col-xs-12 col-sm-12 new" >');
    const img4=$('<img class="new__imgNew" src="assets/img/'+laboratoriaNews.news[3].img+'" alt="">');
    const text4=$('  <h3> </h3>');
    const divText4=$('<div class="col-lg-3 col-md-3 col-xs-12 col-sm-12 new__textLG" >');

    row2.append(divImg4)
    divImg4.append(img4);

    divImg4.append(divText4);
      divText4.append(text4);

   return principal;
 }

'use strict';
 const Opinion = () => {
   const opinion = $('<section class="educacion">');
   const tituloSeccion=$('  <h3> educacion</h3>');
   const container= $('<div class="container-fluid ">');
   const row=$("<div class='row noticia'>");
opinion.append(tituloSeccion);
   opinion.append(container)

   container.append(row);

   const col1=$('<div class="col-lg-3  col-xl-3  new ">');
   const img=$('<img class="new__imgNew new__imgNew--small"  src="assets/img/'+laboratoriaNews.news[24].img+'" alt="">');
   const texto=$('<h3> </h3>');
   row.append(col1);
   col1.append(img);
   col1.append(texto);
   const col2=$('<div class="col-lg-3  col-xl-3  new ">');
   const img2=$('<img class="new__imgNew new__imgNew--small"  src="assets/img/'+laboratoriaNews.news[25].img+'" alt="">');
   const texto2=$('<h3> </h3>');
   row.append(col2);
   col2.append(img2);
   col2.append(texto2);
   const col3=$('<div class="col-lg-3  col-xl-3  new ">');
   const img3=$('<img class="new__imgNew new__imgNew--small"  src="assets/img/'+laboratoriaNews.news[26].img+'" alt="">');
   const texto3=$('<h3> </h3>');
   row.append(col3);
   col3.append(img3);
   col3.append(texto3);
   const col4=$('<div class="col-lg-3  col-xl-3  new ">');
   const img4=$('<img class="new__imgNew new__imgNew--small"  src="assets/img/'+laboratoriaNews.news[27].img+'" alt="">');
   const texto4=$('<h3> </h3>');
   row.append(col4);
   col4.append(img4);
   col4.append(texto4);




   return opinion;
 }

'use strict';
 const Educacion = () => {
   const educacion = $('<section class="educacion">');
   const tituloSeccion=$('  <h3> educacion</h3>');
   const container= $('<div class="container-fluid ">');
   const row=$("<div class='row noticia'>");
educacion.append(tituloSeccion);
   educacion.append(container)

   container.append(row);

   const col1=$('<div class="col-lg-6  col-md-6 col-sm-12 col-xs-12 new">');
   row.append(col1);

   const subCol1=$('<div class="col-lg-6  col-md-6 col-sm-12 col-xs-12 new new__small">');
   const img1=$('<img class="new__imgNew new__imgNew--small" src="assets/img/'+laboratoriaNews.news[19].img+'" alt="">');
   const texto1=$('<h3> </h3>');
   col1.append(subCol1);
   subCol1.append(img1);
   subCol1.append(texto1);

   const subCol2=$('<div class="col-lg-6  col-md-6 col-sm-12 col-xs-12 new new__small">');
   const img2=$('<img class="new__imgNew new__imgNew--small" src="assets/img/'+laboratoriaNews.news[20].img+'" alt="">');
   const texto2=$('<h3> </h3>');
   col1.append(subCol2);
   subCol2.append(img2);
   subCol2.append(texto2);

   const subCol3=$('  <div class="col-lg-12  col-md-12 col-sm-12 col-xs-12  new new__smallXS">');
   const img3=$('<img class="new__imgNewXS new__imgNew--small" src="assets/img/'+laboratoriaNews.news[23].img+'" alt="">');
   const texto3=$('<h3> </h3>');
   col1.append(subCol3);
   subCol3.append(img3);
   subCol3.append(texto3);



   const col2=$('<div class="col-lg-6  col-md-6 col-sm-12 col-xs-12 new">');
   row.append(col2);
   const subCol4=$('  <div class="col-lg-6  col-md-6 col-sm-12 col-xs-12 new new__small">');
   const img4=$('<img class="new__imgNew new__imgNew--small" src="assets/img/'+laboratoriaNews.news[21].img+'" alt="">');
   const texto4=$('<h3> </h3>');
   col2.append(subCol4);
   subCol4.append(img4);
   subCol4.append(texto4);

   const subCol5=$('  <div class="col-lg-6  col-md-6 col-sm-12 col-xs-12 new new__small">');
   const img5=$(' <img class="new__imgNew new__imgNew--small" src="assets/img/'+laboratoriaNews.news[22].img+'" alt="">');
   const texto5=$('<h3> </h3>');
   col2.append(subCol5);
   subCol5.append(img5);
   subCol5.append(texto5);

   const subCol6=$('<div class="col-lg-12  col-md-12  col-sm-12 col-xs-12 new new__smallXS">');
   const img6=$('<img class="new__imgNewXS new__imgNew--small" src="assets/img/'+laboratoriaNews.news[24].img+'" alt="">');
   const texto6=$('<h3> </h3>');
   col2.append(subCol6);
   subCol6.append(img6);
   subCol6.append(texto6);



return educacion;

 }

'use strict';
 const Tecnologia = () => {
   const tecnologia = $('<section class="tecnologia">');
   const tituloSeccion=$('  <h3> Tecnologia</h3>');
   const container= $('<div class="container-fluid ">');
   const row=$("<div class='row noticia'>");
tecnologia.append(tituloSeccion);
   tecnologia.append(container)

   container.append(row);

   const col1=$('<div class="col-lg-6  col-xmd-6 col-sm-12 col-xs-12 new">');
   const img=$('<img class="new__imgNew" src="assets/img/'+laboratoriaNews.news[14].img+'" alt="">');
   const texto=$('<h3> </h3>');
   row.append(col1);
   col1.append(img);
   col1.append(texto);

    const col2=$('<div class="col-lg-6 col-xl-6 col-sm-12 col-xs-12 new ">');
    row.append(col2);

    const subCol1=$('<div class="col-lg-6  col-md-6  hidden-xs hidden-sm new new__small">');
    const img1=$('<img class="new__imgNew new__imgNew--small" src="assets/img/'+laboratoriaNews.news[15].img+'" alt="">');
    const texto1=$('<h3> </h3>');
    col2.append(subCol1);
    subCol1.append(img1);
    subCol1.append(texto1);

    const subCol2=$('<div class="col-lg-6  col-md-6 hidden-xs hidden-sm new new__small">');
    const img2=$('<img class="new__imgNew new__imgNew--small" src="assets/img/'+laboratoriaNews.news[16].img+'" alt="">');
    const text2=$('<h3> </h3>');
    col2.append(subCol2);
    subCol2.append(img2);
    subCol2.append(text2);

    const subCol3=$('<div class="col-lg-12  col-md-12 col-sm-12 col-xs-12  new new__smallXS">');
    const img3=$('<img class="new__imgNewXS new__imgNew--small" src="assets/img/'+laboratoriaNews.news[17].img+'" alt="">');
    const text3=$('<h3> </h3>');
    col2.append(subCol3);
    subCol3.append(img3);
    subCol3.append(text3);

    const subCol4=$('<div class="col-lg-12  col-md-12 col-sm-12 col-xs-12  new new__smallXS">');
    const img4=$('<img class="new__imgNewXS new__imgNew--small" src="assets/img/'+laboratoriaNews.news[18].img+'" alt="">');
    const text4=$('<h3> </h3>');
    col2.append(subCol4);
    subCol4.append(img4);
    subCol4.append(text4);

    return tecnologia;

 }

'use strict';
 const Mundo = () => {
    const mundo = $('<section class="mundo">');
    const tituloSeccion=$('  <h3> mundo</h3>');
    const container= $('<div class="container-fluid ">');
    const row1=$("<div class='row noticia'>");

    const col1=$('<div class="col-lg-3  col-md-3  col-xs-12 col-sm-12 new">');
    const img15=$('<img class="new__imgNew" src="assets/img/'+laboratoriaNews.news[4].img+'" alt="">');
    const text15=$('<h3> </h3>');
  mundo.append(tituloSeccion);
    mundo.append(container)

    container.append(row1);
    row1.append(col1)
    col1.append(img15);
    col1.append(text15);

    const col2=$('<div class="col-lg-6 col-md-6  col-sm-12 col-xs-12  new ">');

    const subCol1=$('<div class="col-lg-6  col-md-6 col-sm-12 col-xs-12 new new__small">');
    const img1=$('<img class="new__imgNew new__imgNew--small" src="assets/img/'+laboratoriaNews.news[5].img+'" alt="">');
    const text1=$('<h3> </h3>');
    row1.append(col2)
    col2.append(subCol1);
    subCol1.append(img1);
    subCol1.append(text1);


    const subCol2=$('<div class="col-lg-6  col-xl-6 hidden-xs hidden-sm new new new__small">');
    const img2=$('<img class="new__imgNew new__imgNew--small" src="assets/img/'+laboratoriaNews.news[6].img+'" alt="">');
    const text2=$('<h3> </h3>');
    col2.append(subCol2);
    subCol2.append(img2);
    subCol2.append(text2);

     const subCol3=$('<div class="col-lg-12  col-xl-12  col-sm-12 col-xs-12 new new__smallXS">');
    const img3=$('<img class="new__imgNewXS new__imgNew--small" src="assets/img/'+laboratoriaNews.news[8].img+'" alt="">');
    const text3=$('<h3> </h3>');
    col2.append(subCol3);
    subCol3.append(img3);
    subCol3.append(text3);

    const subCol4=$(' <div class="col-lg-12  col-xl-12  col-sm-12 col-xs-12 new new__smallXS">');
    const img4=$('<img class="new__imgNewXS new__imgNew--small" src="assets/img/'+laboratoriaNews.news[9].img+'" alt="">');
    const text4=$('<h3> </h3>');
    col2.append(subCol4);
    subCol4.append(img4);
    subCol4.append(text4);


    const col3=$('<div class="col-lg-3 col-md-3  hidden-xs hidden-sm new">');

    const img5=$('<img class="new__imgNew"  src="assets/img/'+laboratoriaNews.news[7].img+'" alt="">');
    const text5=$('<h3> </h3>');
    row1.append(col3)
    col3.append(img5);
    col3.append(text5);



    const row2=$('<div class="row hidden-xs hidden-sm">');

    container.append(row2);
    const col4=$(' <div class="col-lg-3 new new__small">');
    const img7=$('<img class="new__imgNew" src="assets/img/'+laboratoriaNews.news[10].img+'" alt="">');
    const text7=$('<h3> </h3>');
    row2.append(col4)
    col4.append(img7);
    col4.append(text7);

    const col5=$(' <div class="col-lg-3 new new__small">');
    const img8=$('<img class="new__imgNew" src="assets/img/'+laboratoriaNews.news[11].img+'" alt="">');
    const text8=$('<h3> </h3>');
    row2.append(col5)
    col5.append(img8);
    col5.append(text8);

    const col6=$(' <div class="col-lg-3 new new__small">');
    const img9=$('<img class="new__imgNew" src="assets/img/'+laboratoriaNews.news[12].img+'" alt="">');
    const text9=$('<h3> </h3>');
    row2.append(col6)
    col6.append(img9);
    col6.append(text9);

    const col7=$(' <div class="col-lg-3 new new__small">');
    const img10=$('<img class="new__imgNew" src="assets/img/'+laboratoriaNews.news[13].img+'" alt="">');
    const text10=$('<h3> </h3>');
    row2.append(col7)
    col7.append(img10);
    col7.append(text10);



   return mundo;
 }

'use strict'
const Header = () => {
    const header = $('<header class="header"></header>');
    const menuLab = $('<div class="menu hidden-xs"></div>');
    const itemLeft=$('<div class="menu menu--item"></div>');
    const optionItem1=$('<div class="menu--option"></div>');
    const imgOption1=$('<img src="assets/img/menu.png" alt="">');
    const textOption1=$('<span>SECTION</span> ');
    const optionItem2=$('<div class="menu--option"></div>');
    const imgOption2=$('<img src="assets/img/search.png" alt="">');
    const textOption2=$('<span>SEARCH</span> ');
    header.append(menuLab);
    menuLab.append(itemLeft);
    itemLeft.append(optionItem1);
    optionItem1.append(imgOption1);
    optionItem1.append(textOption1);
    itemLeft.append(optionItem2);
    optionItem2.append(imgOption2);
    optionItem2.append(textOption2);
   const itemRight=$('<div class="menu menu--item"></div>');
   const optionItem3=$('<div class="menu--option"></div>');
   const imgOption3=$('<img src="assets/img/fb.png" alt="">');
   const optionItem4=$('<div class="menu--option"></div>');
   const imgOption4=$('<img src="assets/img/tw.png" alt="">');
   const optionItem5=$('<div class="menu--option"></div>');
   const imgOption5=$('<img src="assets/img/in.png" alt="">');
   menuLab.append(itemRight);
   itemRight.append(optionItem3);
   optionItem3.append(imgOption3);

   itemRight.append(optionItem4);
   optionItem4.append(imgOption4);
   itemRight.append(optionItem5);
   optionItem5.append(imgOption5);

    const contLogo = $('<div class="text-center visible-lg"></div>');
    const salto1 = $(' <br>');
    const imgLog = $('<img class="text-center" src="assets/img/logoicon.png" alt="Laboratoria">');
    const infDetail = $('<div class="info-detail">');
    const salto2 = $(' <br>');
    const date = $('<span>Lunes , Junio 12 de 2017</span>');
    const separator = $(' <span> | </span>');
    const imgCloud = ('<img src="assets/img/cloud.png" alt="clima">');
    const temperature = $('   <span> 22°</span>');
    const salto3 = $(' <br>');
    header.append(contLogo);
    contLogo.append(salto1);
    contLogo.append(imgLog);
    contLogo.append(infDetail);
    infDetail.append(salto2);
    infDetail.append(date);
    infDetail.append(separator);
    infDetail.append(imgCloud);
    infDetail.append(temperature);
    contLogo.append(salto3);

    const navLabNews = $('<nav class="navbar navbar-default "></nav>');
    const navHeader = $('<div class="navbar-header visible-xs"></div>');
    const btnBurger = $('<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navegacion" name="button"></button>');
    const lineBurger1 = $('<span class="icon-bar" ></span>');
    const lineBurger2 = $('<span class="icon-bar" ></span>');
    const lineBurger3 = $('<span class="icon-bar" ></span>');
    const logoLab = $('<img class="navbar-brand" alt="Laboratoria" src="assets/img/logoicon.png">');
    const navCollapse = $('<div class="collapse navbar-collapse" id="navegacion"></div>');
    const navLista = $('<ul class="nav navbar-nav" role="tablist"></ul>');
    const itemLista1 = $('<li><a href="#" class="item-nav active">Lo último</a></li>');
    const itemLista2 = $('<li><a href="#" class="item-nav ">Opinión</a></li>');
    const itemLista3 = $(' <li><a href="#" class="item-nav ">Cultura</a></li>');
    const itemLista4 = $('<li><a href="#" class="item-nav ">Perú</a></li>');
    const itemLista5 = $('<li><a href="#" class="item-nav ">Tecnología</a></li>');
    const itemLista6 = $('<li><a href="#" class="item-nav ">Mundo</a></li>');
    const itemLista7 = $('<li><a href="#" class="item-nav ">Economía</a></li>');
    const itemLista8 = $('<li><a href="#" class="item-nav ">Lifestyle</a></li>');
    const itemLista9 = $('<li><a href="#" class="item-nav ">Deporte</a></li>');
    header.append(navLabNews);
    navLabNews.append(navHeader);
    navHeader.append(btnBurger);
    btnBurger.append(lineBurger1);
    btnBurger.append(lineBurger2);
    btnBurger.append(lineBurger3);
    navHeader.append(logoLab);
    navLabNews.append(navCollapse);
    navCollapse.append(navLista);
    navLista.append(itemLista1);
    navLista.append(itemLista1);
    navLista.append(itemLista2);
    navLista.append(itemLista3);
    navLista.append(itemLista4);
    navLista.append(itemLista5);
    navLista.append(itemLista6);
    navLista.append(itemLista7);
    navLista.append(itemLista8);
    navLista.append(itemLista9);
    return header;

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
    root.append(Header());
    root.append(Principal());
    root.append(Mundo());
    root.append(Tecnologia());
    root.append(Educacion());
    root.append(Opinion());
};

const laboratoriaNews = {
    news: null,
    idNew: null,
    category: null,
    idCategory: null
}


$(_ => {

    getJSON('/api/news/', (err, json) => {
        laboratoriaNews.news = json;
        console.log(laboratoriaNews.news);
        const root = $('.root');
        render(root);
    });

    getJSON('/api/categories/', (err, json) => {
        laboratoriaNews.category = json;
        console.log(laboratoriaNews.category);
    });

    getJSON('/api/categories/' + laboratoriaNews.idCategory, (err, json) => {
        laboratoriaNews.idCategory = json;
        console.log(laboratoriaNews.idCategories);
    });

    getJSON('/api/news/' + laboratoriaNews.idNew, (err, json) => {
        laboratoriaNews.idNew = json;
        console.log(laboratoriaNews.idNew);
    });

});

},{}]},{},[1])