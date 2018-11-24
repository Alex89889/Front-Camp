"use strict";

class News {
	
	constructor(url,name) {
		this.req = new Request(url);
	}
			
	
	printSource(){
		let myList = document.querySelector('.select.new');
		fetch(this.req).then(function(response) {
			return response.json().then(function(json) {
				for (let i = 0; i < json.sources.length; i++) {
					let listItem = document.createElement('option');
					listItem.value = `${json.sources[i].id}`;
					listItem.innerHTML = `${json.sources[i].name}`;
					myList.appendChild(listItem);
				}
			});
		});
	}
	
	printNews(){	
	    let select = document.querySelector('.select.new');
		select.addEventListener('change', function() {
			if(select.value){
				this.req = "https://newsapi.org/v2/top-headlines?" +
				"sources=" + select.value +
				"&apiKey=a09253e9d8614d7f86d01ec6998b70de";
				let myList = document.querySelector('ul');
			    myList.innerHTML = "";
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
		});		
	}

	
}

let  source = new News('https://newsapi.org/v2/sources?apiKey=a09253e9d8614d7f86d01ec6998b70de');
source.printSource();

let news = new News();
news.printNews();



	

