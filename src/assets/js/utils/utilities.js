'use strict'
const changeColor=(cadena, inicio, fin)=> {
    const aux = cadena.split(" ");
    aux.splice(inicio, 0, "<span class=news--highlight>");
    aux.splice(fin, 0, "</span>");
    return aux.join(" ");
}
const boldFont=(cadena, inicio, fin)=> {
    const aux = cadena.split(" ");
    aux.splice(inicio, 0, "<strong>");
    aux.splice(fin, 0, "</strong>");
    return aux.join(" ");
}
