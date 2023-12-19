import Alpine from 'alpinejs'

window.Alpine = Alpine

<<<<<<< HEAD
Alpine.start()

//// FUNCIONS PÀGINA PREUS ////
  
// Funció per cambiar l'estil del boto anual/mensual i cambiar els preus de la pàgina de preus 

document.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.querySelectorAll('fieldset input[type="radio"]');
    const prices = document.querySelectorAll('.price'); // Selecciona todos los elementos de precio

    function updatePrices() {
        const isAnnual = document.querySelector('input[name="frequency"]:checked').value === 'anual';
        prices.forEach(price => {
            price.textContent = isAnnual ? price.dataset.annual : price.dataset.monthly;
        });
    }

    function updateStyles() {
        radioButtons.forEach(rb => {
            if(rb.checked) {
                rb.parentElement.classList.add('bg-green-600', 'text-white');
                rb.parentElement.classList.remove('text-black');
            } else {
                rb.parentElement.classList.remove('bg-green-600', 'text-white');
                rb.parentElement.classList.add('text-black');
            }
        });
        updatePrices();
    }

    radioButtons.forEach(radio => {
        radio.addEventListener('change', updateStyles);
    });

    updateStyles(); 
});

// Funció per obrir la taula de comparació de plans de la pàgina de preus

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('toggleButton').addEventListener('click', function() {
      var content = document.getElementById('contentToToggle');
      var comparePlans = document.getElementById('comparePlans');
      var closeComparison = document.getElementById('closeComparison');
    
      // Canvia l'estat del botó
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.classList.remove('opacity-100');
        content.classList.add('opacity-0');
  
        // Mostra el boto "Comparar plans"
        comparePlans.classList.remove('hidden');
        closeComparison.classList.add('hidden');
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.classList.remove('opacity-0');
        content.classList.add('opacity-100');
  
        // Mostrael boto "Tancar comparacio"
        comparePlans.classList.add('hidden');
        closeComparison.classList.remove('hidden');
      }
    });
  });

// Funció per desplegar les preguntes de FAQS de la pàgina preus

document.addEventListener('DOMContentLoaded', () => {
    const questionButtons = document.querySelectorAll('.bg-white dl div dt button');

    questionButtons.forEach(button => {
        const answerId = button.getAttribute('aria-controls');
        const answerElement = document.getElementById(answerId);

        // Oculta el contingut del desplegable y estableix aria-expanded en false
        answerElement.hidden = true;
        button.setAttribute('aria-expanded', 'false');

        button.addEventListener('click', () => {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            const iconCollapse = button.querySelector('svg:first-of-type');
            const iconExpand = button.querySelector('svg:last-of-type');

            // Canvia l'estat expandit/tancat
            button.setAttribute('aria-expanded', !isExpanded);
            answerElement.hidden = isExpanded;

            // Canvia les icones d'expandit/colapsar
            if (iconCollapse && iconExpand) {
                iconCollapse.classList.toggle('hidden');
                iconExpand.classList.toggle('hidden');
            }
        });
    });
});





  
=======
Alpine.start()
>>>>>>> main
