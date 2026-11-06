<script setup>

</script>

<template>
  <div class="about">
    <h1 id="about__header">About us</h1>
    <div class="about__info__container">
      <div id="about__info__text__container">
        <div class="about__info__text">
          <img src="../assets/Juri.jpg" class="profilbild">
          <div class="inhalt__container">
            <div class="steckbrief__titel">
              Stefan
            </div>
            <div>
              Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
            </div>
          </div>
        </div>
        <div id="line"></div>
        <div class="about__info__text">
          <div class="inhalt__container">
            <div class="steckbrief__titel">
              Linas
            </div>
            <div>
              Ich bin eine offene und motivierte Person, die gerne Neues ausprobiert und dazulernt. In meiner Freizeit beschäftige ich mich mit verschiedenen Interessen und verbringe gerne Zeit mit anderen Menschen. Ich bin immer offen für neue Herausforderungen und freue mich darauf, neue Erfahrungen zu sammeln und mich weiterzuentwickeln.
            </div>
          </div>
          <img src="../assets/Juri.jpg" class="profilbild">
        </div>
        <div id="line"></div>
        <div class="gemeinsam__container">
          <div class="steckbrief__titel">
            Unsere Idee hinter Nutri-Base
          </div>
          <div class="gemeinsam__text">
            Wir haben Nutri-Base entwickelt, weil wir eine einfache und übersichtliche Möglichkeit schaffen wollten, sich mit Ernährung und verschiedenen Lebensmitteln auseinanderzusetzen. Unser Ziel war es, eine Plattform zu gestalten, auf der man interessante Informationen entdecken und neue Dinge über Ernährung lernen kann. Dabei wollten wir unsere eigenen Ideen umsetzen, gemeinsam an einem Projekt arbeiten und etwas entwickeln, das auch im Alltag nützlich sein kann. Während der Entwicklung konnten wir viele neue Erfahrungen sammeln und unsere Fähigkeiten verbessern.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10rem 15rem;
  gap: 3rem;

}
#about__header{
  margin-top: -120px;
  font-size: 5rem;
  font-family: "Century Gothic", Helvetica, sans-serif;
}
#about__info__text__container{
  width: 90vw;
  }
.about__info__text{
  font-family: Arial, Helvetica, sans-serif;
  text-align: justify;
  line-height: 2rem;
  font-size: 1.5rem;
  display: flex;
  flex-direction: row;
}
.profilbild {
  width: 38%;
  border-radius: 2rem;
  box-shadow: 10px 10px 40px -10px black;
}
.steckbrief__titel{
  font-size: 2rem;
  font-weight: bold;
  font-style: oblique;
  font-family: Arial, Helvetica, sans-serif;
}

.inhalt__container{
  padding: 1rem;
  width: 62%;
}
#line{
  margin: 2.5rem 0;
  border: 1px solid black;
}
.gemeinsam__text{
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  line-height: 2rem;
  font-size: 1.5rem;
  text-align: justify;
}
.gemeinsam__container > :first-child{
  text-align: center;
  margin-bottom: 2rem;
}
</style>