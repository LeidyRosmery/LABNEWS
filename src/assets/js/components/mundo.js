'use strict';
 const Mundo = () => {
    const principal = $('<section class="principal">');
    const container= $('<div class="container-fluid ">');
    const row=$("<div class='row noticia'>");
    const divImg1=$("<div class='col-lg-12 col-md-12 col-xs-12 col-sm-12 new'>");
    const img1=$('<img class="new__imgNew" src="assets/img/'+laboratoriaNews.news[0].img+'" alt="">');
    const text1=$('<h3> </h3>');
    principal.append(container)
    container.append(row);
    row.append(divImg1)
    divImg1.append(img1);
    divImg1.append(text1);

    const row2=$('<div class="row noticia">');
    const divImg2=$('<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12 new">');
    const img2=$('<img class="new__imgNew" src="assets/img/'+laboratoriaNews.news[1].img+'">');
    const text2=$('  <h3> </h3>');
    container.append(row2);
    row2.append(divImg2)
    divImg2.append(img2);
    divImg2.append(text2);


    const divImg3=$('<div class="col-lg-3 col-md-3 col-xs-12 col-sm-12 new">');
    const img3=$('<img class="new__imgNew" src="assets/img/'+laboratoriaNews.news[2].img+'" alt="">');
    const text3=$('  <h3> </h3>');

    row2.append(divImg3)
    divImg3.append(img3);
    divImg3.append(text3);

    const divImg4=$('<div class="col-lg-3 col-md-3 col-xs-12 col-sm-12 new" >');
    const img4=$('<img class="new__imgNew" src="assets/img/'+laboratoriaNews.news[3].img+'" alt="">');
    const text4=$('  <h3> </h3>');

    row2.append(divImg4)
    divImg4.append(img4);
    divImg4.append(text4);

   return principal;
 }
