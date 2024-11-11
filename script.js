var botones = document.querySelectorAll('button');
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
    } else if (boton.id === 'btnIniciarSesion') {
         //autenticacion de usuario
        window.location.href = 'dashboard.html';
    }

}

(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()



