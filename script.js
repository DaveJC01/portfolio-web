document.addEventListener('DOMContentLoaded', function () {
    var navbarOffcanvas = document.getElementById('offcanvasNavbarDark');
    var navbarLinks = document.querySelectorAll('.navbar-nav a');
    
    navbarLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        var offcanvas = bootstrap.Offcanvas.getInstance(navbarOffcanvas);
        offcanvas.hide();
      });
    });
  });