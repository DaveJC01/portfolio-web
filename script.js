document.getElementById('openModal').onclick = function() {
    document.getElementById('myModal').style.display = 'block';
}

const  botones = document.querySelectorAll('button');

document.querySelector('.close , .btnCerrar').onclick = function() {
    document.getElementById('myModal').style.display = 'none';
}


botones.forEach((key) => {
	key.addEventListener("click", () => { action(key) });
});




window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = 'none';
    }
}


function action (key) {
if (key.id === 'cerrarModal') {
    document.getElementById('myModal').style.display = 'none';
}
}