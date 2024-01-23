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
