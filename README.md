# Rymdresan | Webbutveckling 1 Projekt

[Hemsida](https://rasmuseng.github.io/projekt/)

**Rymdresor är en hemsida för dig som vill lära dig lite mer om rymden på ett enkelt och smidigt sätt**

## Support

**Notera**: "Support" är ingen garanti och kan bero på olika verisioner, men de versioner som är nämda här är testade och ska fungerar som planerat.

| Safari | Chrome | Firefox | Microsoft Edge | Opera | Samsung internet |
|--------|--------|---------|----------------|-------|------------------|
| 13.1   | 90     | 88      | 90             | 76    | 14.0.3.5         |

## Förbättnignar

En stor förbättring som jag skulle kunna göra är att använda mig av ett stylesheet och sotera filträdet på ett bättre sätt. Att använda ett Stylesheet gör det enklare att underhålla sidan då allt finns på samma plats. Bättre prestanda för videogalleriet

## [W3schools](https://www.w3schools.com/)

### [Menu icon](https://www.w3schools.com/howto/howto_css_menu_icon.asp)

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