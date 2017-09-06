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
    const textOpinion1 = $('  <p class="title news--titleLetter">' + changeColor(laboratoriaNews.news[24].title , 0,2)  + '</p>');
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
    const textOpinion2 = $('  <p class="title news--titleLetter">' + changeColor(laboratoriaNews.news[25].title , 0,2)  + '</p>');
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
    const textOpinion3 = $('  <p class="title news--titleLetter">' + changeColor(laboratoriaNews.news[26].title , 0,2)  + '</p>');
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
    const textOpinion4 = $('  <p class="title news--titleLetter">' + changeColor(laboratoriaNews.news[27].title , 0,2) + '</p>');
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
    const textOpinion5 = $('  <p class="title news--titleLetter">' + changeColor(laboratoriaNews.news[26].title , 0,2)  + '</p>');
    row.append(itemOpinion5);
    itemOpinion5.append(imgOpinion5);
    itemOpinion5.append(imgPlay5);
    itemOpinion5.append(divTextOpinion5);
    divTextOpinion5.append(textOpinion5);

    return opinion;
}
