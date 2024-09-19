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
        <div class="row justify-center q-gutter-md q-mt-lg">
          <div class="col-md-5 movimento-L self-center">
            <div class="row q-mb-xl">
              <div class="col-md">
                <span class="text-subtitle1 text-primary"
                  ><li>
                    <strong
                      class="bg-primary text-h6 text-white q-pa-xs"
                      style="border-radius: 50px"
                      >Atendimento Online</strong
                    >
                  </li>
                </span>

                <span class="text-subtitle1">
                  Horário em aberto, a depender da disponibilidade de cada dia,
                  tratar diretamente por
                  <a
                    href="https://wa.me/5511971714044"
                    target="_blank"
                    class="text-secondary"
                    style="text-decoration: none"
                    >whatsapp</a
                  >.
                </span>
              </div>
            </div>

            <div class="row">
              <div class="col-md q-m">
                <span class="text-subtitle1 text-primary"
                  ><li>
                    <strong
                      class="bg-primary text-h6 text-white q-pa-xs"
                      style="border-radius: 50px"
                      >Atendimento Presencial</strong
                    >
                  </li></span
                >

                <span class="text-subtitle1">
                  Os atendimentos são aos sábados das 07:00 às 18:00. Para
                  agendar seu atendimento, entre em contato pelo
                  <a
                    href="https://wa.me/5511971714044"
                    target="_blank"
                    class="text-secondary"
                    style="text-decoration: none"
                    >whatsapp</a
                  >.</span
                >
              </div>
            </div>
          </div>

          <div class="col-md-3 col-xs-6 movimento-R">
            <q-img class="format-img" src="~assets/agendamento.jpeg"></q-img>
          </div>
        </div>

        <!-- Formulário -->

        <!-- <div class="row q-mt-lg justify-center">
          <span class="text-h6 text-secondary">Formulário</span>
        </div>

        <div class="row q-mt-md justify-center">
          <span class="text-grey"
            >Gostaríamos de entrar em contato com você. Por favor, insira suas
            informações e retornaremos em breve!
          </span>
        </div> -->

        <!-- <div class="row q-mt-md justify-center q-gutter-md">
          <div class="col-md-5 col-xs-12 self-center">
            <q-form
              @submit="submitForm"
              class="q-mb-md q-gutter-md justify-center movimento-L"
            >
              <div class="row">
                <div class="col-md-12 col-xs-12">
                  <q-input outlined rounded v-model="nome" label="Nome" />
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
                    v-model="hora"
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


        </div> -->
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

// const nome = ref("");
// const email = ref("");
// const date = ref("");
// const hora = ref("");
// const obs = ref("");

// const submitForm = async () => {
//   const response = await fetch(
//     "https://script.google.com/macros/s/AKfycbwiNsPhPpkR7S5DwdqcfqUu0IRWY8pMLazy6qiRws1pxXSj7DS2iBeRJ8Gkw59noamA/exec",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         nome: nome.value,
//         email: email.value,
//         date: date.value,
//         hora: hora.value,
//         obs: obs.value,
//       }),
//     }
//   );

//   if (response.ok) {
//     alert("Formulário enviado com sucesso!");
//     // Limpar os campos
//     nome.value = "";
//     email.value = "";
//     date.value = "";
//     hora.value = "";
//     obs.value = "";
//   } else {
//     alert("Houve um erro ao enviar o formulário.");
//   }
// };
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
