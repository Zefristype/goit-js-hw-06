const categories = document.querySelectorAll(".item");
console.log("Number of categories:", categories.length);
console.log("");
function categoryOutput(element) {
    console.log("Category:",element.querySelector("h2").textContent);
    console.log("Elements", element.querySelectorAll("ul > li").length);
    console.log("");
}
categories.forEach(categoryOutput);