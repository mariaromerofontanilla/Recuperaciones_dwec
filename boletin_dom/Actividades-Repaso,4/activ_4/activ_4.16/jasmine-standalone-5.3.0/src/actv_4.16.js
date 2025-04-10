function tamaño() {
    let tamaño = document.getElementById("opciones").value;
    let parrafos = document.getElementsByTagName("p");

    for (var i = 0; i < parrafos.length; i++) {
        if (tamaño == 1) {
            parrafos[i].style.fontSize = "12px";
        } else if (tamaño == 2) {
            parrafos[i].style.fontSize = "16px";
        } else if (tamaño == 3) {
            parrafos[i].style.fontSize = "20px";
        }
    }
}