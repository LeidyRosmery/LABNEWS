'use strict';
const Tecnologia = () => {
    const tecnologia = $('<section class="tecnologia padBoth">');
    const tituloSeccion = $('  <h3> Tecnologia</h3>');
    const container = $('<div class="container-fluid ">');
    const row = $("<div class='row noticia'>");
    tecnologia.append(tituloSeccion);
    tecnologia.append(container)
    container.append(row);

    const itemTecnologia = $('<div class="col-lg-6  col-xmd-6 col-sm-12 col-xs-12 ">');
    const imgTecnologia = $('<img class="news news--img__lg img-responsive" src="assets/img/' + laboratoriaNews.news[14].img + '" alt="">');
    const divTextTecnologia = $('<div class="news--detail col-lg-3  col-md-3  col-xs-12 col-sm-12 " >');
    const textTecnologia = $('  <p>' + laboratoriaNews.news[14].title + '</p>');
    row.append(itemTecnologia)
    itemTecnologia.append(imgTecnologia);
    itemTecnologia.append(divTextTecnologia);
    divTextTecnologia.append(textTecnologia)


    const col2 = $('<div class="col-lg-6 col-xl-6 col-sm-12 col-xs-12 new ">');
    row.append(col2);
    const rowSubItem1=$('<div class="row pd"></div>');
    const itemTecnologia1 = $('<div class="col-lg-6  col-md-6  hidden-xs hidden-sm ">');
    const imgTecnologia1 = $('<img class="news news--img__md img-responsive" src="assets/img/' + laboratoriaNews.news[15].img + '" alt="">');
    const divTextTecnologia1 = $('<div class="news--detail col-lg-3  col-md-3  col-xs-12 col-sm-12 " >');
    const textTecnologia1 = $('  <p>' + laboratoriaNews.news[15].title + '</p>');
    col2.append(rowSubItem1);
    rowSubItem1.append(itemTecnologia1);
    itemTecnologia1.append(imgTecnologia1);
    itemTecnologia1.append(divTextTecnologia1);
    divTextTecnologia1.append(textTecnologia1);

    const itemTecnologia2 = $('<div class="col-lg-6  col-md-6  hidden-xs hidden-sm ">');
    const imgTecnologia2 = $('<img class="news news--img__md img-responsive" src="assets/img/' + laboratoriaNews.news[16].img + '" alt="">');
    const divTextTecnologia2 = $('<div class="news--detail col-lg-3  col-md-3  col-xs-12 col-sm-12 " >');
    const textTecnologia2 = $('  <p>' + laboratoriaNews.news[16].title + '</p>');
    rowSubItem1.append(itemTecnologia2);
    itemTecnologia2.append(imgTecnologia2);
    itemTecnologia2.append(divTextTecnologia2);
    divTextTecnologia2.append(textTecnologia2);

    const rowSubItem2=$('<div class="row"></div>');
    const itemTecnologia3 = $('<div class="col-lg-12  col-md-12 col-sm-12 col-xs-12 pd">');
    const imgTecnologia3 = $('<img class="news news--img__sm img-responsive" src="assets/img/' + laboratoriaNews.news[17].img + '" alt="">');
    const divTextTecnologia3 = $('<div class="news--detail news--detail__sm  col-lg-12  col-md-12 col-sm-12 col-xs-12 ">');
    const textTecnologia3 = $('  <p>' + laboratoriaNews.news[17].title + '</p>');
    col2.append(rowSubItem2);
    rowSubItem2.append(itemTecnologia3);
    itemTecnologia3.append(imgTecnologia3);
    itemTecnologia3.append(divTextTecnologia3);
    divTextTecnologia3.append(textTecnologia3);

    const itemTecnologia4 = $('<div class="col-lg-12  col-md-12 col-sm-12 col-xs-12 ">');
    const divTextTecnologia4 = $('<div class="news--detail news--detail__sm  col-lg-12  col-md-12 col-sm-12 col-xs-12 ">');
    const imgTecnologia4 = $('<img class="news news--img__sm img-responsive" src="assets/img/' + laboratoriaNews.news[18].img + '" alt="">');
    const textTecnologia4 = $('  <p>' + laboratoriaNews.news[18].title + '</p>');
    rowSubItem2.append(itemTecnologia4);
    itemTecnologia4.append(imgTecnologia4);
    itemTecnologia4.append(divTextTecnologia4);
    divTextTecnologia4.append(textTecnologia4);

    return tecnologia;

}
