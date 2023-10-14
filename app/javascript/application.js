import "@hotwired/turbo-rails"
import "controllers"

document.addEventListener("turbo:load", function () {
  setupCompanyModal();
  setupEquipmentModal();
  setupNewUserModal();

  document.getElementById('logout-button').addEventListener('click', function () {
    document.getElementById('logout_form').submit();
  });
});


function setupCompanyModal() {
  var modal = document.getElementById("companyModal");
  var modalBtn = document.getElementById("openCompanyModalBtn");
  var closeBtn = document.getElementById("closeCompanyModalBtn");

  if (modal && modalBtn && closeBtn) {
    modalBtn.onclick = function () {
      modal.style.display = "block";
    }

    closeBtn.onclick = function () {
      modal.style.display = "none";
    }

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
}

function setupEquipmentModal() {
  var equipmentModal = document.getElementById("equipmentModal");
  var equipmentModalBtn = document.getElementById("openEquipmentModalBtn");
  var closeEquipmentModalBtn = document.getElementById("closeEquipmentModalBtn");

  if (equipmentModal && equipmentModalBtn && closeEquipmentModalBtn) {
    equipmentModalBtn.onclick = function () {
      equipmentModal.style.display = "block";
    }

    closeEquipmentModalBtn.onclick = function () {
      equipmentModal.style.display = "none";
    }

    window.onclick = function (event) {
      if (event.target == equipmentModal) {
        equipmentModal.style.display = "none";
      }
    }
  }
}

window.displayImagePreview = function (input) {
  const file = input.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const logoInputWrapper = document.getElementById('company_logo_input');
      let previewElement = logoInputWrapper.querySelector('#image-preview-element');

      if (!previewElement) {
        previewElement = document.createElement('img');
        previewElement.id = 'image-preview-element';
        previewElement.classList.add('image-preview');
        logoInputWrapper.appendChild(previewElement);
      }

      previewElement.src = e.target.result;
      previewElement.style.display = 'block';
    }
    reader.readAsDataURL(file);
  }
}

function setupNewUserModal() {
  console.log("Loading");
  var newUserModal = document.getElementById("newUserModal");
  var newUserModalBtn = document.getElementById("new-user-modal");
  var closeNewUserModalBtn = document.getElementById("closeNewUserModalBtn");
  var newUserForm = document.getElementById("new_user_form");

  if (newUserModal && newUserModalBtn && closeNewUserModalBtn) {
    newUserModalBtn.onclick = function () {
      newUserModal.style.display = "block";
    }

    closeNewUserModalBtn.onclick = function () {
      newUserModal.style.display = "none";
    }

    window.onclick = function (event) {
      if (event.target == newUserModal) {
        newUserModal.style.display = "none";
      }
    }
  }

  if (newUserForm) {
    newUserForm.addEventListener("submit", function (event) {
      event.preventDefault();

      var formData = new FormData(newUserForm);
      formData.append("authenticity_token", document.querySelector('meta[name="csrf-token"]').getAttribute('content'));

      fetch(newUserForm.action, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            alert("Usuário criado com sucesso!");
            newUserModal.style.display = "none";
            newUserForm.reset();
          } else {
            alert("Ocorreu um erro ao criar o usuário: " + data.errors.join(', '));
          }
        })
        .catch(error => {
          alert("Ocorreu um erro inesperado.");
        });
    });
  }
}
