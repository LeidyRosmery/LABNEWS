'use strict';
const Mundo = () => {
    const mundo = $('<section class="mundo padBoth">');
    const tituloSeccion = $('  <h3> mundo</h3>');
    const container = $('<div class="container-fluid ">');
    const row1 = $("<div class='row'>");
    const itemMundo1 = $('<div class="pd col-lg-3  col-md-3  col-xs-12 col-sm-12">');
    const imgMundo1 = $('<img class="news news--img__lg img-responsive" src="assets/img/' + laboratoriaNews.news[4].img + '" alt="">');
    const divTextMundo1 = $('<div class="news--detail col-lg-3  col-md-3  col-xs-12 col-sm-12 " >');
    const textMundo1 = $('  <p>' + laboratoriaNews.news[4].title + '</p>');

    mundo.append(tituloSeccion);
    mundo.append(container);
    container.append(row1);
    row1.append(itemMundo1)
    itemMundo1.append(imgMundo1);
    itemMundo1.append(divTextMundo1);
    divTextMundo1.append(textMundo1)

    const itemMundo2 = $('<div class=" col-lg-6 col-md-6  col-sm-12 col-xs-12 ">');
    const rowSubItem1=$('<div class="row "></div>');
    const subItem = $('<div class="pd col-lg-6  col-md-6 col-sm-12 col-xs-12">');
    const imgSubItem = $('<img class="news--img__md img-responsive" src="assets/img/' + laboratoriaNews.news[5].img + '" alt="">');
    const divTextSubItem = $('<div class="news news--detail col-lg-6 col-md-6  col-sm-12 col-xs-12 ">');
    const textSubItem = $('  <p>' + laboratoriaNews.news[5].title + '</p>');
    row1.append(itemMundo2)
    itemMundo2.append(rowSubItem1);
    rowSubItem1.append(subItem);
    subItem.append(imgSubItem);
    subItem.append(divTextSubItem);
    divTextSubItem.append(textSubItem);


    const subItem1 = $('<div class="pd col-lg-6  col-xl-6 hidden-xs hidden-sm ">');
    const imgSubItem1 = $('<img class="news news--img__md img-responsive" src="assets/img/' + laboratoriaNews.news[6].img + '" alt="">');
    const divTextSubItem1 = $('<div  class="news--detail col-lg-6  col-xl-6 hidden-xs hidden-sm ">');
    const textSubItem1 = $('  <p>' + laboratoriaNews.news[6].title + '</p>');
    rowSubItem1.append(subItem1);
    subItem1.append(imgSubItem1);
    subItem1.append(divTextSubItem1);
    divTextSubItem1.append(textSubItem1);


    const rowSubItem2=$('<div class="row"></div>');
    const subItem2 = $('<div class="pd col-lg-12  col-xl-12  col-sm-12 col-xs-12 pd">');
    const imgSubItem2 = $('<img class="news news--img__sm img-responsive" src="assets/img/' + laboratoriaNews.news[8].img + '" alt="">');
    const divTextSubItem2 = $('<div class="news--detail news--detail__sm  col-lg-12  col-xl-12  col-sm-12 col-xs-12">');
    const textSubItem2 = $('  <p>' + laboratoriaNews.news[8].title + '</p>');
    itemMundo2.append(rowSubItem2);
    rowSubItem2.append(subItem2);
    subItem2.append(imgSubItem2);
    subItem2.append(divTextSubItem2);
    divTextSubItem2.append(textSubItem2);

    const subItem3 = $('<div class="pd col-lg-12  col-xl-12  col-sm-12 col-xs-12 ">');
    const imgSubItem3 = $('<img class="news news--img__sm img-responsive" src="assets/img/' + laboratoriaNews.news[9].img + '" alt="">');
    const divTextSubItem3 = $('<div class="news--detail news--detail__sm  col-lg-12  col-xl-12  col-sm-12 col-xs-12">');
    const textSubItem3 = $('  <p>' + laboratoriaNews.news[9].title + '</p>');
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
    const textMundo5 = $('<p>' + laboratoriaNews.news[11].title + '</p>');
    row2.append(itemMundo5)
    itemMundo5.append(imgMundo5);
    itemMundo5.append(divTextMundo5);
    divTextMundo5.append(textMundo5);

    const itemMundo6 = $('<div class="pd col-lg-3">');
    const imgMundo6 = $('<img class="news  news--img__md img-responsive" src="assets/img/' + laboratoriaNews.news[12].img + '" alt="">');
    const divTextMundo6 = $('<div class="news--detail col-lg-3">');
    const textMundo6 = $('<p>' + laboratoriaNews.news[12].title + '</p>');
    row2.append(itemMundo6);
    itemMundo6.append(imgMundo6);
    itemMundo6.append(divTextMundo6);
    divTextMundo6.append(textMundo6);

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
