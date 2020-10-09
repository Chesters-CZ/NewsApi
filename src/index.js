import {generateNewsBox} from "./components";

const articles = [
    {
        title: 'Article 1',
        description: 'Lorem ipsum1'
    },
    {
        title: 'Article 2',
        description: 'Lorem ipsum2'
    },
    {
        title: 'Article 3',
        description: 'Lorem ipsum3'
    },
    {
        title: 'Article 4',
        description: 'Lorem ipsum4'
    },
    {
        title: 'Article 5',
        description: 'Lorem ipsum5'
    },
    {
        title: 'Article 6',
        description: 'Lorem ipsum6'
    },
    {
        title: 'Article 7',
        description: 'Lorem ipsum7'
    },
    {
        title: 'Article 8',
        description: 'Lorem ipsum8'
    },
];

window.onload = function() {
    const header = document.createElement('h1'); // <h1>Welcome</h1>
    header.innerText = "Welcome";
    document.body.appendChild(header);

    const news = generateNewsBox("My first news", "Hello blablabla");
    document.body.appendChild(news);

    let ble;
    let fuj;
    for(let i=0; i<articles.length; i++) {
        ble = generateNewsBox(articles[i].title, articles[i].description);
        fuj = document.getElementById("div");
        fuj.appendChild(ble);
    }
}
