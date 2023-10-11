function autoChangeTodayCard() {
    document.querySelector("#todayCard img").src = document.querySelector(".card-widget.card-recent-post .aside-list-item a img").src;
    document.querySelector(".todayCard-title").innerText = document.querySelector(".card-widget.card-recent-post .aside-list-item a").title;
    document.querySelector("#todayCard").href = document.querySelector(".card-widget.card-recent-post .aside-list-item a").href;
}

document.addEventListener("DOMContentLoaded",autoChangeTodayCard);
