import {generateNewsBox} from "./components";

const axios = require("axios");

let odaxiosu;
let articls;
window.onload = function () {
    let batn = document.getElementById("button");
    console.log("b4");
    batn.addEventListener("click", workDamnit());
    console.log("aftr");
    setTimeout(workDamnit(), 2000)
}

function workDamnit() {
    let daddy = document.getElementById("div");
    for (let i = 0; i < daddy.childElementCount; i++) {
        daddy.removeChild(daddy.childNodes[i]);
    }


    console.log("workDamnit started")
    let otpot;
    let query = document.getElementsByName("search")[0].value;
    console.log(query);
    if (query.length > 0) { //TODO: fix search bar - as of right now, the search thing doesnt work. i will most likely have to use onclick instead of addeventlistener or petkodytek. i am most likely making a mistake when adding the eventlistener, but have no idea where
        odaxiosu = axios.get("http://newsapi.org/v2/top-headlines?" + query + "country=cz&apiKey=a35c735a4617414e8031a21950572432").then(function (res) {
            let artikls = res.data.articles;
            let ble;
            let fuj;
            for (let i = 0; i < artikls.length; i++) {
                let splitthething = artikls[i].publishedAt;
                let datume = splitthething.split("T")[0];
                ble = generateNewsBox(artikls[i].title, artikls[i].description, artikls[i].author, datume, artikls[i].source.name, artikls[i].url);
                fuj = document.getElementById("div");
                fuj.appendChild(ble);
            }
        })
    } else {
        odaxiosu = axios.get("http://newsapi.org/v2/top-headlines?country=cz&apiKey=a35c735a4617414e8031a21950572432").then(function (res) {
            let artikls = res.data.articles;
            let ble;
            let fuj;
            for (let i = 0; i < artikls.length; i++) {
                let splitthething = artikls[i].publishedAt;
                let datume = splitthething.split("T")[0];
                ble = generateNewsBox(artikls[i].title, artikls[i].description, artikls[i].author, datume, artikls[i].source.name, artikls[i].url);
                fuj = document.getElementById("div");
                fuj.appendChild(ble);
            }
        })
    }
}