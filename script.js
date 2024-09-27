const botones = document.querySelectorAll('button');
document.getElementById('openModal').onclick = function () {
    document.getElementById('myModal').style.display = 'block';
}

botones.forEach((key) => {
    key.addEventListener("click", () => { action(key) });
});


window.onclick = function (event) {
    if (event.target == document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = 'none';
    }
}


function action(key) {
    // Si se precionan los botones de cerrar el modal
    if (key.id && 'cerrarModal' && 'close') {
        document.getElementById('myModal').style.display = 'none';
    }
}