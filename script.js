botones = document.querySelectorAll('button');


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



function openModal(boton) {
    if (boton.id === 'closeModalAlert') { //si el id pertenece a el modal mostrar el login
        var alertModal = bootstrap.Modal.getInstance(document.getElementById('alertModal')); alertModal.hide();
        var mainModal = new bootstrap.Modal(document.getElementById('signIn')); mainModal.show();
    }
}
