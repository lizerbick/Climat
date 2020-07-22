let show = 1;
let img = document.getElementById("button");
let menu = document.getElementById("menu");
let img_src = ["images/icons/menu_open.svg", "images/icons/menu_close.svg"] 

img.addEventListener = ("click",desplegar);

function desplegar () {

    if ( show == 1 ) {
        menu.style.top = "69.19px";
        menu.style.transition = ".5s ease";
        img.src = img_src[0];
        img.style.transition = "1s ease"
        show = 0;
    }

    else {
        menu.style.top = "-143.13px";
        menu.style.transition = ".5s ease";
        img.src = img_src[1];
        img.style.transition = ".1s ease"
        show = 1;
    }
}

