'use strict';
const Principal = (update) => {
    const principal = $('<section id="principal" class="principal padBoth">');
    const container = $('<div class="container-fluid ">');
    const row = $("<div class='row'>");
    const tituloSeccion = $(' <div class="hidden-lg pd col-lg-12 col-md-12 col-xs-12 "><h3 class="category--title"> LO ULTIMO</h3><hr class="category--underline"></div> ');
    const divImg1 = $("<div class='pd col-lg-12 col-md-12 col-xs-12 col-sm-12 '>");
    const img1 = $('<img class="news news--img__lg img--lg img-responsive" src="assets/img/' + laboratoriaNews.news[0].img + '" alt="">');
    const divText1 = $("<div class=' text-justify col-lg-8 col-md-12 col-xs-12 col-sm-12 newsInf'>");
    const title1 = $('<h2 class="title-news title"> ' + laboratoriaNews.news[0].title + '</h2>');
    const text1 = $('<p  class="hidden-xs newsInf--text hidden-xs"> ' + laboratoriaNews.news[0].brief + '</p>');
    principal.append(container);
    container.append(row);
    row.append(tituloSeccion);
    row.append(divImg1);
    divImg1.append(img1);
    divImg1.append(divText1);
    divText1.append(title1);
    divText1.append(text1);

    row.on('click', () => {
        state.currentScreen = 'article';
        laboratoriaNews.id = 0;
        getJSON('/api/news/' + laboratoriaNews.id, (err, json) => {
            laboratoriaNews.selectedNews = json;
            update();
        });
        update();
    });

    return principal;
}
