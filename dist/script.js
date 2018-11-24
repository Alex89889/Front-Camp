"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var News = function () {
	function News(url, name) {
		_classCallCheck(this, News);

		this.req = new Request(url);
	}

	_createClass(News, [{
		key: 'printSource',
		value: function printSource() {
			var myList = document.querySelector('.select.new');
			fetch(this.req).then(function (response) {
				return response.json().then(function (json) {
					for (var i = 0; i < json.sources.length; i++) {
						var listItem = document.createElement('option');
						listItem.value = '' + json.sources[i].id;
						listItem.innerHTML = '' + json.sources[i].name;
						myList.appendChild(listItem);
					}
				});
			});
		}
	}, {
		key: 'printNews',
		value: function printNews() {
			var select = document.querySelector('.select.new');
			select.addEventListener('change', function () {
				if (select.value) {
					this.req = "https://newsapi.org/v2/top-headlines?" + "sources=" + select.value + "&apiKey=a09253e9d8614d7f86d01ec6998b70de";
					var myList = document.querySelector('ul');
					myList.innerHTML = "";
					fetch(this.req).then(function (response) {
						return response.json().then(function (json) {
							for (var i = 0; i < json.articles.length; i++) {
								var listItem = document.createElement('li');
								listItem.innerHTML = '<div class="news"> <div class="post-title"><h1>' + json.articles[i].title + '</h1></div> \n\t\t\t\t\t\t\t<div class="post-info"> <span>' + json.articles[i].publishedAt + ' / by ' + json.articles[i].author + '</span></div>\n\t\t\t\t\t\t\t<div class= "news-image"> <img src="' + json.articles[i].urlToImage + '"></div>\n\t\t\t\t\t\t\t<p>' + json.articles[i].description + '</p> <a href="' + json.articles[i].url + '"><span>Read More</span></a></div>';
								myList.appendChild(listItem);
							}
						});
					});
				}
			});
		}
	}]);

	return News;
}();

var source = new News('https://newsapi.org/v2/sources?apiKey=a09253e9d8614d7f86d01ec6998b70de');
source.printSource();

var news = new News();
news.printNews();