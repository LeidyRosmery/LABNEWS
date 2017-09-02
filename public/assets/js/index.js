(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const Carousel=()=>{
  const carousel = $('<section class="pdx2  carousel padBoth">');
  const container = $('<div class="container-fluid ">');
  const row = $("<div class='row'>");
    const col1 = $('<div class="col-lg-12  col-md-6 col-sm-12 col-xs-12">');
  carousel.append(container)
  container.append(row);
  row.append(col1);

const mainCarousel = $('<div id="carrusel1" class="carousel slider" data-pause="hover" data-wrap="true" data-ride="carousel" data-interval="2000">');
const containerCarousel = $('<div class="carousel-inner" role="listbox">');
const item1 = $('<div class="item active">');
const rowItem=$('<div class="row">');
col1.append(mainCarousel);
mainCarousel.append(containerCarousel);
containerCarousel.append(item1);
item1.append(rowItem);


const subItem = $('<div class=" slider--itemCarousel col-lg-3  col-md-6 col-sm-6 col-xs-6">');
const imgSubItem = $('<img class="news--img__md img-responsive " src="assets/img/' + laboratoriaNews.news[10].img + '" alt="">');
const divTextSubItem = $('<div class=" news news--detail pd col-lg-3  col-md-6 col-sm-6 col-xs-6 ">');
const textSubItem = $('  <p>' + laboratoriaNews.news[10].title + ' </p>');
rowItem.append(subItem);
subItem.append(imgSubItem);
subItem.append(divTextSubItem);
divTextSubItem.append(textSubItem);

const subItem1 = $('<div class=" slider--itemCarousel col-lg-3  col-md-6 col-sm-6 col-xs-6">');
const imgSubItem1 = $('<img class="news--img__md img-responsive " src="assets/img/' + laboratoriaNews.news[11].img + '" alt="">');
const divTextSubItem1 = $('<div class=" news news--detail pd col-lg-3  col-md-6 col-sm-6 col-xs-6 ">');
const textSubItem1 = $('  <p>' + laboratoriaNews.news[11].title + ' </p>');
rowItem.append(subItem1);
subItem1.append(imgSubItem1);
subItem1.append(divTextSubItem1);
divTextSubItem1.append(textSubItem1);

const subItem2 = $('<div class=" slider--itemCarousel col-lg-3  hidden-xs">');
const imgSubItem2 = $('<img class="news--img__md img-responsive img--sm" src="assets/img/' + laboratoriaNews.news[12].img + '" alt="">');
const divTextSubItem2 = $('<div class="news news--detail detail--sm pd col-lg-3  col-md-6 col-sm-6 col-xs-6 ">');
const textSubItem2 = $('  <p>' +laboratoriaNews.news[12].title  + ' </p>');
rowItem.append(subItem2);
subItem2.append(imgSubItem2);
subItem2.append(divTextSubItem2);
divTextSubItem2.append(textSubItem2);

const subItem3 = $('<div class=" slider--itemCarousel col-lg-3  hidden-xs">');
const imgSubItem3 = $('<img class="news--img__md img-responsive img--sm" src="assets/img/' + laboratoriaNews.news[13].img + '" alt="">');
const divTextSubItem3 = $('<div class="news news--detail detail--sm pd col-lg-3  col-md-6 col-sm-6 col-xs-6 ">');
const textSubItem3 = $('  <p>' + laboratoriaNews.news[13].title + '</p>');
rowItem.append(subItem3);
subItem3.append(imgSubItem3);
subItem3.append(divTextSubItem3);
divTextSubItem3.append(textSubItem3);
const controlLeft =$('<a href="#carrusel1" class="controlSlider  visible-lg left carousel-control" '+
'role="button" data-slide="prev"> <span class="controlSlider__left slider--iconSlider glyphicon glyphicon-chevron-left" '+
' aria-hidden="true"></span> <span class="sr-only">Anterior</span> </a>');

mainCarousel.append(controlLeft);
const controlRight= $('  <a href="#carrusel1" class="controlSlider visible-lg right carousel-control" '+
' role="button" data-slide="next"> <span class="controlSlider__right slider--iconSlider '+
'glyphicon glyphicon-chevron-right" aria-hidden="true"></span><span class="sr-only">Siguiente</span> </a>');

mainCarousel.append(controlRight);

  return carousel;
}

'use strict';
const Principal = () => {
    const principal = $('<section id="principal" class="principal padBoth">');
    const container = $('<div class="container-fluid ">');
    const row = $("<div class='row'>");
    const tituloSeccion = $(' <div class="hidden-lg pd col-lg-12 col-md-12 col-xs-12 "><h3 class="category--title"> LO ULTIMO</h3><hr class="category--underline"></div> ');
    const divImg1 = $("<div class='pd col-lg-12 col-md-12 col-xs-12 col-sm-12 '>");
    const img1 = $('<img class="news news--img__lg img--lg img-responsive" src="assets/img/' + laboratoriaNews.news[0].img + '" alt="">');
    const divText1 = $("<div class=' text-justify col-lg-8 col-md-12 col-xs-12 col-sm-12 newsInf'>");
    const title1 = $('<h2 class="title-news"> ' + laboratoriaNews.news[0].title + '</h2>');
    const text1 = $('<p  class="hidden-xs newsInf--text hidden-xs"> ' + laboratoriaNews.news[0].brief + '</p>');
    principal.append(container);
    container.append(row);
    row.append(tituloSeccion);
    row.append(divImg1);
    divImg1.append(img1);
    divImg1.append(divText1);
    divText1.append(title1);
    divText1.append(text1);

    const row2 = $('<div class="row ">');
    const divImg2 = $('<div class="pd col-lg-6 col-md-6 col-xs-12 col-sm-12 ">');
    const img2 = $('<img class="news news--img__lg  img--md img-responsive" src="assets/img/' + laboratoriaNews.news[1].img + '">');
    const divText2 = $('<div class="news--detail detail--md col-lg-6 col-md-6 col-xs-12 col-sm-12 ">');
    const text2 = $('  <p class="news--titleLetter"> ' + changeColor(laboratoriaNews.news[1].title , 4,8)+ '</p>');
    //console.log('que pasa'+laboratoriaNews.news[1].title.split(" "));

    const letter1 = $('<span class="news--letter letter--md">HOY</span>');

    container.append(row2);
    row2.append(divImg2)
    divImg2.append(img2);
    divImg2.append(divText2);
    divText2.append(text2);
    divText2.append(letter1);


    const divImg3 = $('<div class="pd col-lg-3 col-md-3 col-xs-12 col-sm-12 ">');
    const img3 = $('<img class="news news--img__lg img-responsive img--sm" src="assets/img/' + laboratoriaNews.news[2].img + '" alt="">');
    const divText3 = $('<div class="news--detail detail--sm col-lg-3 col-md-3 col-xs-12 col-sm-12 ">');
    const text3 = $('  <p>' + changeColor(laboratoriaNews.news[2].title , 4,7) + '</p>');
    row2.append(divImg3)
    divImg3.append(img3);
    divImg3.append(divText3);
    divText3.append(text3);

    const divImg4 = $('<div class="pd col-lg-3 col-md-3 col-xs-12 col-sm-12 new" >');
    const img4 = $('<img class="news news--img__lg img-responsive img--sm" src="assets/img/' + laboratoriaNews.news[3].img + '" alt="">');
    const divText4 = $('<div class="news--detail detail--sm col-lg-3 col-md-3 col-xs-12 col-sm-12 new__textLG" >');
    const text4 = $('  <p>' + changeColor(laboratoriaNews.news[3].title , 3,5) + '</p>');
    row2.append(divImg4)
    divImg4.append(img4);
    divImg4.append(divText4);
    divText4.append(text4);

    return principal;
}

'use strict';
const Opinion = () => {
    const opinion = $('<section class="opinion padBoth">');
    const container = $('<div class="container-fluid ">');
    const row = $("<div class='row noticia'>");
    const tituloSeccion = $(' <div class="pd col-lg-12 col-md-12 col-xs-12 "><h3 class="category--title">OPINION</h3><hr class="category--underline"></div> ');
    opinion.append(container);
    container.append(row);
    row.append(tituloSeccion);

    const itemOpinion1 = $('<div class="pd col-lg-3  col-xl-3">');
    const imgPlay = $('<img class="news--play news--play__lg play--md" src="assets/img/play-button.png" alt="">');
    const imgOpinion1 = $('<img class="news news--img__lg img--md img-responsive" src="assets/img/' + laboratoriaNews.news[24].img + '" alt="">');
    const divTextOpinion1 = $('<div class="news--detail col-lg-3  col-xl-3">');
    const textOpinion1 = $('  <p class="news--titleLetter">' + changeColor(laboratoriaNews.news[24].title , 0,2)  + '</p>');
    const letter1 = $('<span class="news--letter">HOY</span>');

    row.append(itemOpinion1);
    itemOpinion1.append(imgOpinion1);
    itemOpinion1.append(imgPlay);
    itemOpinion1.append(divTextOpinion1);
    divTextOpinion1.append(textOpinion1);
    divTextOpinion1.append(letter1);

    const itemOpinion2 = $('<div class="pd col-lg-3  col-xl-3">');
    const imgPlay2 = $('<img class="news--play news--play__lg play--md" src="assets/img/play-button.png" alt="">');
    const imgOpinion2 = $('<img class="news news--img__lg img--md img-responsive" src="assets/img/' + laboratoriaNews.news[25].img + '" alt="">');
    const divTextOpinion2 = $('<div class="news--detail col-lg-3  col-xl-3">');
    const textOpinion2 = $('  <p class="news--titleLetter">' + changeColor(laboratoriaNews.news[25].title , 0,2)  + '</p>');
    const letter2 = $('<span class="news--letter">HOY</span>');

    row.append(itemOpinion2);
    itemOpinion2.append(imgOpinion2);
    itemOpinion2.append(imgPlay2);
    itemOpinion2.append(divTextOpinion2);
    divTextOpinion2.append(textOpinion2);
    divTextOpinion2.append(letter2);

    const itemOpinion3 = $('<div class="pd col-lg-3  col-xl-3">');
    const imgPlay3 = $('<img class="news--play news--play__lg play--sm" src="assets/img/play-button.png" alt="">');
    const imgOpinion3 = $('<img class="news news--img__lg img-responsive img--sm" src="assets/img/' + laboratoriaNews.news[26].img + '" alt="">');
    const divTextOpinion3 = $('<div class="news--detail detail--sm col-lg-3  col-xl-3">');
    const textOpinion3 = $('  <p class="news--titleLetter">' + changeColor(laboratoriaNews.news[26].title , 0,2)  + '</p>');
    const letter3 = $('<span class="hidden-xs news--letter">HOY</span>');

    row.append(itemOpinion3);
    itemOpinion3.append(imgOpinion3);
    itemOpinion3.append(imgPlay3);
    itemOpinion3.append(divTextOpinion3);
    divTextOpinion3.append(textOpinion3);
    divTextOpinion3.append(letter3);

    const itemOpinion4 = $('<div class="pd col-lg-3  col-xl-3">');
    const imgPlay4 = $('<img class="news--play news--play__lg play--sm" src="assets/img/play-button.png" alt="">');
    const imgOpinion4 = $('<img class="news news--img__lg img-responsive img--sm" src="assets/img/' + laboratoriaNews.news[27].img + '" alt="">');
    const divTextOpinion4 = $('<div class="news--detail detail--sm col-lg-3  col-xl-3">');
    const textOpinion4 = $('  <p class="news--titleLetter">' + changeColor(laboratoriaNews.news[27].title , 0,2) + '</p>');
    const letter4 = $('<span class="hidden-xs news--letter">HOY</span>');

    row.append(itemOpinion4);
    itemOpinion4.append(imgOpinion4);
    itemOpinion4.append(imgPlay4);
    itemOpinion4.append(divTextOpinion4);
    divTextOpinion4.append(textOpinion4);
    divTextOpinion4.append(letter4);

    const itemOpinion5 = $('<div class="pd hidden-lg col-xs-12">');
    const imgPlay5 = $('<img class="news--play news--play__lg play--sm" src="assets/img/play-button.png" alt="">');
    const imgOpinion5 = $('<img class="news news--img__lg img-responsive img--sm" src="assets/img/' + laboratoriaNews.news[26].img + '" alt="">');
    const divTextOpinion5 = $('<div class="news--detail detail--sm col-lg-3  col-xl-3">');
    const textOpinion5 = $('  <p class="news--titleLetter">' + changeColor(laboratoriaNews.news[26].title , 0,2)  + '</p>');
    row.append(itemOpinion5);
    itemOpinion5.append(imgOpinion5);
    itemOpinion5.append(imgPlay5);
    itemOpinion5.append(divTextOpinion5);
    divTextOpinion5.append(textOpinion5);

    return opinion;
}

'use strict';
const Educacion = () => {
    const educacion = $('<section class="educacion padBoth">');
    const container = $('<div class="container-fluid ">');
    const row = $("<div class='row'>");
    const tituloSeccion = $(' <div class="pd col-lg-12 col-md-12 col-xs-12 "><h3 class="category--title">EDUCACION</h3><hr class="category--underline"></div> ');
    educacion.append(container)
    container.append(row);
    row.append(tituloSeccion);

    const col1 = $('<div class="col-lg-6  col-md-6 col-sm-12 col-xs-12">');
    row.append(col1);
    const rowSubItem1 = $('<div class="row "></div>');
    const itemEducacion = $('<div class="pd col-lg-6  col-md-6 col-sm-12 col-xs-12 ">');
    const imgEducacion = $('<img class="news news--img__md  img-responsive" src="assets/img/' + laboratoriaNews.news[19].img + '" alt="">');
    const divTextEducacion = $('<div class="news--detail col-lg-6  col-md-6 col-sm-12 col-xs-12">');
    const textEducacion = $('<p>' + changeColor(laboratoriaNews.news[19].title, 0, 2) + '</p>');
    col1.append(rowSubItem1);
    rowSubItem1.append(itemEducacion);
    itemEducacion.append(imgEducacion);
    itemEducacion.append(divTextEducacion);
    divTextEducacion.append(textEducacion);

    const itemEducacion1 = $('<div class="pd col-lg-6  col-md-6 col-sm-12 col-xs-12 ">');
    const imgPlay = $('<img class="hidden-xs news--play news--play__md" src="assets/img/play-button.png" alt="">');
    const imgEducacion1 = $('<img class="news news--img__md  img-responsive" src="assets/img/' + laboratoriaNews.news[20].img + '" alt="">');
    const divTextEducacion1 = $('<div class="news--detail col-lg-6  col-md-6 col-sm-12 col-xs-12">');
    const textEducacion1 = $('<p>' + changeColor(laboratoriaNews.news[20].title, 0, 2) + '</p>');
    rowSubItem1.append(itemEducacion1);
    itemEducacion1.append(imgEducacion1);
    itemEducacion1.append(imgPlay);
    itemEducacion1.append(divTextEducacion1);
    divTextEducacion1.append(textEducacion1);

    const rowSubItem2 = $('<div class="row"></div>');
    const itemEducacion2 = $('<div class="pd col-lg-12  col-md-12  col-sm-12 col-xs-12">');
    const imgEducacion2 = $('<img class="news news--img__sm img-responsive img--sm" src="assets/img/' + laboratoriaNews.news[23].img + '" alt="">');
    const divTextEducacion2 = $('<div class="news--detail news--detail__sm detail--sm col-lg-6  col-md-6 col-sm-12 col-xs-12">');
    const textEducacion2 = $('  <p class="titleLetter--sm">' + laboratoriaNews.news[23].title + ' newspaper</p>');
    const letter2 = $('<span class="hidden-lg news--letter letter--sm">HOY</span>');
    col1.append(rowSubItem2);
    rowSubItem2.append(itemEducacion2);
    itemEducacion2.append(imgEducacion2);
    itemEducacion2.append(divTextEducacion2);
    divTextEducacion2.append(textEducacion2);
    divTextEducacion2.append(letter2);


    const col2 = $('<div class="col-lg-6  col-md-6 col-sm-12 col-xs-12 new">');
    row.append(col2);

    const rowSubItem3 = $('<div class="row "></div>');
    const itemEducacion3 = $('<div class="pd col-lg-6  col-md-6 col-sm-12 col-xs-12 ">');
    const imgEducacion3 = $('<img class="news news--img__md  img-responsive img--sm" src="assets/img/' + laboratoriaNews.news[21].img + '" alt="">');
    const divTextEducacion3 = $('<div class="news--detail detail--sm col-lg-6  col-md-6 col-sm-12 col-xs-12">');
    const textEducacion3 = $('  <p class="titleLetter--sm">' + laboratoriaNews.news[21].title + '</p>');
    const letter3 = $('<span class="hidden-lg news--letter letter--sm">HOY</span>');
    col2.append(rowSubItem3);
    rowSubItem3.append(itemEducacion3);
    itemEducacion3.append(imgEducacion3);
    itemEducacion3.append(divTextEducacion3);
    divTextEducacion3.append(textEducacion3);
    divTextEducacion3.append(letter3);

    const itemEducacion4 = $('<div class="pd col-lg-6  col-md-6 col-sm-12 col-xs-12 hidden-xs ">');
    const imgEducacion4 = $('<img class="news news--img__md  img-responsive" src="assets/img/' + laboratoriaNews.news[22].img + '" alt="">');
    const divTextEducacion4 = $('<div class="news--detail col-lg-6  col-md-6 col-sm-12 col-xs-12">');
    const textEducacion4 = $('<p class="news--titleLetter">' + laboratoriaNews.news[22].title + '</p>');
    const letter4 = $('<span class="news--letter">HOY</span>');
    rowSubItem3.append(itemEducacion4);
    itemEducacion4.append(imgEducacion4);
    itemEducacion4.append(divTextEducacion4);
    divTextEducacion4.append(textEducacion4);
    divTextEducacion4.append(letter4);

    const rowSubItem4 = $('<div class="row"></div>');
    const itemEducacion5 = $('<div class="pd col-lg-12  col-md-12  col-sm-12 col-xs-12">');
    const imgEducacion5 = $('<img class="news news--img__sm img--sm img-responsive" src="assets/img/' + laboratoriaNews.news[24].img + '" alt="">');
    const divTextEducacion5 = $('<div class="news--detail news--detail__sm detail--sm col-lg-6  col-md-6 col-sm-12 col-xs-12">');
    const textEducacion5 = $('  <p class="titleLetter--sm">' + changeColor(laboratoriaNews.news[24].title, 0, 2) + ' newspaper</p>');
    const letter5 = $('<span class="hidden-lg news--letter letter--sm">HOY</span>');
    col2.append(rowSubItem4);
    rowSubItem4.append(itemEducacion5);
    itemEducacion5.append(imgEducacion5);
    itemEducacion5.append(divTextEducacion5);
    divTextEducacion5.append(textEducacion5);
    divTextEducacion5.append(letter5);

    return educacion;

}

'use strict';
const Tecnologia = () => {
    const tecnologia = $('<section class="tecnologia padBoth">');
    const container = $('<div class="container-fluid ">');
    const row = $("<div class='row noticia'>");
    const tituloSeccion = $(' <div class="pd col-lg-12 col-md-12 col-xs-12 "><h3 class="category--title">TECNOLOGIA</h3><hr class="category--underline"></div> ');
    tecnologia.append(container)
    container.append(row);
    row.append(tituloSeccion);

    const itemTecnologia = $('<div class="pd col-lg-6  col-xmd-6 col-sm-12 col-xs-12 ">');
    const imgPlay = $('<img class=" news--play news--play__sm play--lg" src="assets/img/play-button.png" alt="">');
    const imgTecnologia = $('<img class="news news--img__lg img--md img-responsive" src="assets/img/' + laboratoriaNews.news[14].img + '" alt="">');
    const divTextTecnologia = $('<div class="news--detail detail--md col-lg-3  col-md-3  col-xs-12 col-sm-12 " >');
    const textTecnologia = $('  <p class="news--titleLetter">' + changeColor(laboratoriaNews.news[14].title , 0,3)  + '</p>');
    const letter = $('<span class="news--letter news--letter__md letter--md">HOY</span>');
    row.append(itemTecnologia)
    itemTecnologia.append(imgTecnologia);
    itemTecnologia.append(imgPlay);
    itemTecnologia.append(divTextTecnologia);
    divTextTecnologia.append(textTecnologia);
    divTextTecnologia.append(letter);



    const col2 = $('<div class="col-lg-6 col-xl-6 col-sm-12 col-xs-12 new ">');
    row.append(col2);
    const rowSubItem1=$('<div class="row"></div>');
    const itemTecnologia1 = $('<div class="pd col-lg-6  col-md-6  hidden-xs hidden-sm ">');
    const imgTecnologia1 = $('<img class="news news--img__md img-responsive" src="assets/img/' + laboratoriaNews.news[15].img + '" alt="">');
    const divTextTecnologia1 = $('<div class="news--detail col-lg-3  col-md-3  col-xs-12 col-sm-12 " >');
    const textTecnologia1 = $('  <p>' + laboratoriaNews.news[15].title + '</p>');
    col2.append(rowSubItem1);
    rowSubItem1.append(itemTecnologia1);
    itemTecnologia1.append(imgTecnologia1);
    itemTecnologia1.append(divTextTecnologia1);
    divTextTecnologia1.append(textTecnologia1);

    const itemTecnologia2 = $('<div class="pd col-lg-6  col-md-6  hidden-xs hidden-sm ">');
    const imgTecnologia2 = $('<img class="news news--img__md img-responsive" src="assets/img/' + laboratoriaNews.news[16].img + '" alt="">');
    const divTextTecnologia2 = $('<div class="news--detail col-lg-3  col-md-3  col-xs-12 col-sm-12 " >');
    const textTecnologia2 = $('  <p class="news--titleLetter">' + changeColor(laboratoriaNews.news[16].title , 0,2)  + '</p>');
    const letter2 = $('<span class="news--letter">HOY</span>');
    rowSubItem1.append(itemTecnologia2);
    itemTecnologia2.append(imgTecnologia2);
    itemTecnologia2.append(divTextTecnologia2);
    divTextTecnologia2.append(textTecnologia2);
    divTextTecnologia2.append(letter2);;

    const rowSubItem2=$('<div class="row"></div>');
    const itemTecnologia3 = $('<div class="col-lg-12  col-md-12 col-sm-12 col-xs-12 pd">');
    const imgTecnologia3 = $('<img class="news news--img__sm img-responsive img--sm" src="assets/img/' + laboratoriaNews.news[17].img + '" alt="">');
    const divTextTecnologia3 = $('<div class="news--detail news--detail__sm detail--sm col-lg-12  col-md-12 col-sm-12 col-xs-12 ">');
    const textTecnologia3 = $('  <p>' + laboratoriaNews.news[17].title + '</p>');
    col2.append(rowSubItem2);
    rowSubItem2.append(itemTecnologia3);
    itemTecnologia3.append(imgTecnologia3);
    itemTecnologia3.append(divTextTecnologia3);
    divTextTecnologia3.append(textTecnologia3);

    const itemTecnologia4 = $('<div class="col-lg-12  col-md-12 col-sm-12 col-xs-12 pd">');
    const divTextTecnologia4 = $('<div class="news--detail news--detail__sm detail--sm col-lg-12  col-md-12 col-sm-12 col-xs-12 ">');
    const imgTecnologia4 = $('<img class="news news--img__sm img-responsive img--sm" src="assets/img/' + laboratoriaNews.news[18].img + '" alt="">');
    const textTecnologia4 = $('  <p>' + changeColor(laboratoriaNews.news[18].title , 0,2)  + '</p>');
    rowSubItem2.append(itemTecnologia4);
    itemTecnologia4.append(imgTecnologia4);
    itemTecnologia4.append(divTextTecnologia4);
    divTextTecnologia4.append(textTecnologia4);

    return tecnologia;

}

'use strict';
const Mundo = () => {
    const mundo = $('<section class="mundo padBoth">');
    const container = $('<div class="container-fluid ">');
    const row1 = $("<div class='row'>");
    const tituloSeccion = $(' <div class="pd col-lg-12 col-md-12 col-xs-12 "><h3 class="category--title"> MUNDO</h3><hr class="category--underline"></div> ');
    const itemMundo1 = $('<div class="pd col-lg-3  col-md-3  col-xs-12 col-sm-12">');
    const imgPlay = $('<img class="news--play news--play__lg play--md" src="assets/img/play-button.png" alt="">');
    const imgMundo1 = $('<img class="news news--img__lg img-responsive img--md" src="assets/img/' + laboratoriaNews.news[4].img + '" alt="">');
    const divTextMundo1 = $('<div class="news--detail col-lg-3  col-md-3  col-xs-12 col-sm-12 " >');
    const textMundo1 = $('  <p class="news--titleLetter">' + changeColor(laboratoriaNews.news[4].title , 0,2) + '</p>');
    const letter = $('<span class="news--letter">HOY</span>');


    mundo.append(container);
    container.append(row1);
    row1.append(tituloSeccion);
    row1.append(itemMundo1)
    itemMundo1.append(imgMundo1);
    itemMundo1.append(imgPlay);
    itemMundo1.append(divTextMundo1);
    divTextMundo1.append(textMundo1);
    divTextMundo1.append(letter)

    const itemMundo2 = $('<div class=" col-lg-6 col-md-6  col-sm-12 col-xs-12 ">');
    const rowSubItem1=$('<div class="row "></div>');
    const subItem = $('<div class="pd col-lg-6  col-md-6 col-sm-12 col-xs-12">');
    const imgSubItem = $('<img class="news--img__md img-responsive img--sm" src="assets/img/' + laboratoriaNews.news[5].img + '" alt="">');
    const divTextSubItem = $('<div class="news news--detail detail--sm col-lg-6 col-md-6  col-sm-12 col-xs-12 ">');
    const textSubItem = $('  <p>' + changeColor(laboratoriaNews.news[5].title , 0,2)  + ' newspaper</p>');
    row1.append(itemMundo2);
    itemMundo2.append(rowSubItem1);
    rowSubItem1.append(subItem);
    subItem.append(imgSubItem);
    subItem.append(divTextSubItem);
    divTextSubItem.append(textSubItem);


    const subItem1 = $('<div class="pd col-lg-6  col-xl-6 hidden-xs hidden-sm ">');
    const imgPlay1 = $('<img class="news--play news--play__md" src="assets/img/play-button.png" alt="">');
    const imgSubItem1 = $('<img class="news news--img__md img-responsive" src="assets/img/' + laboratoriaNews.news[6].img + '" alt="">');
    const divTextSubItem1 = $('<div  class="news--detail col-lg-6  col-xl-6 hidden-xs hidden-sm ">');
    const textSubItem1 = $('  <p class="news--titleLetter">' + laboratoriaNews.news[6].title + '</p>');
    const letter1 = $('<span class="news--letter">HOY</span>');
    rowSubItem1.append(subItem1);
    subItem1.append(imgSubItem1);
    subItem1.append(imgPlay1);
    subItem1.append(divTextSubItem1);
    divTextSubItem1.append(textSubItem1);
    divTextSubItem1.append(letter1);


    const rowSubItem2=$('<div class="row"></div>');
    const subItem2 = $('<div class="pd col-lg-12  col-xl-12  col-sm-12 col-xs-12 pd">');
    const imgSubItem2 = $('<img class="news news--img__sm img-responsive img--sm" src="assets/img/' + laboratoriaNews.news[8].img + '" alt="">');
    const divTextSubItem2 = $('<div class="news--detail news--detail__sm detail--sm col-lg-12  col-xl-12  col-sm-12 col-xs-12">');
    const textSubItem2 = $('  <p>' + laboratoriaNews.news[8].title + '</p>');
    itemMundo2.append(rowSubItem2);
    rowSubItem2.append(subItem2);
    subItem2.append(imgSubItem2);
    subItem2.append(divTextSubItem2);
    divTextSubItem2.append(textSubItem2);

    const subItem3 = $('<div class="pd col-lg-12  col-xl-12  col-sm-12 col-xs-12 ">');
    const imgSubItem3 = $('<img class="news news--img__sm img-responsive img--sm" src="assets/img/' + laboratoriaNews.news[9].img + '" alt="">');
    const divTextSubItem3 = $('<div class="news--detail news--detail__sm detail--sm col-lg-12  col-xl-12  col-sm-12 col-xs-12">');
    const textSubItem3 = $('  <p>' + changeColor(laboratoriaNews.news[9].title , 0,2)  + '</p>');
    rowSubItem2.append(subItem3);
    subItem3.append(imgSubItem3);
    subItem3.append(divTextSubItem3);
    divTextSubItem3.append(textSubItem3);

    const itemMundo3 = $('<div class="pd col-lg-3 col-md-3  hidden-xs hidden-sm ">');
    const imgMundo3 = $('<img class="news news--img__lg img-responsive" src="assets/img/' + laboratoriaNews.news[7].img + '" alt="">');
    const divTextMundo3 = $('<div class="news--detail col-lg-3 col-md-3  hidden-xs hidden-sm ">');
    const textMundo3 = $('<p>' + laboratoriaNews.news[7].title + '</p>');
    row1.append(itemMundo3)
    itemMundo3.append(imgMundo3);
    itemMundo3.append(divTextMundo3);
    divTextMundo3.append(textMundo3);



    const row2 = $('<div class="row hidden-xs hidden-sm">');
    container.append(row2);
    const itemMundo4 = $('<div class="pd col-lg-3">');
    const imgMundo4 = $('<img class="news news--img__md img-responsive" src="assets/img/' + laboratoriaNews.news[10].img + '" alt="">');
    const divTextMundo4 = $('<div class="news--detail col-lg-3">');
    const textMundo4 = $('<p>' + laboratoriaNews.news[10].title + '</p>');
    row2.append(itemMundo4)
    itemMundo4.append(imgMundo4);
    itemMundo4.append(divTextMundo4);
    divTextMundo4.append(textMundo4);

    const itemMundo5 = $('<div class="pd col-lg-3">');
    const imgMundo5 = $('<img class="news news--img__md img-responsive" src="assets/img/' + laboratoriaNews.news[11].img + '" alt="">');
    const divTextMundo5 = $('<div class="news--detail col-lg-3">');
    const textMundo5 = $('<p class="news--titleLetter">' + laboratoriaNews.news[11].title + '</p>');
    const letter5 = $('<span class="news--letter">HOY</span>');

    row2.append(itemMundo5)
    itemMundo5.append(imgMundo5);
    itemMundo5.append(divTextMundo5);
    divTextMundo5.append(textMundo5);
    divTextMundo5.append(letter5);

    const itemMundo6 = $('<div class="pd col-lg-3">');
    const imgMundo6 = $('<img class="news  news--img__md img-responsive" src="assets/img/' + laboratoriaNews.news[12].img + '" alt="">');
    const divTextMundo6 = $('<div class="news--detail col-lg-3">');
    const textMundo6 = $('<p class="news--titleLetter">' + laboratoriaNews.news[12].title + '</p>');
    const letter6 = $('<span class="news--letter">HOY</span>');
    row2.append(itemMundo6);
    itemMundo6.append(imgMundo6);
    itemMundo6.append(divTextMundo6);
    divTextMundo6.append(textMundo6);
    divTextMundo6.append(letter6);

    const itemMundo7 = $('<div class="pd col-lg-3">');
    const imgMundo7 = $('<img class="news news--img__md img-responsive" src="assets/img/' + laboratoriaNews.news[13].img + '" alt="">');
    const divTextMundo7 = $('<div class="news--detail col-lg-3">');
    const textMundo7 = $('<p>' + laboratoriaNews.news[13].title + '</p>');
    row2.append(itemMundo7);
    itemMundo7.append(imgMundo7);
    itemMundo7.append(divTextMundo7);
    divTextMundo7.append(textMundo7);

    return mundo;
}

'use strict'
const Header = () => {
    const header = $('<header class="header"></header>');
    const menuLab = $('<div class="menu hidden-xs padBoth"></div>');
    const itemLeft=$('<div class="menu menu--item"></div>');
    const optionItem1=$('<div class="menu--option"></div>');
    const imgOption1=$('<img src="assets/img/menu.png" alt="">');
    const textOption1=$('<span> SECTION</span> ');
    const optionItem2=$('<div class="menu--option"></div>');
    const imgOption2=$('<img src="assets/img/search.png" alt="">');
    const textOption2=$('<span> SEARCH</span> ');
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

    const navLabNews = $('<nav class="navbar navbar-default padBoth"></nav>');
    const navHeader = $('<div class="navbar-header visible-xs"></div>');
    const btnBurger = $('<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navegacion" name="button"></button>');
    const lineBurger1 = $('<span class="icon-bar" ></span>');
    const lineBurger2 = $('<span class="icon-bar" ></span>');
    const lineBurger3 = $('<span class="icon-bar" ></span>');
    const logoLab = $('<img class="navbar-brand" alt="Laboratoria" src="assets/img/logoicon.png">');
    const navCollapse = $('<div class="collapse navbar-collapse pd" id="navegacion"></div>');
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

'use strict'
const changeColor=(cadena, inicio, fin)=> {
    const aux = cadena.split(" ");
    aux.splice(inicio, 0, "<span class=news--highlight>");
    aux.splice(fin, 0, "</span>");
    return aux.join(" ");
}

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

'use strict'
const Footer=()=> {
    const piePagina = $('<footer class="padBoth"></footer>');
    const contenPiePag= $('<div class="container-fluid pie-pag "></div>');
    const itemPie1 = $('<div class=" col-lg-4 col-xs-12 pie-pag--item"></div>');
    const logoPie = $('  <img class="pdx2" src="assets/img/logo-footer.png" alt="Laboratoria"></div>');
    const textItem1 = $('  <p class="pie-pag--text">Editado por Laboratoria</p><p class="pie-pag--text">Av. Jose Pardo #601 Lima 1 Peru</p><p class="pie-pag--text">Copyright Laboratoria.la</p><p class="pie-pag--text">Todos lo derechos reservados</p><hr class="visible-xs"><p class="visible-xs text-center">Ver mas</p>');
    const itemPie2 = $('<div class="col-lg-4 hidden-xs pie-pag--item pie-pag--item__bf ">');
    const textItem2 = $('<p class="pie-pag--text pie-pag--text__pd">DIRECTOR GENERAL :</p>'+
                        '<span class="">Francisco Miro</span>'+
                        '<p class="pie-pag--text pie-pag--text__pd">DIRECTOR PERIODISTICO :</p>'+
                        '<span class="">Fernando Berckemeyer Olaechea</span><br>'+
                        '<p class="pie-pag--text pie-pag--text__pd">SUSCRIPCIONES :</p>'+
                        '<span class="">suscriptores@comercio.com.pe</span><br>'+
                        '<p class="pie-pag--text pie-pag--text__pd">PUBLICIDAD ONLINE :</p>'+
                        '<span class="">fonoavisos@comercio.com.pe</span><br>'+
                        '<p class="pie-pag--text pie-pag--text__pd">CLUB DEL COMERCIO :</p>'+
                        '<span class="">clubelcomercio@comercio.com.pe</span>'+
                        '<span class="">Compromiso de Autoregulacion Comercial</span><br>');
    const itemPie3 = $('  <div class="col-lg-4 hidden-xs pie-pag--item "></div>');
    const textItem3 = $('<p class="pie-pag--text pie-pag--text__pd">TERMINOS Y CONDICIONES DE USO</p>'+
                        '<p class="pie-pag--text">TRABAJA CON NOSOTROS</p>'+
                        '<p class="pie-pag--text">LIBRO DE RECLAMACIONES</p>'+
                        '<p class="pie-pag--text">SEDES PRINCIPALES</p>'+
                        '<p class="pie-pag--text pdx3">POLITICAS DE PRIVACIDAD</p>'+
                        '<span class=""> SIGUENOS</span>'+
                        '<i class="pie-pag--icon fa fa-facebook fa-2x" aria-hidden="true"></i>'+
                        '<i class="pie-pag--icon fa fa-twitter fa-2x" aria-hidden="true"></i>'+
                        '<i class="pie-pag--icon fa fa-linkedin fa-2x" aria-hidden="true"></i>'+
                         '<a class="hidden-xs pie-pag--bntUp" href="#principal"><img class="imgUp" src="assets/img/flecha3.png" alt="">SUBIR</a>');

    piePagina.append(contenPiePag);
    contenPiePag.append(itemPie1);
    itemPie1.append(logoPie);
    itemPie1.append(textItem1);
    contenPiePag.append(itemPie2);
    itemPie2.append(textItem2);
    contenPiePag.append(itemPie3);
    itemPie3.append(textItem3);

    return piePagina;
}

'use strict';

const render = (root) => {
    root.empty();
    root.append(Header());
    root.append(Principal());
    root.append(Mundo());
    root.append(Tecnologia());
    root.append(Educacion());
    root.append(Opinion());
    root.append(Carousel());
    root.append(Footer());

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
        //console.log(laboratoriaNews.idCategories);
    });

    getJSON('/api/news/' + laboratoriaNews.idNew, (err, json) => {
        laboratoriaNews.idNew = json;
        //  console.log(laboratoriaNews.idNew);
    });

});

},{}]},{},[1])