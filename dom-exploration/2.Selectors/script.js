/*
*/

/*add title attribute*/
let elements = document.querySelectorAll (".important");

elements.forEach(function (element){
    element.setAttribute("title", "This is an important item");
});

/*select img and change display of no class img*/  
let imgElements = document.querySelectorAll("img");

imgElements.forEach(function (img){
    if (!img.classList.contains("important")){
        img.style.display = "none";
    }
});

/*display paragraphs in console + their class*/
let paragraphs = document.querySelectorAll("p");

paragraphs.forEach(function(paragraph){
    console.log("content: " + paragraph.textContent);
    if (paragraph.classList.length > 0 ){
        console.log("class: " + paragraph.classList);
    }
});

/*give random color to paragraphs unless it is a class */
function getRandomColor(){
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

paragraphs.forEach(function(paragraph){
    if (!paragraph.classList.length){
        let randomColor = getRandomColor();
        paragraph.style.color = randomColor;
    }
});