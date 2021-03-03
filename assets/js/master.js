// creo array

var emailList = ['gino.pilotino@gmail.com' , 'tizio.incognito@libero.it' , 'giulio.cesare@gmail.com'];
console.log(emailList);

var mail = prompt('Inserisci la tua mail per accedere');
console.log(mail);

var check = false;

for (var i = 0; i < emailList.length; i++) {
  if (emailList[i] == mail ) {
    check = true;
  }
}

if (check) {
  document.getElementById('green').innerHTML = 'Accesso consentito'
  console.log('Accesso consentito');
} else {
  document.getElementById('red').innerHTML = 'Accesso negato'
  console.log('Accesso negato');
}


// DADI

var min = 1 ;

var max = 6 ;

var giocatore = Math.floor(Math.random() * (max - min +1)) + min;

var cpu = Math.floor(Math.random() * (max - min +1)) + min;

console.log(giocatore , cpu);

var risultatoDOM = document.getElementById('risultato-estrazione')

if (cpu > giocatore) {
  risultatoDOM.innerHTML = 'Banco vince'
} else if (giocatore > cpu) {
  risultatoDOM.innerHTML = 'Giocatore vince'
} else {
  risultatoDOM.innerHTML = 'Pareggio'
}
