let input = document.querySelector(".right-input") ;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
input.addEventListener("input",function(){
    if(input.value.match(mailformat))
{
    document.querySelector(".warning").style.visibility = "hidden";
    input.style.border = "none"
}else {
    document.querySelector(".warning").style.visibility = "visible";
    input.style.border = "1px solid #f52b2bbd"
}
})