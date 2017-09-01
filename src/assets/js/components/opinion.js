'use strict';
const Opinion = () => {
    const opinion = $('<section class="opinion padBoth">');
    const tituloSeccion = $('  <h3> opinion</h3>');
    const container = $('<div class="container-fluid ">');
    const row = $("<div class='row noticia'>");
    opinion.append(tituloSeccion);
    opinion.append(container)

    container.append(row);

    const itemOpinion1 = $('<div class="pd col-lg-3  col-xl-3">');
    const imgOpinion1 = $('<img class="news news--img__lg img-responsive" src="assets/img/' + laboratoriaNews.news[24].img + '" alt="">');
    const divTextOpinion1 = $('<div class="news--detail col-lg-3  col-xl-3">');
    const textOpinion1 = $('  <p>' + laboratoriaNews.news[24].title + '</p>');

    row.append(itemOpinion1);
    itemOpinion1.append(imgOpinion1);
    itemOpinion1.append(divTextOpinion1);
    divTextOpinion1.append(textOpinion1);

    const itemOpinion2 = $('<div class="pd col-lg-3  col-xl-3">');
    const imgOpinion2 = $('<img class="news news--img__lg img-responsive" src="assets/img/' + laboratoriaNews.news[25].img + '" alt="">');
    const divTextOpinion2 = $('<div class="news--detail col-lg-3  col-xl-3">');
    const textOpinion2 = $('  <p>' + laboratoriaNews.news[25].title + '</p>');

    row.append(itemOpinion2);
    itemOpinion2.append(imgOpinion2);
    itemOpinion2.append(divTextOpinion2);
    divTextOpinion2.append(textOpinion2);

    const itemOpinion3 = $('<div class="pd col-lg-3  col-xl-3">');
    const imgOpinion3 = $('<img class="news news--img__lg img-responsive" src="assets/img/' + laboratoriaNews.news[26].img + '" alt="">');
    const divTextOpinion3 = $('<div class="news--detail col-lg-3  col-xl-3">');
    const textOpinion3 = $('  <p>' + laboratoriaNews.news[26].title + '</p>');

    row.append(itemOpinion3);
    itemOpinion3.append(imgOpinion3);
    itemOpinion3.append(divTextOpinion3);
    divTextOpinion3.append(textOpinion3);

    const itemOpinion4 = $('<div class="pd col-lg-3  col-xl-3">');
    const imgOpinion4 = $('<img class="news news--img__lg img-responsive" src="assets/img/' + laboratoriaNews.news[27].img + '" alt="">');
    const divTextOpinion4 = $('<div class="news--detail col-lg-3  col-xl-3">');
    const textOpinion4 = $('  <p>' + laboratoriaNews.news[27].title + '</p>');

    row.append(itemOpinion4);
    itemOpinion4.append(imgOpinion4);
    itemOpinion4.append(divTextOpinion4);
    divTextOpinion4.append(textOpinion4);

    return opinion;
}
