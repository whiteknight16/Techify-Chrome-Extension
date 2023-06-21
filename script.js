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
            const news_value=Math.floor(Math.random()*data.articles.length)
            document.querySelector("#news-image").setAttribute("src", `${data.articles[news_value].image}`)
            document.querySelector("h3").innerText = data.articles[news_value].title;
            document.querySelector("p").innerText = data.articles[news_value].content.substring(0, 230) + "...";
            document.querySelector("#url").setAttribute("href", `${data.articles[news_value].url}`)
        })
        .catch(e => console.log(e));
}

next()
