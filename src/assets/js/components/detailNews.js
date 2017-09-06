const DetailNews = (update) => {

    const detailNews = $('<section class="educacion padBoth">');
    const container = $('<div class="container-fluid ">');
    const row = $("<div class='row pdx1'>");
    const hr1 = $('<hr class="hidden-xs article--borde">');
    const tituloSeccion = $(' <div class="pd hidden-xs col-lg-12 col-md-12 col-xs-12 "><h3 class="category--title">EDUCACION</h3><hr class="category--underline"></div> ');
    const divImg1 = $("<div class='pd col-lg-12 col-md-12 col-xs-12 col-sm-12 '>");
    const img1 = $('<img class="news news--img__lg img--lg img-responsive" src="assets/img/foto-n1.png" alt="">');
    const hr2 = $('<hr class="article--borde pdx1">');
    const row3 = $("<div class='row'>");
    const divText1 = $("<div class='title--article text-left col-lg-9 col-md-12 col-xs-12 col-sm-12'>");
    const title1 = $('<h2 class=""> ' + laboratoriaNews.news[0].title + '</h2>');
    const divTexts = $("<div class='title--article text-left col-lg-6 col-md-12 col-xs-12 col-sm-12'>");
    const text1 = $('<p  class="subtitle--article"><strong> ' + laboratoriaNews.news[0].brief + '</strong></p>');

    detailNews.append(container)
    container.append(row);
    row.append(hr1);
    row.append(tituloSeccion);
    row.append(divImg1);
    divImg1.append(row3);
    row3.append(divText1);
    divText1.append(title1);
    row3.append(divTexts);
    divTexts.append(text1);
    divImg1.append(img1);
    row.append(hr2);
    const row2 = $("<div class='row'>");
    const colLeft = $('<div class="pd text-justify col-lg-3 col-md-12 col-xs-12 ">');
    const news = $(laboratoriaNews.selectedNews.body);
    const newsText = laboratoriaNews.selectedNews.body.split("</p>");
    const news0 = (boldFont(changeColor(boldFont(newsText[0], 27, 45), 49, 52), 5, 11) + '</p>');
    const news1 = $(newsText[1] + '</p>');
    const news2 = $(newsText[2] + '</p>');

    const XSrelationNews = $('<div class="hidden-lg row"></div>');
    const XStitleRelationNews = $(' <div class="pdx1  col-lg-12 col-md-12 col-xs-12 "><h3 class="category--title">NOTICIAS RELACIONADAS</h3><hr class="category--underline"></div><br> ');
    const XScol1 = $('<div class="col-lg-6 col-xs-6 "></div>');
    const XSimgRelation1 = $('<img class=" img-responsive" src="assets/img/foto-n3.png" alt="">');
    const XScol2 = $('<div class="col-lg-6 col-xs-6 "></div>');
    const XSimgRelation2 = $('<img class=" img-responsive" src="assets/img/foto-n4.png" alt="">');
    const XStextTitle2 = $('<p class="">Laboratoria 2017 Titulo Noticia</p>');
    const XStextTitle3 = $('<p class="">Laboratoria 2017 Titulo Noticia</p>');
    const news3 = $(newsText[3] + '</p>');
    const news4 = $(boldFont(newsText[4], 25, 60) + '</p>');
    const news5 = $(newsText[5] + '</p>');
    const XSpopularNews = $('<div class="hidden-lg row"></div>');
    const XSsubItem1 = $('<div class="col-lg-12  col-xl-12  col-sm-12 col-xs-12 ">');
    const XSimgSubItem1 = $('<img class="news imgArticle img-responsive img--sm" src="assets/img/foto-n5.png" alt="">');
    const XSdivTextSubItem1 = $('<div class="detailArticle  news--detail__sm detail--sm col-lg-12  col-xl-12  col-sm-12 col-xs-12">');
    const XStextSubItem1 = $('<p class="">Noticia mas popular Laboratoria 2017</p>');
    const XStitleRelationNews1 = $(' <div class="pdx1  col-lg-12 col-md-12 col-xs-12 "><h3 class="category--title">NOTICIAS POPULARES</h3><hr class="category--underline"></div><br><br> ');


    const XSsubItem2 = $('<div class="col-lg-12  col-xl-12  col-sm-12 col-xs-12 ">');
    const XSimgSubItem2 = $('<img class="news imgArticle  img-responsive img--sm" src="assets/img/foto-n6.png" alt="">');
    const XSdivTextSubItem2 = $('<div class="detailArticle  news--detail__sm detail--sm col-lg-12  col-xl-12  col-sm-12 col-xs-12">');
    const XStextSubItem2 = $('<p class="">Noticia mas popular Laboratoria 2017</p>');


    const news6 = $(newsText[6] + '</p>');
    const news7 = $(changeColor(newsText[7], 3, 10) + '</p>');
    const colRight = $('<div class="pd text-justify col-lg-9 col-md-12 col-xs-12 ">');
    const divPerfil = $('<div class="pd text-justify col-lg-12 col-md-12 col-xs-12 ">');
    const divLeft = $('<div class="pd text-justify col-lg-1 col-md-12 col-xs-4 ">');
    const imgPerfil = $('<img class="perfil" src="assets/img/dianaluque.png" alt="">');
    const divRight = $('<div class=" text-left col-lg-9 col-md-12 col-xs-8 ">');
    const person = $("<p>DIANA LUQUE LAVADO </p>");
    const date = $("<p>22.06.17 12:36 pm </p>");
    const socialMedia = $("<p>@photosynthetica</p>");
    container.append(row2);
    row2.append(colRight);
    row2.append(colLeft);
    colRight.append(divPerfil);
    divPerfil.append(divLeft)
    divLeft.append(imgPerfil);
    divPerfil.append(divRight)
    divRight.append(person);
    divRight.append(date);
    divRight.append(socialMedia);
    colRight.append(news0);
    colRight.append(news1);
    colRight.append(news2);
    colRight.append(XSrelationNews);
    XSrelationNews.append(XStitleRelationNews);
    XSrelationNews.append(XScol1);
    XSrelationNews.append(XScol2);
    XScol1.append(XSimgRelation1);
    XScol2.append(XSimgRelation2);
    XScol1.append(XStextTitle2);
    XScol2.append(XStextTitle3);
    colRight.append(news3);
    colRight.append(news4);
    colRight.append(news5);
    colRight.append(XSpopularNews);
    XSpopularNews.append(XStitleRelationNews1);
    XSpopularNews.append(XSsubItem1);
    XSsubItem1.append(XSimgSubItem1);
    XSsubItem1.append(XSdivTextSubItem1);
    XSdivTextSubItem1.append(XStextSubItem1);
    XSpopularNews.append(XSsubItem2);
    XSsubItem2.append(XSimgSubItem2);
    XSsubItem2.append(XSdivTextSubItem2);
    XSdivTextSubItem2.append(XStextSubItem2);
    colRight.append(news6);
    colRight.append(news7);


    const relationNews = $('<div class="row hidden-xs"></div>');
    const titleRelationNews = $(' <div class="pdx1  col-lg-12 col-md-12 col-xs-12 "><h3 class="category--title">NOTICIAS RELACIONADAS</h3><hr class="category--underline"></div><br> ');
    const col1 = $('<div class="col-lg-6 "></div>');
    const imgRelation1 = $('<img class=" img-responsive" src="assets/img/foto-n3.png" alt="">');
    const col2 = $('<div class="col-lg-6 "></div>');
    const imgRelation2 = $('<img class=" img-responsive" src="assets/img/foto-n4.png" alt="">');
    const textTitle2 = $('<p class="">Laboratoria 2017 Titulo Noticia</p>');
    const textTitle3 = $('<p class="">Laboratoria 2017 Titulo Noticia</p>');
    colLeft.append(relationNews);
    relationNews.append(titleRelationNews);
    relationNews.append(col1);
    relationNews.append(col2);
    col1.append(imgRelation1);
    col2.append(imgRelation2);
    col1.append(textTitle2);
    col2.append(textTitle3);

    const popularNews = $('<div class="hidden-xs row"></div>');
    colLeft.append(popularNews);
    const subItem1 = $('<div class="col-lg-12  col-xl-12  col-sm-12 col-xs-12 ">');
    const imgSubItem1 = $('<img class="news imgArticle img-responsive img--sm" src="assets/img/foto-n5.png" alt="">');
    const divTextSubItem1 = $('<div class="detailArticle  news--detail__sm detail--sm col-lg-12  col-xl-12  col-sm-12 col-xs-12">');
    const textSubItem1 = $('<p class="">Noticia mas popular Laboratoria 2017</p>');
    const titleRelationNews1 = $(' <div class="pdx1  col-lg-12 col-md-12 col-xs-12 "><h3 class="category--title">NOTICIAS POPULARES</h3><hr class="category--underline"></div><br><br> ');
    popularNews.append(titleRelationNews1);
    subItem1.append(imgSubItem1);
    subItem1.append(divTextSubItem1);
    divTextSubItem1.append(textSubItem1);

    const subItem2 = $('<div class="col-lg-12  col-xl-12  col-sm-12 col-xs-12 ">');
    const imgSubItem2 = $('<img class="news imgArticle  img-responsive img--sm" src="assets/img/foto-n6.png" alt="">');
    const divTextSubItem2 = $('<div class="detailArticle  news--detail__sm detail--sm col-lg-12  col-xl-12  col-sm-12 col-xs-12">');
    const textSubItem2 = $('<p class="">Noticia mas popular Laboratoria 2017</p>');
    popularNews.append(subItem2);
    subItem2.append(imgSubItem2);
    subItem2.append(divTextSubItem2);
    divTextSubItem2.append(textSubItem2);

    const subItem3 = $('<div class="col-lg-12  col-xl-12  col-sm-12 col-xs-12 ">');
    const imgSubItem3 = $('<img class="news imgArticle  img-responsive img--sm" src="assets/img/foto-n7.png" alt="">');
    const divTextSubItem3 = $('<div class="detailArticle news--detail__sm detail--sm col-lg-12  col-xl-12  col-sm-12 col-xs-12">');
    const textSubItem3 = $('<p class="">Noticia mas popular Laboratoria 2017</p>');
    popularNews.append(subItem3);
    subItem3.append(imgSubItem3);
    subItem3.append(divTextSubItem3);
    divTextSubItem3.append(textSubItem3);

    const subItem4 = $('<div class="col-lg-12  col-xl-12  col-sm-12 col-xs-12 ">');
    const imgSubItem4 = $('<img class="news imgArticle  img-responsive img--sm" src="assets/img/foto-n8.png" alt="">');
    const divTextSubItem4 = $('<div class="detailArticle news--detail__sm detail--sm col-lg-12  col-xl-12  col-sm-12 col-xs-12">');
    const textSubItem4 = $('<p class="">Noticia mas popular Laboratoria 2017</p>');
    popularNews.append(subItem4);
    subItem4.append(imgSubItem4);
    subItem4.append(divTextSubItem4);
    divTextSubItem4.append(textSubItem4);

    const subItem5 = $('<div class="col-lg-12  col-xl-12  col-sm-12 col-xs-12 ">');
    const imgSubItem5 = $('<img class="news imgArticle img-responsive img--sm" src="assets/img/foto-n9.png" alt="">');
    const divTextSubItem5 = $('<div class="detailArticle news--detail__sm detail--sm col-lg-12  col-xl-12  col-sm-12 col-xs-12">');
    const textSubItem5 = $('<p class="">Noticia mas popular Laboratoria 2017</p>');
    popularNews.append(subItem5);
    subItem5.append(imgSubItem5);
    subItem5.append(divTextSubItem5);
    divTextSubItem5.append(textSubItem5);
    $("#returnMenu").css("display", "block");
    $("#menuMovil").css("display", "block");

    $("#returnMenu").on('click', () => {
        state.currentScreen = 'principal';
        update();
    });

    $("#menuMovil").on('click', () => {
        state.currentScreen = 'principal';
        update();
    });


    return detailNews;
}
