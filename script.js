var botones = document.querySelectorAll('span');
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

function openModal(span) {
   console.log(span.id);
   
    if (span.id === 'face') {
        window.location.href = 'https://davejc01.github.io/The-facebook/'
    } else if (span.id === 'pet') {
        window.location.href = 'https://clinica-mascotas-psx6qqx2t-jean-carlos-davids-projects.vercel.app/'
    }
    

}





