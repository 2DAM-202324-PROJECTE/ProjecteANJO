import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.start()

/// FUNCIONS GENERALS ///

// Funció per a les cookies

document.addEventListener('DOMContentLoaded', function () {
    function setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    }

    function getCookie(name) {
        const cookies = document.cookie.split('; ');
        for (const cookie of cookies) {
            const [cookieName, cookieValue] = cookie.split('=');
            if (cookieName === name) {
                return cookieValue;
            }
        }
        return null;
    }

    function showCookiesBanner(show) {
        const banner = document.getElementById('cookies-banner');
        if (banner) {
            banner.style.display = show ? 'block' : 'none';
        }
    }

    window.acceptCookies = function() {
        setCookie('cookieNombre', 'valor', 30);  // Cambia 'cookieNombre' y 'valor' según tus necesidades
        setCookie('cookieAceptada', 'true', 365);  // Añade una cookie para rastrear el consentimiento
        showCookiesBanner(false);
    }

    window.rejectCookies = function() {
        // Si necesitas establecer alguna cookie para el rechazo o realizar alguna acción, hazlo aquí
        showCookiesBanner(false);
    }

    // Verificar si la cookie de aceptación ya existe
    const cookieAceptada = getCookie('cookieAceptada');
    if (cookieAceptada !== 'true') {
        showCookiesBanner(true);
    }
});

function handleFormSubmit(event) {
    event.preventDefault(); // Evita el comportament predeterminat del formulari

    // Redirigir l'usuari a benvinguda.html
    // window.location.href = '/ProjecteANJO/Views/benvinguda.html';

    return false;
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
}(jQuery));

var $mcj = jQuery.noConflict(true);