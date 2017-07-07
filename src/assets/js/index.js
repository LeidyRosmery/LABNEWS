'use strict';

const render = (root) => {
    root.empty();
    root.append(Header());
    root.append(Dashboard());
};

const state = {
  news : null,
  idNew : null,
  category:null ,
  idCategory:null
};


$(_ => {

  getJSON('http://localhost:3000/api/news/', (err, json) => {
    if (err) {
        return alert(err.message);
    }
    state.news = json;
    console.log(state.news[0].title);
    const root = $('.root');
  //  render(root);
  });

});
