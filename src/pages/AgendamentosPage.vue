<template>
  <q-page>
    <!-- AGENDAMENTOS -->
    <div class="row justify-center q-pa-xl">
      <div class="col-md-8 col-xs-12">
        <!-- Título -->
        <div class="row q-mb-md justify-center items-center">
          <div class="col-md col-xs movimento-L">
            <hr class="line-secondary" />
          </div>

          <div class="col-md-4 col-xs-10 text-center">
            <span class="text-h4">Agendamentos</span>
          </div>

          <div class="col-md col-xs movimento-R">
            <hr class="line-secondary" />
          </div>
        </div>

        <!-- Atendimentos -->
        <div class="row justify-center">
          <div class="col-md-6 col-xs self-center">
            <div class="row">
              <div class="col-md-12 movimento-L">
                <span class="text-subtitle1"><li>Atendimento Online</li> </span>

                <span>
                  Horário em aberto, a depender da disponibilidade de cada dia,
                  tratar diretamente por whatsapp
                </span>
              </div>
            </div>

            <div class="row q-mt-lg">
              <div class="col-md-12 movimento-L">
                <span class="text-subtitle1"
                  ><li>Atendimento presencial</li></span
                >

                <span> Os atendimentos são aos sábados das 07:00 as 18:00</span>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-xs-6 movimento-R">
            <q-img class="format-img" src="~assets/agendamento.jpeg"></q-img>
          </div>
        </div>

        <!-- Formulário -->
        <div class="row q-mt-xl">
          <div class="col-md-12 col-xs-12">
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
                    label="Início"
                    mask="##/##/####"
                  >
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy
                          cover
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-date v-model="date" mask="DD/MM/YYYY">
                            <div class="row items-center justify-end">
                              <q-btn
                                v-close-popup
                                label="Fechar"
                                color="primary"
                                flat
                              />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
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
                <div class="col-md-12 col-xs-12 justify-center">
                  <q-btn
                    outlined
                    rounded
                    class="full-width"
                    label="Enviar"
                    type="submit"
                    color="primary"
                  />
                </div>
              </div>
            </q-form>
          </div>
        </div>
      </div></div
  ></q-page>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";

// const slideI = ref(1);

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
