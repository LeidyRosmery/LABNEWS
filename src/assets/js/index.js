'use strict';

const render = (root) => {
    root.empty();
    root.append(Header(_ => render(root)));
    switch (state.currentScreen) {
        case 'principal':
            root.append(Principal(_ => render(root)));
            root.append(Secondary(_ => render(root)));
            root.append(Mundo(_ => render(root)));
            root.append(Tecnologia(_ => render(root)));
            root.append(Educacion(_ => render(root)));
            root.append(Opinion(_ => render(root)));
            root.append(Carousel(_ => render(root)));
            break;

        case 'article':
            root.append(DetailNews(_ => render(root)));
            break;
    }
    root.append(Footer(_ => render(root)));
};

const laboratoriaNews = {
    news: null,
    idNew: null,
    category: null,
    idCategory: null
}


const state = {
    currentScreen: 'principal'
}

$(_ => {
    getJSON('/api/news/', (err, json) => {
        laboratoriaNews.news = json;
        console.log(laboratoriaNews.news);
        const root = $('.root');
        render(root);

        getJSON('/api/categories/', (err, json) => {
            laboratoriaNews.category = json;
            console.log(laboratoriaNews.category);
        });
    });



});
