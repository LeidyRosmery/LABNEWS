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
    const textEducacion = $('<p class="title">' + changeColor(laboratoriaNews.news[19].title, 0, 2) + '</p>');
    col1.append(rowSubItem1);
    rowSubItem1.append(itemEducacion);
    itemEducacion.append(imgEducacion);
    itemEducacion.append(divTextEducacion);
    divTextEducacion.append(textEducacion);

    const itemEducacion1 = $('<div class="pd col-lg-6  col-md-6 col-sm-12 col-xs-12 ">');
    const imgPlay = $('<img class="hidden-xs news--play news--play__md" src="assets/img/play-button.png" alt="">');
    const imgEducacion1 = $('<img class="news news--img__md  img-responsive" src="assets/img/' + laboratoriaNews.news[20].img + '" alt="">');
    const divTextEducacion1 = $('<div class="news--detail col-lg-6  col-md-6 col-sm-12 col-xs-12">');
    const textEducacion1 = $('<p class="title">' + changeColor(laboratoriaNews.news[20].title, 0, 2) + '</p>');
    rowSubItem1.append(itemEducacion1);
    itemEducacion1.append(imgEducacion1);
    itemEducacion1.append(imgPlay);
    itemEducacion1.append(divTextEducacion1);
    divTextEducacion1.append(textEducacion1);

    const rowSubItem2 = $('<div class="row"></div>');
    const itemEducacion2 = $('<div class="pd col-lg-12  col-md-12  col-sm-12 col-xs-12">');
    const imgEducacion2 = $('<img class="news news--img__sm img-responsive img--sm" src="assets/img/' + laboratoriaNews.news[23].img + '" alt="">');
    const divTextEducacion2 = $('<div class="news--detail news--detail__sm detail--sm col-lg-6  col-md-6 col-sm-12 col-xs-12">');
    const textEducacion2 = $('  <p class="titleLetter--sm title">' + laboratoriaNews.news[23].title + ' newspaper</p>');
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
    const textEducacion3 = $('  <p class="title titleLetter--sm">' + laboratoriaNews.news[21].title + '</p>');
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
    const textEducacion4 = $('<p class="title news--titleLetter">' + laboratoriaNews.news[22].title + '</p>');
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
    const textEducacion5 = $('  <p class="title titleLetter--sm">' + changeColor(laboratoriaNews.news[24].title, 0, 2) + ' newspaper</p>');
    const letter5 = $('<span class="hidden-lg news--letter letter--sm">HOY</span>');
    col2.append(rowSubItem4);
    rowSubItem4.append(itemEducacion5);
    itemEducacion5.append(imgEducacion5);
    itemEducacion5.append(divTextEducacion5);
    divTextEducacion5.append(textEducacion5);
    divTextEducacion5.append(letter5);

    return educacion;

}
