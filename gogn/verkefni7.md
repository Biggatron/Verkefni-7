
# Verkefni 7

Útfæra leik sem snýst um að giska á tölu milli 0 og 100.

Þegar `index.html` er opnað kemur upp gluggi sem biður notanda um að slá inn tölu á milli 0 og 100. Þegar tala er slegin inn skal breyta streng frá notanda í tölu og bera saman við handahófsvaldatölu. Ef talan er rétt skal birta notanda upplýsingar um það og bjóða upp á annan leik. Ef talan er ekki rétt skal birta skilaboð, m.v. hversu mikill munur er á ágiskun og réttri tölu:

* Ef munur er undir 5 skal birta "Mjög nálægt"
* Ef munur er undir 10 skal birta "Nálægt"
* Ef munur er undir 20 skal birta "Frekar langt frá"
* Ef munur er undir 50 skal birta "Langt frá"
* Annars skal birta "Mjög langt frá"

Ef notandi ákveður að spila ekki annan leik eru birtar upplýsingar um spilaða leiki á forminu:

```
Þú spilaðir X leiki
Meðalfjöldi ágiskana var Y
```

Sjá dæmi um leik í `leikur.mp4`.

Gefin eru föll í `scripts.js` og útskýring á því hvað þau eigi að gera. Ekki er krafa um að nota þau en útfæra skal forrit í því skjali.

## Snyrtilegt JavaScript

Samræma inndrátt og notkun á `{}` í gegnum forrit. Nota bil og línubil til að auka lesanleika.

```javascript

// ekki svona
function    foo()   {
  var i = 0;
var j = 1;
  if (i > 0)
  {
    j = 2;
  }
    return i + j;
}

// svona
function foo() {
  var i = 0;
  var j = 1;

  if (i > 0) {
    j = 2;
  }

  return i + j;
}
```

## Villur

Ef DevTools eru opnuð undir „console“ sjást þær villur sem koma upp. Í gefnu skjali er ein villa sem sést vegna línu 43.

## Mat

* 20% – Snyrtilegt JavaScript án villna
* 30% – Útfærsla á utanumhaldi, hægt að hætta, birtir upplýsingar um spilaða leiki
* 50% – Útfærsla á að spila leik, tekur við tölu og birtir skilaboð

## Sett fyrir

Verkefni sett fyrir á Uglu 15. október 2017.

## Skil

Senda skal tölvupóst til dæmatímakennara með fyrirsögn „Vefforritun - Verkefni 7“ í seinasta lagi þriðjudaginn 24. október 2017.

Póstur skal innihalda:

* Zip skjal með lausn sem heitir þínu notendanafni, t.d. `osk.zip`

## Einkunn

Sett verða fyrir tíu minni verkefni þar sem átta bestu gilda 3,5% hvert, samtals 28% af lokaeinkunn.

Sett verða fyrir tvö stærri verkefni þar sem hvort um sig gildir 11%, samtals 22% af lokaeinkunn.
