const click=document.querySelector("#btn");
const ul=document.querySelector("#ul-id");



click.addEventListener("click",myfun);

function myfun(){
    click.classList.toggle("bar-active")
    ul.classList.toggle("ul")
}