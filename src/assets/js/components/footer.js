'use strict'
const Footer=()=> {
    const piePagina = $('<footer class="padBoth"></footer>');
    const contenPiePag= $('<div class="container-fluid pie-pag "></div>');
    const itemPie1 = $('<div class=" col-lg-4 col-xs-12 pie-pag--item"></div>');
    const logoPie = $('  <img class="pdx2" src="assets/img/logo-footer.png" alt="Laboratoria"></div>');
    const textItem1 = $('  <p class="pie-pag--text">Editado por Laboratoria</p><p class="pie-pag--text">Av. Jose Pardo #601 Lima 1 Peru</p><p class="pie-pag--text">Copyright Laboratoria.la</p><p class="pie-pag--text">Todos lo derechos reservados</p><hr class="visible-xs"><p class="visible-xs text-center">Ver mas</p>');
    const itemPie2 = $('<div class="col-lg-4 hidden-xs pie-pag--item pie-pag--item__bf ">');
    const textItem2 = $('<p class="pie-pag--text pie-pag--text__pd">DIRECTOR GENERAL :</p>'+
                        '<span class="">Francisco Miro</span>'+
                        '<p class="pie-pag--text pie-pag--text__pd">DIRECTOR PERIODISTICO :</p>'+
                        '<span class="">Fernando Berckemeyer Olaechea</span><br>'+
                        '<p class="pie-pag--text pie-pag--text__pd">SUSCRIPCIONES :</p>'+
                        '<span class="">suscriptores@comercio.com.pe</span><br>'+
                        '<p class="pie-pag--text pie-pag--text__pd">PUBLICIDAD ONLINE :</p>'+
                        '<span class="">fonoavisos@comercio.com.pe</span><br>'+
                        '<p class="pie-pag--text pie-pag--text__pd">CLUB DEL COMERCIO :</p>'+
                        '<span class="">clubelcomercio@comercio.com.pe</span>'+
                        '<span class="">Compromiso de Autoregulacion Comercial</span><br>');
    const itemPie3 = $('  <div class="col-lg-4 hidden-xs pie-pag--item "></div>');
    const textItem3 = $('<p class="pie-pag--text pie-pag--text__pd">TERMINOS Y CONDICIONES DE USO</p>'+
                        '<p class="pie-pag--text">TRABAJA CON NOSOTROS</p>'+
                        '<p class="pie-pag--text">LIBRO DE RECLAMACIONES</p>'+
                        '<p class="pie-pag--text">SEDES PRINCIPALES</p>'+
                        '<p class="pie-pag--text pdx3">POLITICAS DE PRIVACIDAD</p>'+
                        '<span class=""> SIGUENOS</span>'+
                        '<i class="pie-pag--icon fa fa-facebook fa-2x" aria-hidden="true"></i>'+
                        '<i class="pie-pag--icon fa fa-twitter fa-2x" aria-hidden="true"></i>'+
                        '<i class="pie-pag--icon fa fa-linkedin fa-2x" aria-hidden="true"></i>'+
                         '<a class="hidden-xs pie-pag--bntUp" href="#principal"><img class="imgUp" src="assets/img/flecha3.png" alt="">SUBIR</a>');

    piePagina.append(contenPiePag);
    contenPiePag.append(itemPie1);
    itemPie1.append(logoPie);
    itemPie1.append(textItem1);
    contenPiePag.append(itemPie2);
    itemPie2.append(textItem2);
    contenPiePag.append(itemPie3);
    itemPie3.append(textItem3);

    return piePagina;
}
