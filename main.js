const select = document.querySelector(".filter");

select.addEventListener("change", function (e) {
    const chosen_justices = e.target.value;
    const currently_visible = document.querySelectorAll(".item.active");
    const make_visible = document.querySelectorAll(`.item.${chosen_justices}`);

    currently_visible.forEach(function (justices) {
        justices.classList.remove("active");
    });

    make_visible.forEach(function (justices) {
        justices.classList.add("active");
    });
});