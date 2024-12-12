

function Tombola() {
    const tabellone = document.getElementById ('tabellone');

    for ( let i = 1; i <= 76; i++) {
        let casella = document.createElement('div');
        casella.classList.add('number');
        casella.textContent = i;
        tabellone.appendChild(casella)
   

    casella.addEventListener('click', function (){
        casella.classList.toggle('selected');
    })

    tabellone.appendChild(casella);
}
}

function estraiNumero (){
    const numeroEstratto = Math.floor(Math.random() * 76) + 1;
    document.getElementById('numeroEstratto').textContent = 'Numero estratto : ' + numeroEstratto;
    evidenziaNumero(numeroEstratto);
}

function evidenziaNumero(numero) {
    const caselle = document.querySelectorAll('.number');
    caselle.forEach(casella => {
        if ( parseInt(casella.textContent) === numero) {
            casella.classList.add('selected');
        }
    });
}

document.getElementById('bottone').addEventListener('click', estraiNumero);

window.onload = Tombola;