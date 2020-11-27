import {generateNewsBox} from "./components";
import 'bootstrap';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';


const axios = require("axios");

let odaxiosu;
let articls;
window.onload = function () {
    let batn = document.getElementById("button");
    batn.addEventListener("click", workDamnit);
    console.log(batn);
    setTimeout(workDamnit(), 5000);
}

function workDamnit() {
    let daddy = document.getElementById("div");
    if (daddy.children.length > 0) {
        for (let i = daddy.children.length; i > 0; i--) {
            daddy.removeChild(daddy.childNodes[0]);
            console.log("removing" + i);
        }
    }
    console.log(daddy.childNodes.length);

    console.log("workDamnit started");
    let otpot;
    let query = document.getElementsByName("search")[0].value;
    console.log(query);
    if (query.length > 0) { //now works, however, TODO: fix search bar
        odaxiosu = axios.get("http://newsapi.org/v2/top-headlines?q=" + query + "&country=cz&pageSize=20&apiKey=a35c735a4617414e8031a21950572432").then(function (res) {
            console.log("custom axios request - " + query);
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
            console.log("default axios request");
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
    setTimeout(function () {
            console.log("kunt " + daddy.childElementCount);
            if (daddy.childElementCount < 1) {
                let fukup = document.createElement("h1");
                fukup.classList.add("center");
                fukup.classList.add("error");
                fukup.innerText = "Oops! Looks like there aren't any results for your query.";
                daddy.appendChild(fukup);
            }
        }, 750
    )

}