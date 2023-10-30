function autoChangeTodayCard() {
	if (document.querySelector("#todayCard").href != document.querySelector(".card-widget.card-recent-post .aside-list-item a").href) {	
		document.querySelector("#todayCard img").src = document.querySelector(".card-widget.card-recent-post .aside-list-item a img").src;
		document.querySelector(".todayCard-title").innerText = document.querySelector(".card-widget.card-recent-post .aside-list-item a").title;
		document.querySelector("#todayCard").href = document.querySelector(".card-widget.card-recent-post .aside-list-item a").href;
	}
}

document.addEventListener("DOMContentLoaded",autoChangeTodayCard);
//浏览器后退不会触发pageshow事件
//window.addEventListener("pageshow",autoChangeTodayCard);

//后退前进事件
window.addEventListener("popstate",function(event) {
	if (event.state.url.lastIndexOf("/") == event.state.url.length - 1) {
		window.setTimeout(() => {
			//event.target.autoChangeTodayCard();
			autoChangeTodayCard();
		}, "500");
	}
});