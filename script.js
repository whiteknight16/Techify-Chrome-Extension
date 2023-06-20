apikey = 'edc0e75c66aced48d06570842c846725';
category = 'technology';
const url = 'https://gnews.io/api/v4/top-headlines?category=' + category + '&lang=en&country=us&max=10&apikey=' + apikey;

// API DOCUMENTATION: "https://gnews.io/docs/v4#top-headlines-endpoint"

let req = new Request(url);
let i = -1;
const next = () => {
    fetch(req)
        .then(data => data.json())
        .then(data => {
            i++;
            document.querySelector(".count").innerText = i + "/" + data.articles.length
            document.querySelector("#news-image").setAttribute("src", `${data.articles[i % data.articles.length].image}`)
            document.querySelector("h3").innerText = data.articles[i % data.articles.length].title;
            document.querySelector("p").innerText = data.articles[i % data.articles.length].content.substring(0, 230) + "...";
            document.querySelector("#url").setAttribute("href", `${data.articles[i % data.articles.length].url}`)
        })
        .catch(e => console.log(e));
}
const previous = () => {
    fetch(req)
        .then(data => data.json())
        .then(data => {
            i--;
            if (i < 0) {
                i = data.articles.length - 1;
            }
            document.querySelector(".count").innerText = i + "/" + data.articles.length
            document.querySelector("#news-image").setAttribute("src", `${data.articles[i % data.articles.length].image}`)
            document.querySelector("h3").innerText = data.articles[i % data.articles.length].title;
            document.querySelector("p").innerText = data.articles[i % data.articles.length].content.substring(0, 230) + "...";
            document.querySelector("#url").setAttribute("href", `${data.articles[i % data.articles.length].url}`)
        })
        .catch(e => console.log(e));
}
next()
