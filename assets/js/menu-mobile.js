document.addEventListener("DOMContentLoaded", (event) =>{
    //capturar mis dos elementos principales
    let mobile_btn = document.querySelector(".navbar__mobile-btn");
    let mobile_menu = document.querySelector(".menu-mobile");
    let btn_close = document.querySelector(".menu-mobile__close");

    //Función mostrar y ocultar menu
    const showHiddenMenu = () => {
        let show = document.querySelector(".menu-mobile--show");

        if(show){
            mobile_menu.classList.remove("menu-mobile--show");
        }else{
            mobile_menu.classList.add("menu-mobile--show");
        }
    };

    //Al dar click al boton del menu, mostrar el menu de navegacion
    mobile_btn.addEventListener("click", showHiddenMenu);

    //Vamos a hacer un evento que cuando el menu esté desplegado pero quieras aumentar la pantalla a mas de 1000px, el menu desplegado se oculte.
    window.addEventListener("resize", ()=>{
        let window_widht = parseInt(document.body.clientWidth);

        if(window_widht >= 1000){ //si la pantalla es mayor a 1000
            mobile_menu.classList.remove("menu-mobile--show");
        }
    })

    //Poder cerrar el menu con el boton X
    btn_close.addEventListener("click", showHiddenMenu);

    //Desplegar submenu
    let menu_item = document.querySelectorAll(".menu-mobile__item")

    menu_item.forEach(item => {
        item.addEventListener("click",(event)=>{
            let submenu = item.lastElementChild;
            if(submenu.className === "menu-mobile__submenu-mobile"){
                if(submenu.style.display === "block"){
                    submenu.style.display = "none";
                }else{
                    submenu.style.display = "block";
                }
            }
        })
    })

})