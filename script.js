const api_key="d97d1cc392814d63814bf93f12a33728"
// API DOCUMENTATION: "https://newsapi.org/docs"

const url=`https://newsapi.org/v2/top-headlines?sources=bbc-news&category=technology&apiKey=${api_key}`
var req = new Request(url);

let news_arr=[]

fetch(req)
    .then(data=>data.json())
    .then(data=>{
        if (data.status!=="ok") return
        for (let i=0;i<5;i++){
            let news_obj={
                "news_title":decodeURI(data.articles[i].title),
                "news_description":decodeURI(data.articles[i].description),
                "news_url":decodeURI(data.articles[i].url)
            }
            news_arr.push(news_obj)
        }
        console.log(news_arr);
    })
    .catch(e=> console.log(e));


write here 
