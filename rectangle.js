let div = document.querySelector(".rectangle");
function changeToCircle() {
    div.style.borderRadius = "50%";
}
function hideRect() {
    div.style.display = "none";
}
function showRect() {
    div.style.display = "block";
}
div.onmouseenter =function() {
    div.style.backgroundColor = "red";
}
div.onmouseleave = function() {
    div.style.backgroundColor="transparent";
}