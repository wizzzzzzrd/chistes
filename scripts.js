const jokes = {
    joseph: "¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.",
    dana: "¿Qué hace una abeja en el gimnasio? Zum-ba.",
    enoc: "¿Por qué los esqueletos no pelean entre ellos? Porque no tienen agallas.",
    palacios: "¿Cuál es el colmo de un electricista? No encontrar su corriente de trabajo.",
    german: "¿Qué le dice un jardinero a otro? ¡Disfrutemos mientras podamos!"
};

document.getElementById('jokeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const member = document.getElementById('teamMember').value;
    document.getElementById('joke').innerText = jokes[member] || "Selecciona un integrante.";
});

// Register service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(() => console.log('Service Worker Registered'));
}
