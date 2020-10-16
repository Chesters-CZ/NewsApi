import {generateNewsBox} from "./components";

const axios = require("axios");

window.onload = function() {
    const odaxiosu = axios.get("http://newsapi.org/v2/top-headlines?country=cz&apiKey=a35c735a4617414e8031a21950572432").then(function(res) {
        const articls =  res.data.articles;
        /*const header = document.createElement('h1'); // <h1>Welcome</h1>
        header.innerText = "Welcome";
        document.body.appendChild(header);

        const news = generateNewsBox("My first news", "Hello blablabla");
        document.body.appendChild(news);*/

        let ble;
        let fuj;
        for(let i=0; i<articls.length; i++) {
            ble = generateNewsBox(articls[i].title, articls[i].description, articls[i].author, articls[i].publishedAt, articls[i].source.name, articls[i].url);
            fuj = document.getElementById("div");
            fuj.appendChild(ble);
        }
    });

}
