console.log('Zad1');

var numeroUno = 12,
    numeroDuo = 11;

if (numeroUno > numeroDuo) {
  console.log('numeroUno jest wieksza');
} else {
  console.log('numeroDuo jest wieksza');
}

console.log('Zad2');

var a = 100,
    b = 120,
    c = 20;

if (a > b && a > c) {
  console.log('a jest najwieksza');
} else if (b > a && b > c) {
  console.log('b jest nawiejszka');
} else {
  console.log('c jest najwieksza');
}

console.log('Zad3');

for (var i = 0; i < 10; i++) {
  console.log('Lubie JS');
}

console.log('Zad4');

var result = 0;

for (var i = 1; i <= 10; i++ ) {
  result = result + i;
}

console.log(result);

console.log('Zad5');

var n = 5;

for (var i = 0; i <= n; i++) {
  if (i % 2 === 0) {
    console.log(i+' - parzysta');
  } else {
    console.log(i+' - nieparzysta');
  }
}
console.log('Zad6');

for (i = 0; i <=4; i++){
  for (j = 0; j <=4; j++){
    console.log("i= " + i + ", j= " + j);
  }
}

console.log('Zad7');

/*
 Pętla zewnętrzna z licznikiem o zmiennej ```i``` zajmuje się
wierszami, a pętla wewnętrzna z licznikiem o zmiennej ```j``` zajmuje się kolumnami.
Zaczynamy od lewej górnej gwiazdki i przemieszczamy się w prawo będąc w pierwszym wierszu.
Kiedy pętla wewnętrzna dojdzie do ostatniej kolumny, kończy działanie. Wtedy pętla zewnętrzna
zwiększa licznik o 1 (przechodzi do kolejnego wiersza) i tak dalej.
*/

//Zmienna, przechowująca wielkość naszego kwadratu
var size = 5;

//Zmienna przechowująca jedną linię gwiazdek
var lineOfStars = "";

for(var i = 0; i < size; i++) {
    // W każdym kroku muszę zresetować zmienną, ponieważ zaczcynam tworzenie nowej linii
    lineOfStars = "";
    for(var j = 0; j < size; j++) {
        //Do zmiennej lineOfStars dodaje gwiazdkę
        lineOfStars = lineOfStars + "*";
    }
    // Oddzielam kazdą linię, pustym wierszem, ponieważ przeglądarka widząc 5 takich samych
    //wyników zwinie nasz kwadrat z gwiazdek do jednej linijki
    console.log(" ");

    //Wypisuje w konsoli zmienną lineOfStars (jej zawartość - dlatego jest bez cudzysłosów)
    console.log(lineOfStars);
}

console.log('Zad8a - P.zalezna');

var n = 5;
var stars = "";

for(var i = 1; i <= n; i++) {
    stars = "";
    for(var j = 0; j < i; j++) {
        stars = stars + "*";
    }
    console.log(" ");
    console.log(stars);
}

console.log('Zad8a - P.niezalezna');
var rows = 5,
    printStars = '';

for(var i = 1; i <= rows; i++) {
  printStars = '';
  for(var j = 1; j <= rows; j++){
    if (j <= i) {
          printStars = printStars + '*';
    }else {
      break;
    }
  }
  console.log(' ');
  console.log(printStars);
}

console.log('Zad9');

var rowLength = 5;
    printContainer = '';

for(var i = 1; i <= rowLength; i++) {
  printContainer = '';
  for(var j = 1; j <= rowLength; j++){
    if (j <= i){
      printContainer = printContainer + '*';
    }else {
      for(k = i+1; k <=rowLength; k++){
        printContainer = printContainer + k;
      }
      break;
    }
  }
  console.log(' ');
  console.log(printContainer);
}
