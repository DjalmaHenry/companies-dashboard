// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"


document.addEventListener("DOMContentLoaded", function() {
    // Pega o modal
    var modal = document.getElementById("simpleModal");
  
    // Pega o botão que abre o modal
    var modalBtn = document.getElementById("openModalBtn");
  
    // Pega o elemento <span> que fecha o modal
    var closeBtn = document.getElementById("closeModalBtn");
  
    // Evento para abrir o modal
    modalBtn.onclick = function() {
      modal.style.display = "block";
    }
  
    // Evento para fechar o modal
    closeBtn.onclick = function() {
      modal.style.display = "none";
    }
  
    // Evento para fechar o modal se clicar fora dele
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });
  