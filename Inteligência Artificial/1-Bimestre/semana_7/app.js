const notifyBtn = document.getElementById('notify-btn');

notifyBtn.addEventListener('click', () => {
    // Solicita permissão ao usuário
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            new Notification('EcoShop', {
                body: 'Obrigado por assinar nossas notificações!',
                icon: 'icons/icon-192x192.png'
            });
        } else {
            alert('Você bloqueou as notificações.');
        }
    });
});


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
    .then((registration) => {
        console.log('Service Worker registrado com sucesso:', registration);
    })
    .catch((error) => {
        console.error('Falha ao registrar o Service Worker:', error);
    });
}
