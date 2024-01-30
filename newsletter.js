function redirectToWelcomePage() {
    console.log("Redireccionando a la página de bienvenida...");

    // Obtener el valor del campo de correo electrónico
    var email = document.getElementById('mce-EMAIL').value;

    // Expresión regular para validar el formato del correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verificar si el correo electrónico es válido
    if (emailRegex.test(email)) {
        // Si el correo es válido, mostrar mensaje de éxito
        var successMessage = `
            <div class="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-900 p-4 rounded-md shadow-lg opacity-0 transition-opacity duration-500" id="successMessage">
                <div class="flex">
                <div class="flex-shrink-0">
                    <svg aria-hidden="true" class="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" fill-rule="evenodd" />
                    </svg>    
                </div>
                <div class="ml-3">  
                    <h3 class="text-sm font-medium text-green-800">T'has registrat correctament!</h3>
                    <div class="mt-2 text-sm text-green-700">
                        <p>T'hem enviat un missatge de benvinguda al correu. Pots desubscriure't en qualsevol moment des d'aquest mateix correu que t'hem enviat.</p>
                    </div>          
                        <button class="absolute top-1 right-1 text-green-900 hover:text-green-700 focus:outline-none" onclick="dismissMessage('successMessage')">
                    <svg class="h-4 w-4 fill-current" fill="currentColor" viewBox="0 0 20 20">
                        <path clip-rule="evenodd" d="M10 12.586l2.293 2.293a1 1 0 001.414-1.414L11.414 11l2.293-2.293a1 1 0 10-1.414-1.414L10 9.586 7.707 7.293a1 1 0 00-1.414 1.414L8.586 11 6.293 13.293a1 1 0 101.414 1.414L10 12.586zM10 4a1 1 0 100-2 1 1 0 000 2z" fill-rule="evenodd"></path>
                    </svg>
                </button>
                </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', successMessage);

        // Aplicar animación de aparición
        setTimeout(function() {
            var successMessage = document.getElementById('successMessage');
            successMessage.classList.remove('opacity-0');
        }, 100);

        // Cerrar el mensaje después de 5 segundos
        setTimeout(function() {
            dismissMessage('successMessage');
        }, 5000);

        return true; // Permitir que el formulario se envíe
    } else {
        // Si el correo no es válido, mostrar mensaje de error
        var errorMessage = `
            <div class="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-red-100 text-red-900 p-4 rounded-md shadow-lg opacity-0 transition-opacity duration-500" id="errorMessage">
                <div class="flex">
                    <div class="flex-shrink-0">
                        <svg aria-hidden="true" class="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                            <path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" fill-rule="evenodd" />
                        </svg>
                    </div>         
                    <div class="ml-3">
                      <h3 class="text-sm pr-2 font-medium text-red-800">Has d'introduir un correu vàlid, aquí tens un exemple: </h3>
                      <div class="mt-2 text-sm text-red-700">
                        <ul class="list-disc space-y-1 pl-5" role="list">
                          <li>example@example.com</li>
                        </ul>
                      </div>
                    </div>       
                    <button class="absolute top-1 right-1 text-red-900 hover:text-red-700 focus:outline-none" onclick="dismissMessage('errorMessage')">
                    <svg class="h-4 w-4 fill-current" fill="currentColor" viewBox="0 0 20 20">
                        <path clip-rule="evenodd" d="M10 12.586l2.293 2.293a1 1 0 001.414-1.414L11.414 11l2.293-2.293a1 1 0 10-1.414-1.414L10 9.586 7.707 7.293a1 1 0 00-1.414 1.414L8.586 11 6.293 13.293a1 1 0 101.414 1.414L10 12.586zM10 4a1 1 0 100-2 1 1 0 000 2z" fill-rule="evenodd"></path>
                    </svg>
                </button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', errorMessage);

        // Aplicar animación de aparición
        setTimeout(function() {
            var errorMessage = document.getElementById('errorMessage');
            errorMessage.classList.remove('opacity-0');
        }, 100);

        // Cerrar el mensaje después de 5 segundos
        setTimeout(function() {
            dismissMessage('errorMessage');
        }, 5000);

        return false; // Evitar que el formulario se envíe
    }
}

function dismissMessage(messageId) {
    var message = document.getElementById(messageId);
    if (message) {
        // Aplicar animación de desaparición
        message.classList.add('opacity-0');

        // Eliminar el mensaje después de que termine la animación de desaparición
        setTimeout(function() {
            message.parentNode.removeChild(message);
        }, 500);
    }
}



function mostrarMensaje(mensajeHTML, tipo) {
    var mensajeContenedor = document.getElementById('mensajeContenido');
    mensajeContenedor.innerHTML = mensajeHTML;

    var mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.classList.remove('bg-red-50', 'bg-green-50');
    mensajeDiv.classList.add(tipo === 'error' ? 'bg-red-50' : 'bg-green-50');
    mensajeDiv.style.display = 'block';
}

function cerrarMensaje() {
    document.getElementById('mensaje').style.display = 'none';
}


(function ($) {
    window.fnames = new Array();
    window.ftypes = new Array();
    fnames[0] = 'EMAIL';
    ftypes[0] = 'email';
    fnames[1] = 'FNAME';
    ftypes[1] = 'text';
    fnames[2] = 'LNAME';
    ftypes[2] = 'text';
    fnames[3] = 'ADDRESS';
    ftypes[3] = 'address';
    fnames[4] = 'PHONE';
    ftypes[4] = 'phone';
    fnames[5] = 'BIRTHDAY';
    ftypes[5] = 'birthday';
})(jQuery);

var $mcj = jQuery.noConflict(true);
