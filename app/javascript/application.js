import "@hotwired/turbo-rails"
import "controllers"

document.addEventListener("turbo:load", function () {
  setupCompanyModal();
  setupEquipmentModal();
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

window.displayImagePreview = function(input) {
  const file = input.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
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


