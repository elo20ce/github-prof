let menu = document.querySelector(".menu");
let btnMenu = document.querySelector(".btn_menu");

btnMenu.onclick = function(){
    if(menu.style.transform == "translateY(-100%)"){
        menu.style.transform = "translateY(0)"
        document.body.style.overflow = "hidden";
    }else {
        menu.style.transform = "translateY(-100%)";
        document.body.style.overflow = "auto";
    }


}