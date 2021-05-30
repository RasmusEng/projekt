# Rymdresan | Webbutveckling 1 Projekt
## Info
**Rymdresor är en hemsida för dig som vill lära dig lite mer om rymden på ett enkelt och smidigt sätt**

[Hemsida](https://rasmuseng.github.io/projekt/)

Namn: Rasmus Engström

Skola: Nyköpings Gymnasium Gripen

Klass: TE19

Datum: 24 Maj 2021

## Support

**Notera**: "Support" är ingen garanti och kan bero på olika verisioner av ditt operativ och de som är nämda är testade på MacOS Catalina och Big Sur, Windows och Android. Sidan är testad för standadiserade upplösningar och fungerar bra på 4k, 2k, 1080p, 720p och på de popolöraste telefonerna.

| Safari | Chrome | Firefox | Microsoft Edge | Opera | Samsung internet |
|--------|--------|---------|----------------|-------|------------------|
| 14     | 90     | 88      | 90             | 76    | 14.0.3.5         |
| 13.1   | 89     | 87      | 89             | 75    |                  |

## Förbättnignar
En stor förbättring som jag skulle kunna göra är att använda mig av ett stylesheet och sotera filträdet på ett bättre sätt. Att använda ett Stylesheet gör det enklare att underhålla sidan då allt finns på samma plats. Bättre prestanda för videogalleriet och mer ordning när det kommer till html taggarna, genom att ha samma stylesheet hade alla sidor haft samma design. När det kommer till prestanda och hastighet på sidan ska det inte vara något problem förutom när du precis kommer in i videogalleriet eftersom du måste ladda in en massa olika youtube videos vilket i vissa fall kan vara krävande och långsamt. Jag la in lazy loading  i iframe taggarna vilket gör att videorna som inte syns inte laddas in, detta gör så att telefoner som inte har samma prestanda som datorer kan ladda in en bild i taget. Sidan är gjord på ett sätt där det skulle vara ganska svårt att föra in flera sidor om man skulle vilja skriva om tillexempel astroidbältet.

### Design
När det kommer till designen av sidan skulle jag kunnat förbättra en hel del då jag stötte en hel del problem när det gäller bilder och hur jag valde att lägga upp sidan. Den ändringen jag skulle vilja göra i efterhand är att få sidan enklare att navigera då navbaren på hemsidan är lite klurig eftersom den förändras beroende på vilken sida du är på bara från navbaren. För att göra det enklare för användaren skulle jag jort så att navbaren var en under headern. Detta hade gjort det enklare att föra in och komma på nya ideer och en enklare sida att förså och navigera, sedan modularitet är något som hade varit ett större problem.

### Insperation
Jag har tagit insperation från sidor som [Apple](https://www.apple.com/se/), [Nasa](https://www.nasa.gov/), [Blizzard](https://eu.shop.battle.net/en-gb) och [Samsungs](https://www.samsung.com/se/) hemsidor då jag tycket att de är gjorda och konstruerade på ett snyggt och effektivt sätt då vem som hällst utan problem kan navigera sig genom sidorna, även fast de har olika designer.

## Webbhotell
Ett webhotell är den plats du väljer att ladda upp och publicera din hemsida. Beroende på vilket webbhotell du väljer får tillgång till en mängd olika fuktioner och utrymme, detta gör det väldigt viktigt att veta vad du vill ha från ett webbhotell innan du väljder din plan.

### [Github](https://github.com/)
Github är ett dotterföretag av Microsoft och blev uppköpt den 4 Juni 2018 för 7.5 miljarder amerikanska dollar. En fördel med att använda GitHub som ett webbhotell är att det är en gratis tjänst och hosting genom github pages. En nackdel med github är att du behöver göra sidan själv och därmed behöver kunskap inom html och css åtminståne. Detta gör att det inte skulle vara aktuellt för någon som inte har någon förkunskap inom detta område och bara vill ha en hemsida. 

### [Loopia](https://www.loopia.se/)
Loopia erbjuder tre olika planer när det kommer till deras webbhottelpaket, där du får en väldigt flexibel hosting där du kan kan välja om du vill hosta genom unix eller windows. Loopia erbjuder en sitebuilder som kan vara väldigt användbar om du inte har någon erfarenhet med html, css och javascript. Loopia har en del olika supportalternativ de erbjuder samtal, chatt, epost men även lösningar på vanliga frågor genom deras hemsida. Vilket gör att loopia är ett bra alternativ för både erfarna och nybörjare när det gäller webbutveckling.

### [Miss hosting](https://misshosting.se/)
Misshostring är väldigt likt loopia när det kommer till hosting och olika erbjudande, men det som skiljer Loopia och Misshosting är hur din server blir speccad och hur många hemisdor du kan ha. Miss hosting erbjuder en gratis sitebuilder och obegränsad trafik. När det gäller suport kan det vara bättre då Misshosting bara har försvarade frågor och en chatt och ingen direkt telefonsupport.

## Förbättnignar
En stor förbättring som jag skulle kunna göra är att använda mig av ett stylesheet och sotera filträdet på ett bättre sätt. Att använda ett Stylesheet gör det enklare att underhålla sidan då allt finns på samma plats. Bättre prestanda för videogalleriet och mer ordning när det kommer till html taggarna, genom att ha samma stylesheet hade alla sidor haft samma design. När det kommer till prestanda och hastighet på sidan ska det inte vara något problem förutom när du precis kommer in i videogalleriet eftersom du måste ladda in en massa olika youtube videos vilket i vissa fall kan vara krävande och långsamt. Jag la in lazy loading  i iframe taggarna vilket gör att videorna som inte syns inte laddas in, detta gör så att telefoner som inte har samma prestanda som datorer kan ladda in en bild i taget. Sidan är gjord på ett sätt där det skulle vara ganska svårt att föra in flera sidor om man skulle vilja skriva om tillexempel astroidbältet.

### Design
När det kommer till designen av sidan skulle jag kunnat förbättra en hel del då jag stötte en hel del problem när det gäller bilder och hur jag valde att lägga upp sidan. Den ändringen jag skulle vilja göra i efterhand är att få sidan enklare att navigera då navbaren på hemsidan är lite klurig eftersom den förändras beroende på vilken sida du är på bara från navbaren. För att göra det enklare för användaren skulle jag jort så att navbaren var en under headern. Detta hade gjort det enklare att föra in och komma på nya ideer och en enklare sida att förså och navigera, sedan modularitet är något som hade varit ett större problem då det inte finns något plats i headern att lägga till nya saker på ett snyggt och smidigt sätt.

## Tekenkod
Teckenkod uppstod först när datorer behövde kommunicera men varande och en av de första standerna var ASCII(American Standard Code for Information Interchange) Och den amrikanska verisionen är idag standardiserad som ISO 646. ASCII använder en 7-bitars kod som kan representera 128 olika tecken och räcker till den engelska alfabetet för stora och små bokstäver. Det finns ett flertal landspecifika ASCII-kodninger men problemet men problemet med ASCII-kodning är att det inte fungerar bra för intertationell kommunikation. Där teckenkod är den nyckel som knyter kodpunkter till bytes i datorns minne som sedan avbilda bytes tillbaka till kodpunkter.

När man vill läsa information från olika språk så måste man byta variant till ISO 8859 där teckenkodnignen måste fginnas i programmet som ska lsa dokukemtet vilket ofta kan leda till att fel tecken kan visas. Detta gjorde att ett ett projekt vid namnet Unicode startades med målet att standadiserad. För att göra Unicode effektiv reslulterade der i olika varianter av UTF som kallas UTF-8, UTF-16, UTF32 där UTF-8 är den vanligaste och den jag använde när jag gjorde min hemsida.

### UTF-8
UTF-8 är en åtta-bitars Unicode transformationsformat som är en längdvarierande teckenkodning som använda för att representera texts som är kodad i Unicode som en sekvens av byte. UTF-8 har valts som den huvudsakliga teckenkodningen i internetprotokoll där nya protokoll måste ge stöd till denna teckenkodning om det inte är av speciella skäl är olämplig. UTF-8 gör så att text visas på samma sätt oavsätt vilken platform du befinner dig på. Detta gör så att bokstäver som åäö kommer visas för alla på samma sätt även fast du befinner dig på en plats eller en dator som avnänder sig av bokstäverna.

## Lånad/tagen kod
Både meny ikonen och bilspelet är tagen från [W3schools](https://www.w3schools.com/) och slidern gjorde vi i skolan me hjälp från läraren. Men vilka risker finns det när man använder någon annans kod. Det kan finnas stora risker när du avnänder okänd kod om du inte vet vad som händer, detta kan vara allt från små grejer till saker som kan vara skadlig för de som använder sidans information eller utrustning. W3schools är en trovärdig hemsida och jag hittade ingen farlig javascript på de guider jag följde. Det finns dock koprimerad javascript som är näst intill omöjligt för en männsika att läsa vilket kan innehålla farlig javarcipt. Om du inte är säker om koden är skadlig borde en annan lösnings sökas och koden borde inte användas.

### [Meny ikon](https://www.w3schools.com/howto/howto_css_menu_icon.asp)
```html
<div class="toggle" onclick="myFunction(this)" id="x">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
</div>
```

```css
/* Animerad knapp */
.bar1, .bar2, .bar3 {
    width: 35px;
    height: 5px;
    background-color: var(--colorwhite);
    margin: 6px 0;
    transition: 0.4s ease-in-out;
}

/* Roterar översta strecket*/
.change .bar1 {
    transform: rotate(-45deg) translate(-9px, 6px) ;
    transform: rotate(-45deg) translate(-9px, 6px) ;
}

/* Fader bort den i mitten */
.change .bar2 {
    opacity: 0;
}

/* Roterar sista strecket */
.change .bar3 {
    transform: rotate(45deg) translate(-8px, -8px) ;
    transform: rotate(45deg) translate(-8px, -8px) ;
}
```

### [Bildspel](https://www.w3schools.com/howto/howto_js_slideshow.asp)
```html
<div class="slideshow-container">
    <div class="mySlides fade">
    <div class="numbertext">1 / 3</div>
    <img src="bild.png">
</div>

<div class="mySlides fade">
    <div class="numbertext">2 / 3</div>
    <img src="bild.png">
</div>

<div class="mySlides fade">
    <div class="numbertext">3 / 3</div>
    <img src="bild.png">
</div>

<!-- Fram och tillbaka  -->
<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
<a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>
<br>

<!-- Cirklarna under -->
<div style="text-align:center">
    <span class="dot" onclick="currentSlide(1)"></span>
    <span class="dot" onclick="currentSlide(2)"></span>
    <span class="dot" onclick="currentSlide(3)"></span>
</div>
```

```css
/* Bildspel container */
.slideshow-container {
    grid-area: bildspel;
    max-width: 640px;
    position: relative;
    margin: auto;
    display: flex;
    justify-content: center;
    transform: scale(1);
}

/* Gömmer bilder från start */
.mySlides {
    display: none;
}

/* Fram och bakåtknappar */
.prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: var(--colorwhite);
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
}

/* Position för fram och bak knappar */
.next {
    right: 0;
    border-radius: 3px 3px 3px 3px;
}
.prev{
    left: 0;
    border-radius: 3px 3px 3px 3px;
}

/* När man hoovrar över knapparna*/
.prev:hover, .next:hover {
    background-color: rgba(0,0,0,0.8);
}

/* Nummer text på bilspelet (ex. 1/3) */
.numbertext {
    color: var(--colorblack);
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
}

/* Plupparna under bildspel */
.dot {
    display: flex;
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
    margin-bottom: 0px;
}

.active, .dot:hover {
    background-color: #717171;
}

/* Fading animation */
.fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
}

@-webkit-keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
}

@keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
}
```

```js

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
```

### Valkatalog
Valkatalogen är ändrad kod från en uppgift vi gjorde i skolan och innehåller ingen farlig javascript.
```html
<nav class="valkatalog" id="nav">
    <div class="toggle" onclick="myFunction(this)" id="x">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
    </div>
    <!-- Länkar till alla andra planeter -->
    <ul class="links">
        <li class="planetlist">
            <a class="planet" href="merkurius.html">Merkurius</a>
        </li>
        <li class="planetlist">
            <a class="planet" href="venus.html">Venus</a>
        </li>
        <li class="planetlist">
            <a class="planet" href="jorden.html">Jorden</a>
        </li>
        <li class="planetlist">
            <a class="planet" href="mars.html">Mars</a>
        </li>
        <li class="planetlist">
            <a class="planet" href="jupiter.html">Jupiter</a>
        </li>
        <li class="planetlist">
            <a class="planet" href="saturnus.html">Saturnus</a>
        </li>
        <li class="planetlist">
            <a class="planet" href="uranus.html">Uranus</a>
        </li>
        <li class="planetlist">
            <a class="planet" href="neptunus.html">Neptunus</a>
        </li>
    </ul>           
</nav>
```

```css
/* Valkatalog som en slidevar*/
.valkatalog{
    background-color: var(--colorblack);
    width: 200px;
    height: 100%;
    position: relative;

    position: fixed;
    right: -200px;
    top: 0;
    transition: .3s ease-in-out;
    display: grid;
}

/* Slider */
.toggle{
    color: var(--colorwhite);
    display: inline-block;
    cursor: pointer;
    
    position: absolute;
    top: 20px;
    right: 100%;
    margin-right: 60px;
}

.open{
    right: 0;
}
```

```js
'use strict'
/*  */
let van = document.getElementById('nav')
let x = document.getElementById('x')

//console.log(nav, x);

x.addEventListener('click', function(){
    nav.classList.toggle('open')
})

document.addEventListener('keydown', function(event){
    if(event.key === "Escape" && nav.classList.contains('open')){
        nav.classList.toggle('open')
    }
})
```

## Använt matrial och Upphovsrätten
Detta är något som är väldigt viktigt att tänka på när det gälle offentiliga sidor eftersom det kan vara stora konsikvenser.

### Upphovsrätten
Upphovsrätten är en samling av lagar och regleringar kring verk och hur de får användas. Den som vill använda ett skyddat verk behöver tillstånd vilket akrivmyndigheten inte kan utfärda för upphovsmannans räkning. Istället ska användaren vända sig direkt till upphovsmannens eller upphovsrättorganisationen. Om upphovsmannen är okänd eller inte har några kända arvingar kan det vara extremt svårt att få tillstånd att använda värket. Och det är upp till användaren att överväga hur mycket efterforskning han ska göra. Om upphovsmannen har varit död i mer än 70 år har upphovsrätten upphört, dock ska namn alltid sättas ut i anslutning till verket.

### Använt matrial
Matrialet som är använt på hemsidan kommer främst från sidor som get ut bilder och ikoner för gratis användning. När det kommer till andra bilder så är de från [Nasa](https://www.nasa.gov/) som tillåter användning av deras bilder. Jag skulle dock vilja att bilderna skulle länka till platsen för att besökare på hemsidan också skulle kunna använda bilderna.

## Etik och Intigritet
Etik och intigritet är en väldigt viktig del på internet. Intrigitet är väldigt viktigt eftersom att avnänderen av din sida ska känna sig säker och inte vara orolik att privat information ska läckas genom sidan. Man behöver tänka på att internettjänster inte glömmer bort saker vi har tilldelat den vilket gör att många företag och hemsidor använder detta för att ge dig riktad reklam. Det är en stor anledning till varför det är viktigt att veta vilka tjänster du använder dig av och vilken data de använder.

När det kommer till min sida finns det ingen form för mig att spara den information som användaren anger på sidan. Men när det gäller andra tjänster så finns det stora problem med just detta, facebook är ett bra exempel på hur användares information används för att ge dig reklam och underhållning som du själv tycker är underhållande. Ett företag vid namnet [Signal](https://signal.org/blog/) började skicka ut annoser på [Instagram](https://www.instagram.com/) som var väldigt specifika till just användaren som fick dem. Istället för att ge ut reklam om detas hemsida så valde de att visa vad instagram vet om användaren och visa de direkt.

## Sammanfattninig
Jag tycker slutprodukten av min sida blev helt okej men som med andra projekt hittar man alltid småporblem och fixar som att footern och om sidan har samma css fast två olika css filer och själva filstrukturen och hur det blev konstigt att ha planeterna i en egen mapp. Dock är jag nöjd atrt sidan fungherar i alla populära upplösningar och hur navbaren fungerade på ett bra och smidigt sätt även på mobiltelefoner.

Ett stort problem var skillndaden på vissa sidor och prestandan på videogalleriet även fast jag använda lazy load som gör att bara de videor som syns laddas in. Men skulle gjort videorna var större så att antalet videor inte var så många. Försökte också få in alla javascript i en fil men det blev problem och fick det inte att fungera.

Sidan fungerar dock som den ska på de senaste verisionerna av de testade webbläsarna, dock hade jag lite problem med några år gammla chrome versioner samt internet explorer. Och tycker att resultatet inte blev helt allt för dåligt.





