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
        <div class="row justify-center items-center q-gutter-md q-mt-md">
          <div class="col-md-7 col-xs-12">
            <div class="row justify-center">
              <div class="col-md-12 col-xs text-center movimento-L">
                <span class="text-subtitle1">
                  <strong class="text-h6"
                    >Primeiramente sejam muito bem-vindos !</strong
                  >

                  <br /><br />
                  Me chamo
                  <strong
                    class="bg-secondary text-white q-pa-xs"
                    style="border-radius: 50px"
                    >Aressa</strong
                  >, sou
                  <strong
                    class="bg-primary text-white q-pa-xs"
                    style="border-radius: 50px"
                    >Médica Pós Graduada em Psiquiatria</strong
                  >
                  e em Saúde de Família e Comunidade, áreas as quais venho
                  atuando desde a minha formação em 2018.

                  <br /><br />

                  Ao longo desses anos e, principalmente após o cenário
                  pandêmico que vivemos nos últimos anos, percebi que a saúde
                  mental do mundo precisava de atenção!

                  <br /><br />

                  Vendo tantas pessoas que amo enfrentando dores invisíveis aos
                  olhos e presenciando tantas outras que também sofrem por
                  questões psíquicas muitas vezes incompreendidas, resolvi então
                  me dedicar a esta área que de fato ganhou a minha atenção e
                  que tem o meu coração.
                </span>
              </div>
            </div>
          </div>

          <!-- Coluna de imagem -->
          <div class="col-md-3 col-xs-12">
            <div class="row justify-center items-center q-col-gutter-sm">
              <div class="col-md col-xs-6 text-center movimento-R">
                <q-img class="format-img" src="~assets/sobre2.jpeg" />
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-center items-center q-gutter-md q-mt-lg">
          <!-- Coluna de imagem -->
          <div class="col-md-3 col-xs-12">
            <div class="row justify-center items-center q-col-gutter-sm">
              <div class="col-md col-xs-6 text-center movimento-L">
                <q-img class="format-img" src="~assets/sobre.jpeg" />
              </div>
            </div>
          </div>

          <div class="col-md-7 col-xs-12">
            <div class="row justify-center">
              <div class="col-md-12 col-xs text-center movimento-R">
                <span class="text-subtitle1">
                  Estou em
                  <strong
                    class="bg-primary text-white q-pa-xs"
                    style="border-radius: 50px"
                    >processo de formação em Medicina Endocanabinoide pela We
                    Cann Academy</strong
                  >
                  e, em paralelo, também tenho me dedicado no aprimoramento para
                  realização de várias formas de Psicoterapias, áreas as quais
                  acredito que andam de mãos dadas com a Psiquiatria Tradicional
                  e que potencializam e ampliam as diversas formas para um
                  tratamento eficaz. <br /><br />

                  Por aqui, a Medicina Integrativa se faz presente tendo como
                  objetivo a busca pelo Equilíbrio Corpo-Mente-Espirito, como um
                  todo.
                  <br /><br />

                  Por fim, espero que juntos façamos um excelente trabalho em
                  prol da sua saúde e bem-estar.

                  <br /><br />

                  <strong class="text-h6">
                    Sintam-se acolhidos e será um imenso prazer poder
                    atendê-los.
                  </strong>
                </span>
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
