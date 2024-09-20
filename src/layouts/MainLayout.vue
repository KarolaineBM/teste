<template>
  <q-layout view="lHh lpr lFf">
    <q-header class="bg-gradient" height-hint="58" reveal>
      <q-toolbar class="row justify-center q-pa-md q-mb-xl">
        <!-- Logo -->
        <div class="col-md-3 col-xs text-center">
          <q-img
            src="~assets/logoCompletaPretaT.png"
            width="250px"
            height="130px"
          />
        </div>

        <!-- Menu Mobile -->
        <div class="col-md" v-if="$q.screen.lt.md">
          <q-btn flat round dense icon="menu" @click="drawer = !drawer" />
        </div>

        <!-- Menu Desktop -->
        <div class="col-md-5 self-center" v-else>
          <div class="row q-gutter-md hidden-xs">
            <a href="/" class="custom-link text-weight-light text-h6">Sobre</a>

            <a href="/pautas" class="custom-link text-weight-light text-h6"
              >Pautas</a
            >
            <a
              href="/agendamentos"
              class="custom-link text-weight-light text-h6"
              >Agendamentos</a
            >
            <a href="/localizacao" class="custom-link text-weight-light text-h6"
              >Localização</a
            >
          </div>
        </div>

        <!-- Botões de Redes Sociais (Desktop) -->
        <div class="col-md-2 self-center q-gutter-md" v-if="$q.screen.gt.md">
          <q-btn
            flat
            round
            dense
            icon="mdi-whatsapp"
            href="https://wa.me/5511971714044"
            target="_blank"
            class="text-white bg-secondary botao"
          />
          <q-btn
            flat
            round
            dense
            icon="mdi-instagram"
            href="https://www.instagram.com/draaressafernandes"
            target="_blank"
            class="text-white bg-secondary botao"
          />
          <q-btn
            flat
            round
            dense
            icon="mdi-email"
            href="mailto:aressadesouza@gmail.com"
            target="_blank"
            class="text-white bg-secondary botao"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" side="right" overlay class="bg-secondary">
      <q-list>
        <q-item clickable v-ripple>
          <q-item-section>
            <a href="/" class="custom-link-mobile text-h6">Sobre</a>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>
            <a href="/pautas" class="custom-link-mobile text-h6">Pautas</a>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>
            <a href="/agendamentos" class="custom-link-mobile text-h6"
              >Agendamentos</a
            >
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>
            <a href="/localizacao" class="custom-link-mobile text-h6"
              >Localização</a
            >
          </q-item-section>
        </q-item>

        <div class="col-md col-xs movimento-L q-mt-sm">
          <hr class="line-secondary" />
        </div>

        <div class="q-pa-md">
          <!-- Botões de Redes Sociais (Mobile) -->

          <q-item-label
            header
            class="text-h6 text-white text-center"
            style="border-radius: 50px"
          >
            Redes Sociais</q-item-label
          >
          <q-item
            clickable
            v-ripple
            href="https://wa.me/5511971714044"
            target="_blank"
            class="text-white text-h6 bg-primary"
            style="border-radius: 50px"
          >
            <q-item-section avatar>
              <q-icon name="mdi-whatsapp" />
            </q-item-section>
            <q-item-section>WhatsApp</q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            href="https://www.instagram.com/draaressafernandes"
            target="_blank"
            class="text-white text-h6 bg-primary q-mt-md"
            style="border-radius: 50px"
          >
            <q-item-section avatar>
              <q-icon name="mdi-instagram" />
            </q-item-section>
            <q-item-section>Instagram</q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            href="mailto:aressadesouza@gmail.com"
            target="_blank"
            class="text-white text-h6 bg-primary q-mt-md"
            style="border-radius: 50px"
          >
            <q-item-section avatar>
              <q-icon name="mdi-email" />
            </q-item-section>
            <q-item-section>Email</q-item-section>
          </q-item>
        </div>
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

.botao {
  transition: transform 0.3s ease-in; /* Transição suave */
}

.botao:hover {
  transform: scale(1.3); /* Aumenta o botão em 10% */
}
.line-secondary {
  border: none;
  border-top: 2px solid #ffffff; /* Cor 'secondary' do Quasar */
  margin: 0;
}
</style>
