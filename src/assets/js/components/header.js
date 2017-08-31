'use strict'
const Header = () => {
    const header = $('<header class="header"></header>');
    const menuLab = $('<div class="menu hidden-xs"></div>');
    const itemLeft=$('<div class="menu menu--item"></div>');
    const optionItem1=$('<div class="menu--option"></div>');
    const imgOption1=$('<img src="assets/img/menu.png" alt="">');
    const textOption1=$('<span>SECTION</span> ');
    const optionItem2=$('<div class="menu--option"></div>');
    const imgOption2=$('<img src="assets/img/search.png" alt="">');
    const textOption2=$('<span>SEARCH</span> ');
    header.append(menuLab);
    menuLab.append(itemLeft);
    itemLeft.append(optionItem1);
    optionItem1.append(imgOption1);
    optionItem1.append(textOption1);
    itemLeft.append(optionItem2);
    optionItem2.append(imgOption2);
    optionItem2.append(textOption2);
   const itemRight=$('<div class="menu menu--item"></div>');
   const optionItem3=$('<div class="menu--option"></div>');
   const imgOption3=$('<img src="assets/img/fb.png" alt="">');
   const optionItem4=$('<div class="menu--option"></div>');
   const imgOption4=$('<img src="assets/img/tw.png" alt="">');
   const optionItem5=$('<div class="menu--option"></div>');
   const imgOption5=$('<img src="assets/img/in.png" alt="">');
   menuLab.append(itemRight);
   itemRight.append(optionItem3);
   optionItem3.append(imgOption3);

   itemRight.append(optionItem4);
   optionItem4.append(imgOption4);
   itemRight.append(optionItem5);
   optionItem5.append(imgOption5);

    const contLogo = $('<div class="text-center visible-lg"></div>');
    const salto1 = $(' <br>');
    const imgLog = $('<img class="text-center" src="assets/img/logoicon.png" alt="Laboratoria">');
    const infDetail = $('<div class="info-detail">');
    const salto2 = $(' <br>');
    const date = $('<span>Lunes , Junio 12 de 2017</span>');
    const separator = $(' <span> | </span>');
    const imgCloud = ('<img src="assets/img/cloud.png" alt="clima">');
    const temperature = $('   <span> 22°</span>');
    const salto3 = $(' <br>');
    header.append(contLogo);
    contLogo.append(salto1);
    contLogo.append(imgLog);
    contLogo.append(infDetail);
    infDetail.append(salto2);
    infDetail.append(date);
    infDetail.append(separator);
    infDetail.append(imgCloud);
    infDetail.append(temperature);
    contLogo.append(salto3);

    const navLabNews = $('<nav class="navbar navbar-default "></nav>');
    const navHeader = $('<div class="navbar-header visible-xs"></div>');
    const btnBurger = $('<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navegacion" name="button"></button>');
    const lineBurger1 = $('<span class="icon-bar" ></span>');
    const lineBurger2 = $('<span class="icon-bar" ></span>');
    const lineBurger3 = $('<span class="icon-bar" ></span>');
    const logoLab = $('<img class="navbar-brand" alt="Laboratoria" src="assets/img/logoicon.png">');
    const navCollapse = $('<div class="collapse navbar-collapse" id="navegacion"></div>');
    const navLista = $('<ul class="nav navbar-nav" role="tablist"></ul>');
    const itemLista1 = $('<li><a href="#" class="item-nav active">Lo último</a></li>');
    const itemLista2 = $('<li><a href="#" class="item-nav ">Opinión</a></li>');
    const itemLista3 = $(' <li><a href="#" class="item-nav ">Cultura</a></li>');
    const itemLista4 = $('<li><a href="#" class="item-nav ">Perú</a></li>');
    const itemLista5 = $('<li><a href="#" class="item-nav ">Tecnología</a></li>');
    const itemLista6 = $('<li><a href="#" class="item-nav ">Mundo</a></li>');
    const itemLista7 = $('<li><a href="#" class="item-nav ">Economía</a></li>');
    const itemLista8 = $('<li><a href="#" class="item-nav ">Lifestyle</a></li>');
    const itemLista9 = $('<li><a href="#" class="item-nav ">Deporte</a></li>');
    header.append(navLabNews);
    navLabNews.append(navHeader);
    navHeader.append(btnBurger);
    btnBurger.append(lineBurger1);
    btnBurger.append(lineBurger2);
    btnBurger.append(lineBurger3);
    navHeader.append(logoLab);
    navLabNews.append(navCollapse);
    navCollapse.append(navLista);
    navLista.append(itemLista1);
    navLista.append(itemLista1);
    navLista.append(itemLista2);
    navLista.append(itemLista3);
    navLista.append(itemLista4);
    navLista.append(itemLista5);
    navLista.append(itemLista6);
    navLista.append(itemLista7);
    navLista.append(itemLista8);
    navLista.append(itemLista9);
    return header;

}
// 'use strict';
// const Header = () => {
//   const header = $('<header class="header"></header>');
//   const row = $('<div class="row"></div>');
//   const topHeader = $('<div class="col-xs-12 header__top"></div>');
//   const logo = $('<div id="logo" class="col-sm-1 text-center"><a href="index.html"><img width="35" src="assets/img/pinterest-logo.png" alt="Pinterest" title="Pinterest" /></a></div>');
//   const search = $('<div class="col-sm-9 header__top--buscar"><i class="glyphicon glyphicon-search"></i><input type="text" placeholder="Buscar"></div>');
//   const icons = $('<div class="col-sm-2 text-center"><img width="34" src="assets/img/icon-arrow.png" /><img width="34" src="assets/img/icon-profile.png" /><img width="34" src="assets/img/message.png" /></div>');
//   const belowHeader = $('<div class="col-xs-12 header__below"><div class ="col-xs-5"><i class="glyphicon glyphicon-share header__below--icon"></i></div><div class="col-xs-2"></div><div class="col-xs-5"><button class="header__below--seguir">Seguir tablero</button></div></div>');
//
//   topHeader.append(logo);
//   topHeader.append(search);
//   topHeader.append(icons);
//   row.append(topHeader);
//   row.append(belowHeader);
//   header.append(row);
//
//   return header;
// }
