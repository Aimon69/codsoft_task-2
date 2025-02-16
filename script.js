
const openIcon = document.getElementById("open-icon");
const closeIcon = document.getElementById("close-icon");

function open_menu() {
    const sidemenu = document.getElementById("sidemenu");
    if (sidemenu) {
        sidemenu.style.right = "0";
    } else {
     console.error("Sidemenu element not found");
    }
}

function close_menu() {
    const sidemenu = document.getElementById("sidemenu");
    if (sidemenu) {
        sidemenu.style.right = "-200px";
    }else {
     console.error("Sidemenu element not found");
    }
}

openIcon.addEventListener("click", open_menu);
closeIcon.addEventListener("click", close_menu);