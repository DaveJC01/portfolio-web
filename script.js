

    // document.getElementById('alertModal').addEventListener('click', function (event) {
    //     event.preventDefault();
    //     var alertModal = new bootstrap.Modal(document.getElementById('alertModal')); alertModal.show();
    // });

    document.getElementById('closeModal').addEventListener('click', function () {
        var alertModal = bootstrap.Modal.getInstance(document.getElementById('alertModal')); alertModal.hide();
        var mainModal = new bootstrap.Modal(document.getElementById('signIn')); mainModal.show();
    }

    )

