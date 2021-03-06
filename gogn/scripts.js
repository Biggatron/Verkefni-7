/**
 * Verkefni 7 – Gisk leikur
 *
 * Útfæra leik sem snýst um að giska á tölu milli 0 og 100.
 */

/**
 * global fylki sem geymir fjölda ágiskana í leikjum
 * Ef fylki er tómt hefur engin leikur verið spilaður.
 * Ef fylki er [2, 3] hafa verið spilaðir tveir leikir þar sem:
 *   - Fyrsti kláraðist í tveim ágiskunum
 *   - Seinni kláraðist í þrem ágiskunum
 */
var games = [];

/**
 * Byrjar leikinn okkar með því að kalla í play().
 * Eftir að að play() klárar, bíður notanda að spila annan leik með confirm()
 * Ef notandi ýtir á "ok" er annar leikur spilaður
 * Ef ýtt er á "cancel" er niðurstöðum leikja skilað með getResults() og alert()
 */
function start() {
  play();
  while (confirm('Viltu spila annan leik?') === true) {
    play();
  }
  getResults();
}

/**
 * Spilar einn leik. Sér um að:
 *   - Velja handahófskennda tölu í byrjun með randomNumber()
 *   - Biðja notanda um tölu með prompt()
 *   - Vinna úr inntaki frá notanda með parseGuess()
 *   - Láta vita hversu nálægt eða rétt gisk er með getResponse() og alert()
 *   - Halda utan um fjölda ágiskana
 *   - Vista fjölda ágiskana "games" fylki þegar búið að giska rétt
 *
 * Ef notandi ýtir á "cancel" þegar beðið er um ágiskun skal hætta í leik en
 * ekki vista ágiskanir (nota "break" í lykkju.)
 *
 * Þarf að útfæra með lykkju og flæðistýringum.
 */
function play() {
  var guessraw;
  var guess;
  var counter = 0;
  var correct = randomNumber(100);
  while (guessraw !== correct) {
    guessraw = prompt('Giskaðu á tölu');
    if (guessraw === null) {
      break;
    }
    guess = parseGuess(guessraw);
    getResponse(guess, correct);
    counter = counter + 1;
    if (guess === correct) {
      games.push(counter);
      break;
    }
  }
}

/**
 * Skilar niðurstöðum um spilaða leiki sem streng.
 * Fjölda leikja er skilað ásamt meðalfjölda giska, t.d.:
 *   "Þú spilaðir 10 leikir
 *    Meðalfjöldi ágiskana var 6"
 * Ath að meðalfjöldi kemur í nýrri línu.
 * Ef enginn leikur var spilaður er "Þú spilaðir engan leik" skilað.
 */
function getResults() {
  var average = calculateAverage(games);
  if (games.length === 0) {
    alert('Þú spilaðir engan leik');
  } else {
    alert('Þú spilaðir ' + games.length + ' leiki.\nMeðalfjöldi ágiskanna var ' + average);
  }
}

/**
 * Reiknar út og skilar meðal ágiskunum í öllum leikjum sem geymdir eru í
 * global breytu "games". Skilar gildi með tveim aukastöfum.
 * Ef games = [3, 4, 4] er niðurstaðan
 * (3 + 4 + 4) / 3 = 3.666666667
 * og er henni skilað sem 3.67
 *
 * Þarf að útfæra með lykkju.
 */
function calculateAverage(n) {
  var sum = 0;
  for (var i=0; i<n.length; i++) {
    sum = sum + n[i];
  }
  var average = (sum/n.length).toFixed(2);
  return average;
}

/**
 * Tekur inn input sem streng og skilar þeirri tölu sem hægt er að ná þar úr.
 * Ef ekki er hægt að ná tölu úr input er null skilað.
 */
function parseGuess(input) {
  var number = parseInt(input, 10);
  if (number <= 0 || number > 0) {
    return number;
  } else {
    return null;
  }
}

/**
 * Skilar svari sem birta á notanda sem streng, tekur inn tvær breytur
 *   - guess sem tölu, ágiskun notanda
 *   - correct sem tölu, rétt gildi
 * Ef guess er < 0 eða ekki tala skal skila strengnum "Ekki rétt"
 * Ef guess er nákvæmlega sama og correct skal skila strengnum "Rétt"
 * Ef munur er undir 5 (|correct - guess| < 5) skal skila "Mjög nálægt"
 * Ef munur er undir 10 skal skila "Nálægt"
 * Ef munur er undir 20 skal skila "Frekar langt frá"
 * Ef munur er undir 50 skal skila "Langt frá"
 * Annars skal skila "Mjög langt frá"
 *
 * Þarf að útfæra með flæðistýringu.
 * Math.abs skilar algildi tölu: |a| = Math.abs(a)
 */
function getResponse(guess, correct) {
  var diff = Math.abs(guess - correct);
  if (guess < 0 || guess == null) {
    return alert('Ekki rétt');
  }
  if (guess === correct) {
    return alert('Rétt');
  }
  if (diff < 5) {
    return alert('Mjög nálægt');
  }
  if (diff < 10) {
    return alert('Nálægt');
  }
  if (diff < 20) {
    return alert('Frekar langt frá');
  }
  if (diff < 50) {
    return alert('Langt frá');
  } else {
    return alert('Mjög langt frá');
  }
}

/**
 * Skilar tölu af handahófi frá [0, n]
 */
function randomNumber(n) {
  return Math.floor(Math.random() * (n + 1));
}

// Byrjar leik
start();
