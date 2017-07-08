'use strict';
 const Opinion = () => {
   const opinion = $('<section class="educacion">');
   const tituloSeccion=$('  <h3> educacion</h3>');
   const container= $('<div class="container-fluid ">');
   const row=$("<div class='row noticia'>");
opinion.append(tituloSeccion);
   opinion.append(container)

   container.append(row);

   const col1=$('<div class="col-lg-3  col-xl-3  new ">');
   const img=$('<img class="new__imgNew new__imgNew--small"  src="assets/img/'+laboratoriaNews.news[0].img+'" alt="">');
   const texto=$('<h3> </h3>');
   row.append(col1);
   col1.append(img);
   col1.append(texto);
   const col2=$('<div class="col-lg-3  col-xl-3  new ">');
   const img2=$('<img class="new__imgNew new__imgNew--small"  src="assets/img/'+laboratoriaNews.news[0].img+'" alt="">');
   const texto2=$('<h3> </h3>');
   row.append(col2);
   col2.append(img2);
   col2.append(texto2);
   const col3=$('<div class="col-lg-3  col-xl-3  new ">');
   const img3=$('<img class="new__imgNew new__imgNew--small"  src="assets/img/'+laboratoriaNews.news[0].img+'" alt="">');
   const texto3=$('<h3> </h3>');
   row.append(col3);
   col3.append(img3);
   col3.append(texto3);
   const col4=$('<div class="col-lg-3  col-xl-3  new ">');
   const img4=$('<img class="new__imgNew new__imgNew--small"  src="assets/img/'+laboratoriaNews.news[0].img+'" alt="">');
   const texto4=$('<h3> </h3>');
   row.append(col4);
   col4.append(img4);
   col4.append(texto4);




   return opinion;
 }
