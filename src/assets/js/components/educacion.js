'use strict';
const Educacion = () => {
    const educacion = $('<section class="educacion padBoth">');
    const tituloSeccion = $('  <h3> educacion</h3>');
    const container = $('<div class="container-fluid ">');
    const row = $("<div class='row'>");
    educacion.append(tituloSeccion);
    educacion.append(container)
    container.append(row);

    const col1 = $('<div class="col-lg-6  col-md-6 col-sm-12 col-xs-12">');
    row.append(col1);
    const rowSubItem1=$('<div class="row "></div>');
    const itemEducacion = $('<div class="pd col-lg-6  col-md-6 col-sm-12 col-xs-12 ">');
    const imgEducacion = $('<img class="news news--img__md  img-responsive" src="assets/img/' + laboratoriaNews.news[19].img + '" alt="">');
    const divTextEducacion = $('<div class="news--detail col-lg-6  col-md-6 col-sm-12 col-xs-12">');
    const textEducacion = $('<p>' + laboratoriaNews.news[19].title + '</p>');
    col1.append(rowSubItem1);
    rowSubItem1.append(itemEducacion);
    itemEducacion.append(imgEducacion);
    itemEducacion.append(divTextEducacion);
    divTextEducacion.append(textEducacion);

    const itemEducacion1 = $('<div class="pd col-lg-6  col-md-6 col-sm-12 col-xs-12 ">');
    const imgEducacion1 = $('<img class="news news--img__md  img-responsive" src="assets/img/' + laboratoriaNews.news[20].img + '" alt="">');
    const divTextEducacion1 = $('<div class="news--detail col-lg-6  col-md-6 col-sm-12 col-xs-12">');
    const textEducacion1 = $('<p>' + laboratoriaNews.news[20].title + '</p>');
    rowSubItem1.append(itemEducacion1);
    itemEducacion1.append(imgEducacion1);
    itemEducacion1.append(divTextEducacion1);
    divTextEducacion1.append(textEducacion1);

    const rowSubItem2=$('<div class="row"></div>');
    const itemEducacion2 = $('<div class="pd col-lg-12  col-md-12  col-sm-12 col-xs-12">');
    const imgEducacion2 = $('<img class="news news--img__sm img-responsive" src="assets/img/' + laboratoriaNews.news[21].img + '" alt="">');
    const divTextEducacion2 = $('<div class="news--detail news--detail__sm  col-lg-6  col-md-6 col-sm-12 col-xs-12">');
    const textEducacion2 = $('  <p>' + laboratoriaNews.news[21].title + '</p>');
    col1.append(rowSubItem2 );
    rowSubItem2.append(itemEducacion2);
    itemEducacion2.append(imgEducacion2);
    itemEducacion2.append(divTextEducacion2);
    divTextEducacion2.append(textEducacion2);


    const col2 = $('<div class="col-lg-6  col-md-6 col-sm-12 col-xs-12 new">');
    row.append(col2);

    const rowSubItem3=$('<div class="row "></div>');
    const itemEducacion3 = $('<div class="pd col-lg-6  col-md-6 col-sm-12 col-xs-12 ">');
    const imgEducacion3 = $('<img class="news news--img__md  img-responsive" src="assets/img/' + laboratoriaNews.news[22].img + '" alt="">');
    const divTextEducacion3 = $('<div class="news--detail col-lg-6  col-md-6 col-sm-12 col-xs-12">');
    const textEducacion3 = $('<p>' + laboratoriaNews.news[22].title + '</p>');
    col2.append(rowSubItem3);
    rowSubItem3.append(itemEducacion3);
    itemEducacion3.append(imgEducacion3);
    itemEducacion3.append(divTextEducacion3);
    divTextEducacion3.append(textEducacion3);

    const itemEducacion4 = $('<div class="pd col-lg-6  col-md-6 col-sm-12 col-xs-12 ">');
    const imgEducacion4 = $('<img class="news news--img__md  img-responsive" src="assets/img/' + laboratoriaNews.news[23].img + '" alt="">');
    const divTextEducacion4 = $('<div class="news--detail col-lg-6  col-md-6 col-sm-12 col-xs-12">');
    const textEducacion4 = $('<p>' + laboratoriaNews.news[23].title + '</p>');
    rowSubItem3.append(itemEducacion4);
    itemEducacion4.append(imgEducacion4);
    itemEducacion4.append(divTextEducacion4);
    divTextEducacion4.append(textEducacion4);

    const rowSubItem4=$('<div class="row"></div>');
    const itemEducacion5 = $('<div class="pd col-lg-12  col-md-12  col-sm-12 col-xs-12">');
    const imgEducacion5 = $('<img class="news news--img__sm img-responsive" src="assets/img/' + laboratoriaNews.news[24].img + '" alt="">');
    const divTextEducacion5 = $('<div class="news--detail news--detail__sm  col-lg-6  col-md-6 col-sm-12 col-xs-12">');
    const textEducacion5 = $('  <p>' + laboratoriaNews.news[24].title + '</p>');
    col2.append(rowSubItem4 );
    rowSubItem4.append(itemEducacion5);
    itemEducacion5.append(imgEducacion5);
    itemEducacion5.append(divTextEducacion5);
    divTextEducacion5.append(textEducacion5);

    return educacion;

}
