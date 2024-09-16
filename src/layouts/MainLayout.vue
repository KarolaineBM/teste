<template>
  <q-layout view="lHh lpr lFf">
    <q-header class="bg-gradient" height-hint="58" reveal>
      <q-toolbar class="row justify-center q-pa-md q-mb-xl">
        <!-- Logo -->
        <div class="col-md-3 col-xs-10 text-center">
          <q-img
            src="~assets/logoCompletaBrancaT.png"
            width="150px"
            height="80px"
          />
        </div>

        <!-- Menu Mobile -->
        <div class="col-md" v-if="$q.screen.lt.md">
          <q-btn flat round dense icon="menu" @click="drawer = !drawer" />
        </div>

        <!-- Menu Desktop -->
        <div class="col-md-5 self-center" v-else>
          <div class="row q-gutter-md hidden-xs">
            <a href="#" class="custom-link text-weight-light text-h6">Sobre</a>

            <a href="#" class="custom-link text-weight-light text-h6">Pautas</a>
            <a href="#" class="custom-link text-weight-light text-h6"
              >Agendamentos</a
            >
            <a href="#" class="custom-link text-weight-light text-h6"
              >Localização</a
            >
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" side="right" overlay class="bg-secondary">
      <q-list>
        <q-item clickable v-ripple>
          <q-item-section>
            <a href="#" class="custom-link-mobile text-h6">Sobre</a>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>
            <a href="#" class="custom-link-mobile text-h6">Pautas</a>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>
            <a href="#" class="custom-link-mobile text-h6">Método</a>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>
            <a href="#" class="custom-link-mobile text-h6">Consulta</a>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(false);
</script>

<style scoped>
.bg-gradient {
  background: linear-gradient(
    to bottom,
    #5e7364,
    #ffffff
  ); /* Ajuste as cores e a direção conforme necessário */
}

.custom-link {
  display: inline-block;
  padding: 10px 20px;
  color: white;
  text-decoration: none;
  transition: color 0.5s ease;
}

.custom-link:hover {
  color: #5e7364;
}

.custom-link-mobile {
  display: inline-block;
  padding: 10px 20px;
  color: white;
  text-decoration: none;
  transition: color 0.5s ease;
}

.custom-link-mobile:hover {
  color: #9a786d;
}
</style>
