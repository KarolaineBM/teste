<template>
  <q-page class="q-mt-xl">
    <!-- HOME / SOBRE -->
    <div class="row justify-center q-pa-xl">
      <div class="col-md-8">
        <div class="row q-mb-md justify-center items-center">
          <div class="col-md col-xs movimento-L">
            <hr class="line-secondary" />
          </div>

          <div class="col-md-3 col-xs-5 text-center">
            <span class="text-h4">Sobre</span>
          </div>

          <div class="col-md col-xs movimento-R">
            <hr class="line-secondary" />
          </div>
        </div>

        <!-- Informações -->
        <div class="row justify-center items-center q-gutter-md">
          <div class="col-md-6 col-xs-12">
            <div class="row justify-center">
              <div class="col-md-12 col-xs text-center">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                  sapiente adipisci. Ullam, aut ex rem illum magni, ipsa,
                  voluptatem laudantium atque delectus exercitationem labore
                  odio necessitatibus at asperiores sapiente sint.
                  <br /><br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                  sapiente adipisci. Ullam, aut ex rem illum magni, ipsa,
                  voluptatem laudantium atque delectus exercitationem labore
                  odio necessitatibus at asperiores sapiente sint.
                </span>
              </div>
            </div>
          </div>

          <!-- Coluna de imagem -->
          <div class="col-md-4 col-xs-12">
            <div class="row justify-center items-center q-col-gutter-sm">
              <div class="col-md col-xs-6 text-center movimento-R">
                <q-img class="format-img" src="~assets/sobre.jpeg" />
              </div>
              <div class="col-md col-xs-6 text-center movimento-R">
                <q-img class="format-img" src="~assets/sobre2.jpeg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- PAUTAS -->
    <div class="row q-mt-xl bg-secondary justify-center">
      <div class="col-md-8 col-xs-12 text-white q-pa-xl">
        <!-- Título -->
        <div class="row q-mb-md justify-center items-center">
          <div class="col-md col-xs movimento-L">
            <hr class="line-secondary2" />
          </div>

          <div class="col-md-3 col-xs-5 text-center">
            <span class="text-h4">Pautas</span>
          </div>

          <div class="col-md col-xs movimento-R">
            <hr class="line-secondary2" />
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
              control-color="white"
              arrows
              class="bg-secondary text-white rounded-borders carousel-container"
              style="max-width: 1200px; margin: 0 auto"
            >
              <q-carousel-slide name="style" class="no-wrap flex-center">
                <div class="carousel-text-container">
                  <span>
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
        <div class="row q-mt-lg q-gutter-md">
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
          <!-- <div class="col-md col-xs-12 movimento-L">
            <q-img src="~assets/logoRedondaBrancaT.png"></q-img>
          </div>
          <div class="col-md col-xs-12 movimento-L">
            <q-img src="~assets/logoRedondaBrancaT.png"></q-img>
          </div>
          <div class="col-md col-xs-12 movimento-R">
            <q-img src="~assets/logoRedondaBrancaT.png"></q-img>
          </div>
          <div class="col-md col-xs-12 movimento-R">
            <q-img src="~assets/logoRedondaBrancaT.png"></q-img>
          </div> -->
        </div>
      </div>
    </div>

    <!-- AGENDAMENTOS -->
    <div class="row justify-center q-pa-xl">
      <div class="col-md-8 col-xs-12">
        <div class="row q-mb-md justify-center items-center">
          <div class="col-md col-xs movimento-L">
            <hr class="line-secondary" />
          </div>

          <div class="col-md-3 col-xs-10 text-center">
            <span class="text-h4">Agendamentos</span>
          </div>

          <div class="col-md col-xs movimento-R">
            <hr class="line-secondary" />
          </div>
        </div>

        <div class="row q-mt-xl q-gutter-md justify-center">
          <div class="col-md-6 col-xs-12">
            <q-form @submit="submitForm" class="q-mb-md q-gutter-md">
              <div class="row">
                <div class="col-md-12 col-xs-12">
                  <q-input outlined rounded v-model="name" label="Nome" />
                </div>
              </div>

              <div class="row">
                <q-div class="col-md-12 col-xs-12">
                  <q-input
                    v-model="email"
                    outlined
                    rounded
                    del="email"
                    label="E-mail"
                    type="email"
                /></q-div>
              </div>

              <div class="row">
                <div class="col-md-12 col-xs-12">
                  <q-input
                    outlined
                    rounded
                    v-model="date"
                    label="Data"
                    type="date"
                  />
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 col-xs-12">
                  <q-input
                    outlined
                    rounded
                    v-model="time"
                    label="Hora"
                    type="time"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 col-xs-12">
                  <q-input outlined rounded v-model="obs" label="Observação" />
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 col-xs-12">
                  <q-btn
                    outlined
                    rounded
                    label="Enviar"
                    type="submit"
                    color="primary"
                  />
                </div>
              </div>
            </q-form>
          </div>

          <div class="col-md-3 col-xs-6">
            <q-img class="format-img" src="~assets/agendamento.jpeg"></q-img>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";

const drawer = ref(false);
const slide = ref("style");
const slideI = ref(1);

const $q = useQuasar();

const name = ref("");
const email = ref("");
const date = ref("");
const time = ref("");
const obs = ref("");

const submitForm = async () => {
  try {
    const response = await fetch("https://formspree.io/f/mjkbdgvp", {
      // Substitua pelo URL do seu formulário
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        date: date.value,
        time: time.value,
        obs: obs.value,
      }),
    });

    if (response.ok) {
      $q.notify({
        type: "positive",
        message: "Formulário enviado com sucesso!",
      });
      name.value = "";
      email.value = "";
      date.value = "";
      time.value = "";
      obs.value = "";
    } else {
      $q.notify({ type: "negative", message: "Falha ao enviar formulário." });
    }
  } catch (error) {
    $q.notify({ type: "negative", message: "Erro ao enviar formulário." });
  }
};
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

@media (max-width: 600px) {
  .q-carousel {
    height: auto; /* Garante que o carrossel se ajuste em telas pequenas */
  }
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
  color: #e2c2c4; /* Cor das aspas */
  position: absolute;
  top: -20px; /* Ajuste da posição vertical */
  left: -30px; /* Ajuste da posição horizontal */
}
.quote::after {
  content: "”";
  font-size: 3em; /* Tamanho das aspas */
  color: #e2c2c4;
  /* color: #5e7364; Cor das aspas */
  position: absolute;
  bottom: -50px; /* Ajuste da posição vertical */
  right: -30px; /* Ajuste da posição horizontal */
}
.q-carousel {
  background-color: #333; /* Fundo escuro */
}

.q-carousel .q-carousel__control {
  color: #fff; /* Deixa os botões brancos */
}
/* Estilizando as bordas e controlando o overflow para evitar scroll lateral */

/* OUTROS */
.line-secondary {
  border: none;
  border-top: 2px solid #e2c2c4; /* Cor 'secondary' do Quasar */
  margin: 0;
}
.line-secondary2 {
  border: none;
  border-top: 2px solid #ffffff; /* Cor 'secondary' do Quasar */
  margin: 0;
}

.verde {
  background: linear-gradient(145deg, #a0b4a6, #d0e0d2); /* Gradiente suave */
  border-radius: 50px; /* Bordas arredondadas */
  border: 2px solid #4a5c40; /* Borda verde escura */
  color: #333; /* Cor do texto */
  text-align: center; /* Alinha o texto ao centro */
  font-weight: bold; /* Texto em negrito */
}
.format-img {
  border-radius: 50px; /* Bordas arredondadas */
}

/* CAROSSEL */
.carousel-text-container {
  max-width: 100%; /* Garante que o texto não ultrapasse o slide */
  text-align: center; /* Alinha o texto ao centro */
}

.q-carousel {
  height: 600px; /* Define a altura do carrossel */
}
</style>
