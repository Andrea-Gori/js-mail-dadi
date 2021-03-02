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
  console.log('Accesso consentito');
} else {
  console.log('Accesso negato');
}
