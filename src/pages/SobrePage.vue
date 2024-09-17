<template>
  <q-page>
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
  </q-page>
</template>

<script setup>
import { ref } from "vue";
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

/* OUTROS */
.line-secondary {
  border: none;
  border-top: 2px solid #e2c2c4; /* Cor 'secondary' do Quasar */
  margin: 0;
}

.format-img {
  border-radius: 50px; /* Bordas arredondadas */
}
</style>
