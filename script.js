apikey = 'edc0e75c66aced48d06570842c846725';
category = 'technology';
const url = 'https://gnews.io/api/v4/top-headlines?category=' + category + '&lang=en&country=us&max=10&apikey=' + apikey;

// API DOCUMENTATION: "https://gnews.io/docs/v4#top-headlines-endpoint"

var req = new Request(url);

let news_arr=[]

fetch(req)
    .then(data=>data.json())
    .then(data=>{
        // if (data.status!=="ok") return
        console.log(data);
    })
    .catch(e=> console.log(e));
