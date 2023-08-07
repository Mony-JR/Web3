const btn=document.querySelector("#btn");
const ul=document.querySelector("#ul-id");


btn.addEventListener("click",myfun);

function myfun(){
    btn.classList.toggle("btn_run")
    ul.classList.toggle("ul_run")
}
