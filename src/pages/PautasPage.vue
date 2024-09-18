<template>
  <q-page>
    <!-- PAUTAS -->
    <div class="row justify-center">
      <div class="col-md-8 col-xs-12 q-pa-xl">
        <!-- Título -->
        <div class="row q-mb-md justify-center items-center">
          <div class="col-md col-xs movimento-L">
            <hr class="line-secondary" />
          </div>

          <div class="col-md-3 col-xs-5 text-center">
            <span class="text-h4">Pautas</span>
          </div>

          <div class="col-md col-xs movimento-R">
            <hr class="line-secondary" />
          </div>
        </div>

        <!-- Pautas -->
        <div class="row">
          <div class="col-md-12 col-xs-12">
            <q-carousel
              v-model="slide"
              transition-prev="scale"
              transition-next="scale"
              animated
              control-color="black"
              arrows
              class="bg-white rounded-borders carousel-container"
              style="max-width: 1200px; margin: 0 auto"
            >
              <q-carousel-slide name="style" class="no-wrap flex-center">
                <div class="carousel-text-container">
                  <span class="text-subtitle1">
                    Pressa. <br /><br />
                    Temos pressa de viver. Pressa em resolver as coisas. <br />
                    Pressa de que tudo aconteça no nosso tempo. <br />
                    Pressa de que a dor passe. Pressa de que ferida cure.
                    <br /><br />
                    Mas e o preço que pagamos por ter tanta pressa? <br />
                    E ansiedade que vai se instalando cada vez mais? <br />
                    E o barulho que a sua mente faz na madrugada de uma noite
                    silenciosa? <br />
                    E o simples da vida que acaba passando despercebido?
                    <br /><br />
                    Se atente às suas pressas. <br />
                    O tempo é o que você tem de mais valioso. <br /><br />
                    O que você tem feito do seu tempo? <br /><br />
                    Na ânsia de que a vida passe, acredite: <br />
                    ela vai passar! <br />
                    Se encarregue de desfrutar o caminho cuidando para que um
                    dia sua pressa não se torne saudade. <br /><br />
                    O tempo não para. <br />
                    Desacelera! <br />
                    Permita-se respirar. Se faça presente no “aqui e agora”,
                    AGORA! <br />
                    Domine a sua ânsia antes que ela domine você.
                  </span>
                </div>
              </q-carousel-slide>

              <q-carousel-slide name="tv" class="flex-center">
                <div class="carousel-text-container">
                  <span>
                    Qual a sua dor? <br />
                    O que você sente que ninguém pode ver? <br />
                    Você já falou sobre isso com alguém? <br /><br />
                    Calma, as coisas vão se ajeitar. <br />
                    Isso também vai passar. <br />
                    Se existir bagunça, arrume no seu tempo, mas não se demore.
                    <br />
                    Se existir barulho, silencie para escutar a verdadeira voz
                    que vem de dentro. <br /><br />
                    Eu estarei aqui com você, se precisar. <br />
                    Mais saúde pra sua mente é o que eu desejo a você.
                  </span>
                </div>
              </q-carousel-slide>

              <q-carousel-slide name="layers" class="flex-center">
                <q-icon name="layers" size="56px" />
                <div class="carousel-text-container">
                  {{ lorem }}
                </div>
              </q-carousel-slide>

              <q-carousel-slide name="map" class="flex-center">
                <q-icon name="terrain" size="56px" />
                <div class="carousel-text-container">
                  {{ lorem }}
                </div>
              </q-carousel-slide>
            </q-carousel>
            <!-- <div class="row">
              <div class="col-md col-xs-12">
                <span class="quote"
                  >Pressa. <br /><br />
                  Temos pressa de viver. Pressa em resolver as coisas.
                  <br />
                  Pressa de que tudo aconteçam no nosso tempo.
                  <br />Pressa de que a dor passe. Pressa de que ferida cure.
                  <br /><br />

                  Mas e o preço que pagamos por ter tanta pressa?
                  <br />E ansiedade que vai se instalando cada vez mais? <br />E
                  o barulho que a sua mente faz na madrugada de uma noite
                  silenciosa? <br />E o simples da vida que acaba passando
                  despercebido ? <br /><br />

                  Se atente às suas pressas.
                  <br />
                  O tempo é o que você tem de mais valioso.
                  <br /><br />

                  O que você tem feito do seu tempo?

                  <br /><br />

                  Na ânsia de que a vida passe, acredite:
                  <br />
                  ela vai passar!
                  <br />Se encarregue de desfrutar o caminho cuidando para que
                  um dia sua pressa não se torne saudade.

                  <br /><br />

                  O tempo não para.
                  <br />
                  Desacelera!
                  <br />Permita-se respirar. Se faça presente no “aqui e agora”,
                  AGORA! <br />Domine a sua ânsia antes que ela domine
                  você.</span
                >
              </div>
            </div>

            <div class="row">
              <div class="col-md col-xs-12">
                <span class="quote"
                  >Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Expedita, ex similique. Expedita tenetur omnis necessitatibus
                  fuga fugit perferendis dolore nisi, nesciunt assumenda iusto,
                  nobis nulla eligendi. Qui cumque quas architecto.</span
                >
              </div>
            </div> -->
          </div>

          <!-- <div class="col-md col-xs-12 q-gutter-lg">
            <div class="row">
              <div class="col-md col-xs-12">
                <span class="quote"
                  >Qual a sua dor ?<br />
                  O que você sente que ninguém pode ver ?<br />
                  Você ja falou sobre isso com alguém?<br />
                  <br /><br />
                  Calma, as coisas vão se ajeitar.<br />
                  Isso também vai passar.<br />
                  Se existir bagunça, arrume no seu tempo<br />
                  mas não se demore.<br />
                  Se existir barulho, silencie pra escutar a verdadeira voz que
                  vem de dentro.<br />
                  <br /><br />
                  Eu estarei aqui com você, se precisar.<br />
                  Mais saúde pra sua mente é o que eu desejo a você.</span
                >
              </div>
            </div>
            <div class="row">
              <div class="col-md col-xs-12">
                <span class="quote"
                  >Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Expedita, ex similique. Expedita tenetur omnis necessitatibus
                  fuga fugit perferendis dolore nisi, nesciunt assumenda iusto,
                  nobis nulla eligendi. Qui cumque quas architecto.</span
                >
              </div>
            </div>
          </div> -->
        </div>

        <!-- imagens -->
        <!-- <div class="row q-mt-lg q-gutter-md">
          <dic class="col-md-12">
            <q-carousel swipeable animated v-model="slideI" thumbnails infinite>
              <q-carousel-slide
                :name="1"
                img-src="~assets/logoRedondaBrancaT.png"
              />
              <q-carousel-slide :name="2" img-src="~assets/logoVerde.png" />
              <q-carousel-slide :name="3" img-src="~assets/sobre2.jpeg" />
              <q-carousel-slide :name="4" img-src="~assets/sobre.jpeg" />
            </q-carousel>
          </dic>

        </div> -->
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const slide = ref("style");
</script>

<style scoped>
/* MOVIMENTAÇÕES R and L */
@keyframes slideInRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.movimento-R {
  animation: slideInRight 2s ease-out;
}
@keyframes slideInLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.movimento-L {
  animation: slideInLeft 2s ease-out;
}

/* CAROSSEL */
@media (max-width: 600px) {
  .q-carousel {
    height: auto; /* Garante que o carrossel se ajuste em telas pequenas */
  }
}
.q-carousel {
  background-color: #333; /* Fundo escuro */
}
.q-carousel .q-carousel__control {
  color: #000000; /* Deixa os botões brancos */
}
.carousel-text-container {
  max-width: 100%; /* Garante que o texto não ultrapasse o slide */
  text-align: center; /* Alinha o texto ao centro */
}
.q-carousel {
  height: 600px; /* Define a altura do carrossel */
}

/* ASPAS - PAUTAS */
.quote {
  position: relative;
  font-size: 1.2em;
  line-height: 1.5;
}
.quote::before {
  content: "“";
  font-size: 3em; /* Tamanho das aspas */
  color: #000000; /* Cor das aspas */
  position: absolute;
  top: -20px; /* Ajuste da posição vertical */
  left: -30px; /* Ajuste da posição horizontal */
}
.quote::after {
  content: "”";
  font-size: 3em; /* Tamanho das aspas */
  color: #000000;
  /* color: #5e7364; Cor das aspas */
  position: absolute;
  bottom: -50px; /* Ajuste da posição vertical */
  right: -30px; /* Ajuste da posição horizontal */
}

/* OUTROS */
.line-secondary {
  border: none;
  border-top: 2px solid #e2c2c4; /* Cor 'secondary' do Quasar */
  margin: 0;
}
</style>
