(function initCookies() {
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
        setCookie('cookieNombre', 'valor', 30); 
        setCookie('cookieAceptada', 'true', 365); 
        showCookiesBanner(false);
    }

    window.rejectCookies = function() {
        
        showCookiesBanner(false);
    }

    const cookieAceptada = getCookie('cookieAceptada');
    if (cookieAceptada !== 'true') {
        showCookiesBanner(true);
    }
})();

