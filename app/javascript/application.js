import "@hotwired/turbo-rails"
import "controllers"

document.addEventListener("turbo:load", function () {
  setupCompanyModal();
  setupEquipmentModal();
  setupDeleteEquipment();
});

function setupCompanyModal() {
  var modal = document.getElementById("simpleModal");
  var modalBtn = document.getElementById("openModalBtn");
  var closeBtn = document.getElementById("closeModalBtn");

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

function setupDeleteEquipment() {
  const deleteLinks = document.querySelectorAll(".delete-equipment");
  
  deleteLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      if (confirm("Are you sure?")) {
        fetch(link.href, {
          method: 'DELETE',
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            "X-CSRF-Token": document.querySelector("meta[name='csrf-token']").content
          },
          credentials: 'same-origin'
        }).then(response => {
          if (response.ok) {
            const equipmentRow = document.querySelector(`#equipment-${link.dataset.equipmentId}`);
            if (equipmentRow) equipmentRow.remove();
          }
        });
      }
    });
  });
}


