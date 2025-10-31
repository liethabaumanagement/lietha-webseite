// Cookie-Consent Management
document.addEventListener('DOMContentLoaded', function() {
    // Cookie-Funktionen
    function setCookie(name, value, days) {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + (value || '') + expires + '; path=/';
    }

    function getCookie(name) {
        const nameEQ = name + '=';
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Cookie-Banner nur anzeigen, wenn noch keine Einwilligung vorliegt
    if (!getCookie('cookie-consent')) {
        // Cookie-Banner erstellen
        const cookieBanner = document.createElement('div');
        cookieBanner.id = 'cookie-banner';
        cookieBanner.className = 'fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 p-4 md:p-6';
        cookieBanner.innerHTML = `
            <div class="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div class="text-gray-600 text-sm md:text-base">
                    Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
                    Weitere Informationen finden Sie in unserer <a href="datenschutz.html" class="text-lbm-blue hover:underline">Datenschutzerklärung</a>.
                </div>
                <div class="flex gap-4">
                    <button id="accept-cookies" class="btn btn-primary text-sm">Akzeptieren</button>
                    <button id="reject-cookies" class="btn bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm">Ablehnen</button>
                </div>
            </div>
        `;
        document.body.appendChild(cookieBanner);

        // Event-Listener für die Buttons
        document.getElementById('accept-cookies').addEventListener('click', function() {
            setCookie('cookie-consent', 'accepted', 365);
            cookieBanner.remove();
        });

        document.getElementById('reject-cookies').addEventListener('click', function() {
            setCookie('cookie-consent', 'rejected', 365);
            cookieBanner.remove();
        });
    }
});