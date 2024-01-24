function openLetter() {
    var letter = document.getElementById("letter");
    letter.style.display = (letter.style.display === "none" || letter.style.display === "") ? "block" : "none";
    var myad = document.getElementById("myaudio")
    myad.play();
    
}
function toggleClick() {
    var element = document.getElementById("myElement");
    element.classList.toggle("clicked");
}
