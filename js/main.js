// Scrivi un programma che esegua un ciclo da 1 a 100 e a ogni iterazione appenda un elemento html al container con uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5 (vedi grafica allegata).
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per? Abbiamo visto qualcosa di particolare che possiamo usare? Come creare nuovi elementi html e appenderli al container?

const mainBox = document.querySelector('.main-box')

    for (let i = 1; i <= 100; i++) {
        mainBox.innerHTML += `<div class="box ${i}" >${i}</div>`;
    }

        if ((i % 3) && (i % 5)){
        }
    