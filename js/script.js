// Creo variabile countdown
const countdown = document.getElementById('countdown'); 
console.log(countdown);


// Aggiorna il countdown ogni secondo
let tempoRimasto = 15; 

const timer = setInterval(() => {
    if (tempoRimasto > 0) {
        countdown.innerHTML = tempoRimasto; // Mostra il countdown sullo schermo
        tempoRimasto--;
    } else {
        clearInterval(timer);
        countdown.innerHTML = 'Tempo scaduto'; // Mostra il messaggio di fine countdown
    }
}, 1000);