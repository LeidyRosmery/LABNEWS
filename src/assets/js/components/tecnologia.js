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
    const textTecnologia = $('  <p class="title news--titleLetter">' + changeColor(laboratoriaNews.news[14].title , 0,3)  + '</p>');
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
    const textTecnologia1 = $('  <p class="title">' + laboratoriaNews.news[15].title + '</p>');
    col2.append(rowSubItem1);
    rowSubItem1.append(itemTecnologia1);
    itemTecnologia1.append(imgTecnologia1);
    itemTecnologia1.append(divTextTecnologia1);
    divTextTecnologia1.append(textTecnologia1);

    const itemTecnologia2 = $('<div class="pd col-lg-6  col-md-6  hidden-xs hidden-sm ">');
    const imgTecnologia2 = $('<img class="news news--img__md img-responsive" src="assets/img/' + laboratoriaNews.news[16].img + '" alt="">');
    const divTextTecnologia2 = $('<div class="news--detail col-lg-3  col-md-3  col-xs-12 col-sm-12 " >');
    const textTecnologia2 = $('  <p class="title news--titleLetter">' + changeColor(laboratoriaNews.news[16].title , 0,2)  + '</p>');
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
    const textTecnologia3 = $('  <p class="title">' + laboratoriaNews.news[17].title + '</p>');
    col2.append(rowSubItem2);
    rowSubItem2.append(itemTecnologia3);
    itemTecnologia3.append(imgTecnologia3);
    itemTecnologia3.append(divTextTecnologia3);
    divTextTecnologia3.append(textTecnologia3);

    const itemTecnologia4 = $('<div class="col-lg-12  col-md-12 col-sm-12 col-xs-12 pd">');
    const divTextTecnologia4 = $('<div class="news--detail news--detail__sm detail--sm col-lg-12  col-md-12 col-sm-12 col-xs-12 ">');
    const imgTecnologia4 = $('<img class="news news--img__sm img-responsive img--sm" src="assets/img/' + laboratoriaNews.news[18].img + '" alt="">');
    const textTecnologia4 = $('  <p class="title">' + changeColor(laboratoriaNews.news[18].title , 0,2)  + '</p>');
    rowSubItem2.append(itemTecnologia4);
    itemTecnologia4.append(imgTecnologia4);
    itemTecnologia4.append(divTextTecnologia4);
    divTextTecnologia4.append(textTecnologia4);

    return tecnologia;

}
