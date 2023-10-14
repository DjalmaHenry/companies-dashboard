import "@hotwired/turbo-rails"
import "controllers"

document.addEventListener("turbo:load", function () {
  setupCompanyModal();
});

document.addEventListener("turbo:load", function () {
  setupEquipmentModal();
});

document.addEventListener("turbo:load", function () {
  setupNewUserModal();
});

// Evento de logout
document.addEventListener("turbo:load", function () {
  document.getElementById('logout-button').addEventListener('click', function () {
    document.getElementById('logout_form').submit();
  });
});

// Funcao de mostrar o preview das imagens anexadas
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

// Funcao de criar nova empresa
function setupCompanyModal() {
  console.log("Inside setupCompanyModal");

  var modal = document.getElementById("companyModal");
  var modalBtn = document.getElementById("openCompanyModalBtn");
  var closeBtn = document.getElementById("closeCompanyModalBtn");

  if (modal && modalBtn && closeBtn) {
    console.log("Modal elements exist");

    modalBtn.onclick = function () {
      modal.style.display = "block";
    }

    closeBtn.onclick = function () {
      modal.style.display = "none";
    }

    window.addEventListener('click', function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  } else {
    console.warn("One or more modal elements are missing.");
  }

  var form = modal.querySelector("form");

  if (form) {
    console.log("Form exists");

    form.addEventListener("submit", function (event) {
      try {
        var nameInput = document.querySelector("#company_name");
        var addressInput = document.querySelector("#company_address");

        var nameError = document.getElementById("name-error");
        var addressError = document.getElementById("address-error");

        // Resetando os estilos de erro e mensagens
        nameInput.classList.remove("input-error");
        addressInput.classList.remove("input-error");
        nameError.style.display = "none";
        addressError.style.display = "none";

        if (!nameInput.value.trim()) {
          event.preventDefault();
          nameInput.classList.add("input-error");
          nameError.textContent = "Nome é obrigatório!";
          nameError.style.display = "block";
        }

        if (!addressInput.value.trim()) {
          event.preventDefault();
          addressInput.classList.add("input-error");
          addressError.textContent = "Endereço é obrigatório!";
          addressError.style.display = "block";
        }
      } catch (e) {
        console.error("Error in form listener:", e);
      }
    });
  } else {
    console.warn("Form does not exist in the modal.");
  }
}

// Funcao de criar novo equipamento
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

    window.addEventListener('click', function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  }

  var equipmentForm = equipmentModal.querySelector("form");
  if (equipmentForm) {
    equipmentForm.addEventListener("submit", function (event) {
      var nameInput = document.querySelector("#equipment_name");
      var serialInput = document.querySelector("#equipment_serial_number");
      var dateInput = document.querySelector("#equipment_acquisition_date");
      var responsibleInput = document.querySelector("#equipment_responsible_user");

      var nameError = document.getElementById("equipment-name-error");
      var serialError = document.getElementById("equipment-serial-error");
      var dateError = document.getElementById("equipment-date-error");
      var responsibleError = document.getElementById("equipment-responsible-error");

      // Resetando os estilos de erro e mensagens
      nameInput.classList.remove("input-error");
      serialInput.classList.remove("input-error");
      dateInput.classList.remove("input-error");
      responsibleInput.classList.remove("input-error");

      nameError.style.display = "none";
      serialError.style.display = "none";
      dateError.style.display = "none";
      responsibleError.style.display = "none";

      if (!nameInput.value.trim()) {
        event.preventDefault();
        nameInput.classList.add("input-error");
        nameError.textContent = "Nome é obrigatório!";
        nameError.style.display = "block";
      }

      if (!serialInput.value.trim()) {
        event.preventDefault();
        serialInput.classList.add("input-error");
        serialError.textContent = "Número de série é obrigatório!";
        serialError.style.display = "block";
      }

      if (!dateInput.value) {
        event.preventDefault();
        dateInput.classList.add("input-error");
        dateError.textContent = "Data de aquisição é obrigatória!";
        dateError.style.display = "block";
      }

      if (!responsibleInput.value.trim()) {
        event.preventDefault();
        responsibleInput.classList.add("input-error");
        responsibleError.textContent = "Pessoa responsável é obrigatória!";
        responsibleError.style.display = "block";
      }
    });
  }
}

// Funcao de criar novo usuario
function setupNewUserModal() {
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
