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