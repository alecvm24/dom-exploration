/*
*/

let olElement = document.querySelector("ol");

if (olElement){
    let lastChild = olElement.lastElementChild;
    if (lastChild){
        olElement.removeChild(lastChild);
        olElement.insertBefore(lastChild, olElement.firstElementChild);
    }
}

let h2Element = document.querySelector("h2");

if (h2ElementElement){
    let lastChild = h2Element.lastElementChild;
    if (lastChild){
        h2Element.removeChild(lastChild);
        h2Element.insertBefore(lastChild, h2Element.firstElementChild);
    }
}