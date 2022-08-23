const menu_icon = document.querySelector(".icon-menu");
const menu_list = document.querySelector(".menu-list");
const menu_items = document.querySelectorAll(".menu-item");

menu_icon.addEventListener("click", evt => {
    menu_list.classList.toggle("show");
    menu_icon.classList.toggle("active");
});

menu_items.forEach(function(e) {
    e.addEventListener("click", evt2 => {
        menu_list.classList.remove("show");
        menu_icon.classList.toggle("active");
    })
});