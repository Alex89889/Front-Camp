"use strict";

class News {
	
	constructor(url) {
		this.req = new Request(url);
		
	}
	
	printNews(){
		let myList = document.querySelector('ul');
		fetch(this.req).then(function(response) {
			return response.json().then(function(json) {
				for (let i = 0; i < json.articles.length; i++) {
					let listItem = document.createElement('li');
					listItem.innerHTML = `<div class="news"> <div class="post-title"><h1>${json.articles[i].title}</h1></div> 
					<div class="post-info"> <span>${json.articles[i].publishedAt} / by ${json.articles[i].author}</span></div>
					<div class= "news-image"> <img src="${json.articles[i].urlToImage}"></div>
					<p>${json.articles[i].description}</p> <a href="${json.articles[i].url}"><span>Read More</span></a></div>`;
					myList.appendChild(listItem);
				}
			});
		});
	}
}
let news = new News('https://newsapi.org/v2/top-headlines?' +
			'sources=bbc-news&' +
			'apiKey=a09253e9d8614d7f86d01ec6998b70de');
news.printNews(); 



	

