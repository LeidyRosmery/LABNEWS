'use strict';
 const Tecnologia = () => {
   const tecnologia = $('<section class="tecnologia">');
   const tituloSeccion=$('  <h3> Tecnologia</h3>');
   const container= $('<div class="container-fluid ">');
   const row=$("<div class='row noticia'>");
tecnologia.append(tituloSeccion);
   tecnologia.append(container)

   container.append(row);

   const col1=$('<div class="col-lg-6  col-xmd-6 col-sm-12 col-xs-12 new">');
   const img=$('<img class="new__imgNew" src="assets/img/'+laboratoriaNews.news[14].img+'" alt="">');
   const texto=$('<h3> </h3>');
   row.append(col1);
   col1.append(img);
   col1.append(texto);

    const col2=$('<div class="col-lg-6 col-xl-6 col-sm-12 col-xs-12 new ">');
    row.append(col2);

    const subCol1=$('<div class="col-lg-6  col-md-6  hidden-xs hidden-sm new new__small">');
    const img1=$('<img class="new__imgNew new__imgNew--small" src="assets/img/'+laboratoriaNews.news[15].img+'" alt="">');
    const texto1=$('<h3> </h3>');
    col2.append(subCol1);
    subCol1.append(img1);
    subCol1.append(texto1);

    const subCol2=$('<div class="col-lg-6  col-md-6 hidden-xs hidden-sm new new__small">');
    const img2=$('<img class="new__imgNew new__imgNew--small" src="assets/img/'+laboratoriaNews.news[16].img+'" alt="">');
    const text2=$('<h3> </h3>');
    col2.append(subCol2);
    subCol2.append(img2);
    subCol2.append(text2);

    const subCol3=$('<div class="col-lg-12  col-md-12 col-sm-12 col-xs-12  new new__smallXS">');
    const img3=$('<img class="new__imgNew new__imgNew--small" src="assets/img/'+laboratoriaNews.news[17].img+'" alt="">');
    const text3=$('<h3> </h3>');
    col2.append(subCol3);
    subCol3.append(img3);
    subCol3.append(text3);

    const subCol4=$('<div class="col-lg-12  col-md-12 col-sm-12 col-xs-12  new new__smallXS">');
    const img4=$('<img class="new__imgNew new__imgNew--small" src="assets/img/'+laboratoriaNews.news[18].img+'" alt="">');
    const text4=$('<h3> </h3>');
    col2.append(subCol4);
    subCol4.append(img4);
    subCol4.append(text4);

    return tecnologia;

 }
