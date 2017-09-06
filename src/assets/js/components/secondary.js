const Secondary = () => {

    const secondary = $('<section id="principal" class="principal padBoth">');
    const container = $('<div class="container-fluid ">');
    const row2 = $('<div class="row ">');
    const divImg2 = $('<div class="pd col-lg-6 col-md-6 col-xs-12 col-sm-12 ">');
    const img2 = $('<img class="news news--img__lg  img--md img-responsive" src="assets/img/' + laboratoriaNews.news[1].img + '">');
    const divText2 = $('<div class="news--detail  detail--md col-lg-6 col-md-6 col-xs-12 col-sm-12 ">');
    const text2 = $('  <p class="news--titleLetter title"> ' + changeColor(laboratoriaNews.news[1].title, 4, 8) + '</p>');
    //console.log('que pasa'+laboratoriaNews.news[1].title.split(" "));

    const letter1 = $('<span class="news--letter letter--md">HOY</span>');
    secondary.append(container);
    container.append(row2);
    row2.append(divImg2)
    divImg2.append(img2);
    divImg2.append(divText2);
    divText2.append(text2);
    divText2.append(letter1);


    const divImg3 = $('<div class="pd col-lg-3 col-md-3 col-xs-12 col-sm-12 ">');
    const img3 = $('<img class="news news--img__lg img-responsive img--sm" src="assets/img/' + laboratoriaNews.news[2].img + '" alt="">');
    const divText3 = $('<div class="news--detail detail--sm col-lg-3 col-md-3 col-xs-12 col-sm-12 ">');
    const text3 = $('  <p class="title">' + changeColor(laboratoriaNews.news[2].title, 4, 7) + '</p>');
    row2.append(divImg3)
    divImg3.append(img3);
    divImg3.append(divText3);
    divText3.append(text3);

    const divImg4 = $('<div class="pd col-lg-3 col-md-3 col-xs-12 col-sm-12 new" >');
    const img4 = $('<img class="news news--img__lg img-responsive img--sm" src="assets/img/' + laboratoriaNews.news[3].img + '" alt="">');
    const divText4 = $('<div class="news--detail detail--sm col-lg-3 col-md-3 col-xs-12 col-sm-12 new__textLG" >');
    const text4 = $('  <p class="title">' + changeColor(laboratoriaNews.news[3].title, 3, 5) + '</p>');
    row2.append(divImg4)
    divImg4.append(img4);
    divImg4.append(divText4);
    divText4.append(text4);

    return secondary;
}
