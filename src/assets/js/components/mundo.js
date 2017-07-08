'use strict';
 const Mundo = () => {
    const mundo = $('<section class="principal">');
    const tituloSeccion=$('  <h3> mundo</h3>');
    const container= $('<div class="container-fluid ">');
    const row1=$("<div class='row noticia'>");

    const col1=$('<div class="col-lg-3  col-md-3  col-xs-12 col-sm-12 new">');
    const img15=$('<img class="new__imgNew" src="assets/img/'+laboratoriaNews.news[0].img+'" alt="">');
    const text15=$('<h3> </h3>');
    mundo.append(container)
    mundo.append(tituloSeccion);
    container.append(row1);
    row1.append(col1)
    col1.append(img15);
    col1.append(text15);

    const col2=$('<div class="col-lg-6 col-md-6  col-sm-12 col-xs-12  new ">');

    const subCol1=$('<div class="col-lg-6  col-md-6 col-sm-12 col-xs-12 new new__small">');
    const img1=$('<img class="new__imgNew new__imgNew--small" src="assets/img/'+laboratoriaNews.news[0].img+'" alt="">');
    const text1=$('<h3> </h3>');
    row1.append(col2)
    col2.append(subCol1);
    subCol1.append(img1);
    subCol1.append(text1);


    const subCol2=$('<div class="col-lg-6  col-xl-6 hidden-xs hidden-sm new new new__small">');
    const img2=$('<img class="new__imgNew new__imgNew--small" src="assets/img/'+laboratoriaNews.news[0].img+'" alt="">');
    const text2=$('<h3> </h3>');
    col2.append(subCol2);
    subCol2.append(img2);
    subCol2.append(text2);

     const subCol3=$('<div class="col-lg-12  col-xl-12  col-sm-12 col-xs-12 new new__smallXS">');
    const img3=$('<img class="new__imgNew new__imgNew--small" src="assets/img/'+laboratoriaNews.news[0].img+'" alt="">');
    const text3=$('<h3> </h3>');
    col2.append(subCol3);
    subCol3.append(img3);
    subCol3.append(text3);

    const subCol4=$(' <div class="col-lg-12  col-xl-12  col-sm-12 col-xs-12 new new__smallXS">');
    const img4=$('<img class="new__imgNew new__imgNew--small" src="assets/img/'+laboratoriaNews.news[0].img+'" alt="">');
    const text4=$('<h3> </h3>');
    col2.append(subCol4);
    subCol4.append(img4);
    subCol4.append(text4);


    const col3=$('<div class="col-lg-3 col-md-3  hidden-xs hidden-sm new">');

    const img5=$('<img class="new__imgNew"  src="assets/img/'+laboratoriaNews.news[0].img+'" alt="">');
    const text5=$('<h3> </h3>');
    row1.append(col3)
    col3.append(img5);
    col3.append(text5);



    const row2=$('<div class="row hidden-xs hidden-sm">');

    container.append(row2);
    const col4=$(' <div class="col-lg-3 new new__small">');
    const img7=$('<img class="new__imgNew" src="assets/img/'+laboratoriaNews.news[0].img+'" alt="">');
    const text7=$('<h3> </h3>');
    row2.append(col4)
    col4.append(img7);
    col4.append(text7);

    const col5=$(' <div class="col-lg-3 new new__small">');
    const img8=$('<img class="new__imgNew" src="assets/img/'+laboratoriaNews.news[0].img+'" alt="">');
    const text8=$('<h3> </h3>');
    row2.append(col5)
    col5.append(img8);
    col5.append(text8);

    const col6=$(' <div class="col-lg-3 new new__small">');
    const img9=$('<img class="new__imgNew" src="assets/img/'+laboratoriaNews.news[0].img+'" alt="">');
    const text9=$('<h3> </h3>');
    row2.append(col6)
    col6.append(img9);
    col6.append(text9);

    const col7=$(' <div class="col-lg-3 new new__small">');
    const img10=$('<img class="new__imgNew" src="assets/img/'+laboratoriaNews.news[0].img+'" alt="">');
    const text10=$('<h3> </h3>');
    row2.append(col7)
    col7.append(img10);
    col7.append(text10);



   return mundo;
 }
