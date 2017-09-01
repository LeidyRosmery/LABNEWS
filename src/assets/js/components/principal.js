'use strict';
const Principal = () => {
    const principal = $('<section class="principal padBoth">');
    const container = $('<div class="container-fluid ">');
    const row = $("<div class='row pd'>");
    const divImg1 = $("<div class='col-lg-12 col-md-12 col-xs-12 col-sm-12 '>");
    const img1 = $('<img class="img-responsive" src="assets/img/' + laboratoriaNews.news[0].img + '" alt="">');
    const divText1= $("<div class='hidden-xs text-justify col-lg-8 col-md-12 col-xs-12 col-sm-12 newsInf'>");
    const title1 = $('<h2 class="title-news"> ' + laboratoriaNews.news[0].title + '</h2>');
    const text1 = $('<p  class="newsInf--text hidden-xs"> ' + laboratoriaNews.news[0].brief + '</p>');
    principal.append(container)
    container.append(row);
    row.append(divImg1);
    divImg1.append(img1);
    row.append(divText1);
    divText1.append(title1);
    divText1.append(text1);

    const row2 = $('<div class="row noticia">');
    const divImg2 = $('<div class="pd col-lg-6 col-md-6 col-xs-12 col-sm-12 ">');
    const img2 = $('<img class="news news--img__lg img-responsive" src="assets/img/' + laboratoriaNews.news[1].img + '">');
    const divText2 = $('<div class="news--detail col-lg-6 col-md-6 col-xs-12 col-sm-12 ">');
    const text2 = $('  <p> ' + laboratoriaNews.news[1].title + '</p>');
    container.append(row2);
    row2.append(divImg2)
    divImg2.append(img2);
    divImg2.append(divText2);
    divText2.append(text2);


    const divImg3 = $('<div class="pd col-lg-3 col-md-3 col-xs-12 col-sm-12 ">');
    const img3 = $('<img class="news news--img__lg img-responsive" src="assets/img/' + laboratoriaNews.news[2].img + '" alt="">');
    const divText3 = $('<div class="news--detail col-lg-3 col-md-3 col-xs-12 col-sm-12 ">');
    const text3 = $('  <p>' + laboratoriaNews.news[2].title + '</p>');
    row2.append(divImg3)
    divImg3.append(img3);
    divImg3.append(divText3);
    divText3.append(text3);

    const divImg4 = $('<div class="pd col-lg-3 col-md-3 col-xs-12 col-sm-12 new" >');
    const img4 = $('<img class="news news--img__lg img-responsive" src="assets/img/' + laboratoriaNews.news[3].img + '" alt="">');
    const divText4 = $('<div class="news--detail col-lg-3 col-md-3 col-xs-12 col-sm-12 new__textLG" >');
    const text4 = $('  <p>' + laboratoriaNews.news[3].title + '</p>');
    row2.append(divImg4)
    divImg4.append(img4);
    divImg4.append(divText4);
    divText4.append(text4);

    return principal;
}
