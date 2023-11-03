/*
*/
/*change positionning in the ol*/
let olElement = document.querySelector("ol");

if (olElement){
    let lastChild = olElement.lastElementChild;
    if (lastChild){
        olElement.removeChild(lastChild);
        olElement.insertBefore(lastChild, olElement.firstElementChild);
    }
}

/*change position of the sections*/
const section = document.querySelector('main')
const a = section.children[1]
const b = section.children[2]
b.appendChild(a)

/*Delete the last section from the DOM*/
let sections = document.querySelectorAll("section");
let lastSection = sections[sections.length - 1];

if (lastSection){
    lastSection.parentNode.removeChild(lastSection);
}