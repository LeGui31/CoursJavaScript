var p = document.getElementById("first");
p.insertAdjacentHTML("afterbegin", "<p class=skyblue> afterbegin </p>");
p.insertAdjacentHTML("afterend", "<p class=pink> afterend </p>");
p.insertAdjacentHTML("beforebegin", "<p class=pink> beforebegin </p>");
p.insertAdjacentHTML("beforeend", "<p class=skyblue> beforeend </p>");

// var container = document.getElementById("container");
// container.style.color = "red";

// var container = document.getElementById("container");
// container.style.backgroundColor = "red";