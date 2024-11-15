var botones = document.querySelectorAll('div');
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        openModal(boton)
    })
});


document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
        var offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasNavbarDark'));
        offcanvas.hide();
    });
});

function openModal(div) {
   
    if (div.className === 'youtube') {
        window.location.href = 'https://davejc01.github.io/The-facebook/'
    }
    

}





