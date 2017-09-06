const Carousel=()=>{
  const carousel = $('<section class="pdx2  carousel padBoth">');
  const container = $('<div class="container-fluid ">');
  const row = $("<div class='row'>");
    const col1 = $('<div class="col-lg-12  col-md-6 col-sm-12 col-xs-12">');
  carousel.append(container)
  container.append(row);
  row.append(col1);

const mainCarousel = $('<div id="carrusel1" class="carousel slider" data-pause="hover" data-wrap="true" data-ride="carousel" data-interval="2000">');
const containerCarousel = $('<div class="carousel-inner" role="listbox">');
const item1 = $('<div class="item active">');
const rowItem=$('<div class="row">');
col1.append(mainCarousel);
mainCarousel.append(containerCarousel);
containerCarousel.append(item1);
item1.append(rowItem);


const subItem = $('<div class=" slider--itemCarousel col-lg-3  col-md-6 col-sm-6 col-xs-6">');
const imgSubItem = $('<img class="news--img__md img-responsive " src="assets/img/' + laboratoriaNews.news[10].img + '" alt="">');
const divTextSubItem = $('<div class=" news news--detail pd col-lg-3  col-md-6 col-sm-6 col-xs-6 ">');
const textSubItem = $('  <p class="title">' + laboratoriaNews.news[10].title + ' </p>');
rowItem.append(subItem);
subItem.append(imgSubItem);
subItem.append(divTextSubItem);
divTextSubItem.append(textSubItem);

const subItem1 = $('<div class=" slider--itemCarousel col-lg-3  col-md-6 col-sm-6 col-xs-6">');
const imgSubItem1 = $('<img class="news--img__md img-responsive " src="assets/img/' + laboratoriaNews.news[11].img + '" alt="">');
const divTextSubItem1 = $('<div class=" news news--detail pd col-lg-3  col-md-6 col-sm-6 col-xs-6 ">');
const textSubItem1 = $('  <p class="title">' + laboratoriaNews.news[11].title + ' </p>');
rowItem.append(subItem1);
subItem1.append(imgSubItem1);
subItem1.append(divTextSubItem1);
divTextSubItem1.append(textSubItem1);

const subItem2 = $('<div class=" slider--itemCarousel col-lg-3  hidden-xs">');
const imgSubItem2 = $('<img class="news--img__md img-responsive img--sm" src="assets/img/' + laboratoriaNews.news[12].img + '" alt="">');
const divTextSubItem2 = $('<div class="news news--detail detail--sm pd col-lg-3  col-md-6 col-sm-6 col-xs-6 ">');
const textSubItem2 = $('  <p class="title">' +laboratoriaNews.news[12].title  + ' </p>');
rowItem.append(subItem2);
subItem2.append(imgSubItem2);
subItem2.append(divTextSubItem2);
divTextSubItem2.append(textSubItem2);

const subItem3 = $('<div class=" slider--itemCarousel col-lg-3  hidden-xs">');
const imgSubItem3 = $('<img class="news--img__md img-responsive img--sm" src="assets/img/' + laboratoriaNews.news[13].img + '" alt="">');
const divTextSubItem3 = $('<div class="news news--detail detail--sm pd col-lg-3  col-md-6 col-sm-6 col-xs-6 ">');
const textSubItem3 = $('  <p class="title">' + laboratoriaNews.news[13].title + '</p>');
rowItem.append(subItem3);
subItem3.append(imgSubItem3);
subItem3.append(divTextSubItem3);
divTextSubItem3.append(textSubItem3);
const controlLeft =$('<a href="#carrusel1" class="controlSlider  visible-lg left carousel-control" '+
'role="button" data-slide="prev"> <span class="controlSlider__left slider--iconSlider glyphicon glyphicon-chevron-left" '+
' aria-hidden="true"></span> <span class="sr-only">Anterior</span> </a>');

mainCarousel.append(controlLeft);
const controlRight= $('  <a href="#carrusel1" class="controlSlider visible-lg right carousel-control" '+
' role="button" data-slide="next"> <span class="controlSlider__right slider--iconSlider '+
'glyphicon glyphicon-chevron-right" aria-hidden="true"></span><span class="sr-only">Siguiente</span> </a>');

mainCarousel.append(controlRight);

  return carousel;
}
