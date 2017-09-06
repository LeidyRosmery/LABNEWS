'use strict';
const Mundo = (update) => {
    const mundo = $('<section class="mundo padBoth">');
    const container = $('<div class="container-fluid ">');
    const row1 = $("<div class='row'>");
    const tituloSeccion = $(' <div class="pd col-lg-12 col-md-12 col-xs-12 "><h3 class="category--title"> MUNDO</h3><hr class="category--underline"></div> ');
    const itemMundo1 = $('<div class="pd col-lg-3  col-md-3  col-xs-12 col-sm-12">');
    const imgPlay = $('<img class="news--play news--play__lg play--md" src="assets/img/play-button.png" alt="">');
    const imgMundo1 = $('<img class="news news--img__lg img-responsive img--md" src="assets/img/' + laboratoriaNews.news[4].img + '" alt="">');
    const divTextMundo1 = $('<div class="news--detail col-lg-3  col-md-3  col-xs-12 col-sm-12 " >');
    const textMundo1 = $('  <p class="title news--titleLetter">' + changeColor(laboratoriaNews.news[4].title , 0,2) + '</p>');
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
    const textSubItem = $('  <p class="title">' + changeColor(laboratoriaNews.news[5].title , 0,2)  + ' newspaper</p>');
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
    const textSubItem1 = $('  <p class="title news--titleLetter">' + laboratoriaNews.news[6].title + '</p>');
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
    const textSubItem2 = $('  <p class="title">' + laboratoriaNews.news[8].title + '</p>');
    itemMundo2.append(rowSubItem2);
    rowSubItem2.append(subItem2);
    subItem2.append(imgSubItem2);
    subItem2.append(divTextSubItem2);
    divTextSubItem2.append(textSubItem2);

    const subItem3 = $('<div class="pd col-lg-12  col-xl-12  col-sm-12 col-xs-12 ">');
    const imgSubItem3 = $('<img class="news news--img__sm img-responsive img--sm" src="assets/img/' + laboratoriaNews.news[9].img + '" alt="">');
    const divTextSubItem3 = $('<div class="news--detail news--detail__sm detail--sm col-lg-12  col-xl-12  col-sm-12 col-xs-12">');
    const textSubItem3 = $('  <p class="title">' + changeColor(laboratoriaNews.news[9].title , 0,2)  + '</p>');
    rowSubItem2.append(subItem3);
    subItem3.append(imgSubItem3);
    subItem3.append(divTextSubItem3);
    divTextSubItem3.append(textSubItem3);

    const itemMundo3 = $('<div class="pd col-lg-3 col-md-3  hidden-xs hidden-sm ">');
    const imgMundo3 = $('<img class="news news--img__lg img-responsive" src="assets/img/' + laboratoriaNews.news[7].img + '" alt="">');
    const divTextMundo3 = $('<div class="news--detail col-lg-3 col-md-3  hidden-xs hidden-sm ">');
    const textMundo3 = $('<p class="title">' + laboratoriaNews.news[7].title + '</p>');
    row1.append(itemMundo3)
    itemMundo3.append(imgMundo3);
    itemMundo3.append(divTextMundo3);
    divTextMundo3.append(textMundo3);



    const row2 = $('<div class="row hidden-xs hidden-sm">');
    container.append(row2);
    const itemMundo4 = $('<div class="pd col-lg-3">');
    const imgMundo4 = $('<img class="news news--img__md img-responsive" src="assets/img/' + laboratoriaNews.news[10].img + '" alt="">');
    const divTextMundo4 = $('<div class="news--detail col-lg-3">');
    const textMundo4 = $('<p class="title">' + laboratoriaNews.news[10].title + '</p>');
    row2.append(itemMundo4)
    itemMundo4.append(imgMundo4);
    itemMundo4.append(divTextMundo4);
    divTextMundo4.append(textMundo4);

    const itemMundo5 = $('<div class="pd col-lg-3">');
    const imgMundo5 = $('<img class="news news--img__md img-responsive" src="assets/img/' + laboratoriaNews.news[11].img + '" alt="">');
    const divTextMundo5 = $('<div class="news--detail col-lg-3">');
    const textMundo5 = $('<p class="title news--titleLetter">' + laboratoriaNews.news[11].title + '</p>');
    const letter5 = $('<span class="news--letter">HOY</span>');

    row2.append(itemMundo5)
    itemMundo5.append(imgMundo5);
    itemMundo5.append(divTextMundo5);
    divTextMundo5.append(textMundo5);
    divTextMundo5.append(letter5);

    const itemMundo6 = $('<div class="pd col-lg-3">');
    const imgMundo6 = $('<img class="news  news--img__md img-responsive" src="assets/img/' + laboratoriaNews.news[12].img + '" alt="">');
    const divTextMundo6 = $('<div class="news--detail col-lg-3">');
    const textMundo6 = $('<p class="title news--titleLetter">' + laboratoriaNews.news[12].title + '</p>');
    const letter6 = $('<span class="news--letter">HOY</span>');
    row2.append(itemMundo6);
    itemMundo6.append(imgMundo6);
    itemMundo6.append(divTextMundo6);
    divTextMundo6.append(textMundo6);
    divTextMundo6.append(letter6);

    const itemMundo7 = $('<div class="pd col-lg-3">');
    const imgMundo7 = $('<img class="news news--img__md img-responsive" src="assets/img/' + laboratoriaNews.news[13].img + '" alt="">');
    const divTextMundo7 = $('<div class="news--detail col-lg-3">');
    const textMundo7 = $('<p class="title">' + laboratoriaNews.news[13].title + '</p>');
    row2.append(itemMundo7);
    itemMundo7.append(imgMundo7);
    itemMundo7.append(divTextMundo7);
    divTextMundo7.append(textMundo7);

    return mundo;
}
