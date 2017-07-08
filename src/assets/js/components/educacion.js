'use strict';
 const Educacion = () => {
   const educacion = $('<section class="educacion">');
   const tituloSeccion=$('  <h3> educacion</h3>');
   const container= $('<div class="container-fluid ">');
   const row=$("<div class='row noticia'>");
educacion.append(tituloSeccion);
   educacion.append(container)

   container.append(row);

   const col1=$('<div class="col-lg-6  col-md-6 col-sm-12 col-xs-12 new">');
   row.append(col1);

   const subCol1=$('<div class="col-lg-6  col-md-6 col-sm-12 col-xs-12 new new__small">');
   const img1=$('<img class="new__imgNew new__imgNew--small" src="assets/img/'+laboratoriaNews.news[19].img+'" alt="">');
   const texto1=$('<h3> </h3>');
   col1.append(subCol1);
   subCol1.append(img1);
   subCol1.append(texto1);

   const subCol2=$('<div class="col-lg-6  col-md-6 col-sm-12 col-xs-12 new new__small">');
   const img2=$('<img class="new__imgNew new__imgNew--small" src="assets/img/'+laboratoriaNews.news[20].img+'" alt="">');
   const texto2=$('<h3> </h3>');
   col1.append(subCol2);
   subCol2.append(img2);
   subCol2.append(texto2);

   const subCol3=$('  <div class="col-lg-12  col-md-12 col-sm-12 col-xs-12  new new__smallXS">');
   const img3=$('<img class="new__imgNewXS new__imgNew--small" src="assets/img/'+laboratoriaNews.news[23].img+'" alt="">');
   const texto3=$('<h3> </h3>');
   col1.append(subCol3);
   subCol3.append(img3);
   subCol3.append(texto3);



   const col2=$('<div class="col-lg-6  col-md-6 col-sm-12 col-xs-12 new">');
   row.append(col2);
   const subCol4=$('  <div class="col-lg-6  col-md-6 col-sm-12 col-xs-12 new new__small">');
   const img4=$('<img class="new__imgNew new__imgNew--small" src="assets/img/'+laboratoriaNews.news[21].img+'" alt="">');
   const texto4=$('<h3> </h3>');
   col2.append(subCol4);
   subCol4.append(img4);
   subCol4.append(texto4);

   const subCol5=$('  <div class="col-lg-6  col-md-6 col-sm-12 col-xs-12 new new__small">');
   const img5=$(' <img class="new__imgNew new__imgNew--small" src="assets/img/'+laboratoriaNews.news[22].img+'" alt="">');
   const texto5=$('<h3> </h3>');
   col2.append(subCol5);
   subCol5.append(img5);
   subCol5.append(texto5);

   const subCol6=$('<div class="col-lg-12  col-md-12  col-sm-12 col-xs-12 new new__smallXS">');
   const img6=$('<img class="new__imgNewXS new__imgNew--small" src="assets/img/'+laboratoriaNews.news[24].img+'" alt="">');
   const texto6=$('<h3> </h3>');
   col2.append(subCol6);
   subCol6.append(img6);
   subCol6.append(texto6);



return educacion;

 }
