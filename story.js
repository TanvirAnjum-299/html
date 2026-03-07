function goDark(){
    document.body.className="dark";
}
function typeAndScream(){
    var PersonName= document.getElementById("name").value;
    alert("I told you not to do that" + PersonName);
}
function finishTheStory(){
    document.getElementById("story").innerHTML="So I carefully searched the damp dungeon. There you are!";
}