<template>
  <q-page>
    <!-- LOCALIZAÇÃO -->
    <div class="row justify-center">
      <div class="col-md-8 col-xs-12 q-pa-xl">
        <!-- Título -->
        <div class="row q-mb-lg justify-center items-center">
          <div class="col-md col-xs movimento-L">
            <hr class="line-secondary" />
          </div>

          <div class="col-md-4 col-xs-5 text-center">
            <span class="text-h4">Localização</span>
          </div>

          <div class="col-md col-xs movimento-R">
            <hr class="line-secondary" />
          </div>
        </div>

        <div class="row text-center q-mb-md">
          <div class="col-md-12 col-xs-12">
            <span class="text-h6 text-primary"
              >Av. Paulista, 2064 - 21º andar - Bela Vista - São Paulo</span
            >
          </div>
        </div>

        <div class="row justify-center">
          <!-- Mapa -->
          <div class="col-md-12 col-xs-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7792246725336!2d-46.65977468446077!3d-23.56445008467656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c544a87f2d%3A0xa3d26fcf12740229!2sAv.%20Paulista%2C%202064%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-200%2C%20Brazil!5e0!3m2!1sen!2sus!4v1694875901942!5m2!1sen!2sus"
              width="900"
              height="300"
              style="border: 0; border-radius: 50px"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            >
            </iframe>

            <!-- <div id="map" style="height: 500px; width: 100%"></div> -->
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
// import { onMounted } from "vue";

// onMounted(() => {
//   // Carrega o script do Google Maps
//   const script = document.createElement("script");
//   script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBbgeUOVwTZlhOaGNzlO2aZ_HlckrriTEE`;
//   script.async = true;
//   script.onload = () => {
//     initMap(); // Chama a função de inicialização do mapa
//   };
//   document.head.appendChild(script);

//   function initMap() {
//     const location = { lat: -23.56445, lng: -46.657595 };

//     // Cria o mapa
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 15,
//       center: location,
//     });

//     // Personaliza o marcador
//     const icon = {
//       url: "https://link-do-icone-ou-imagem.png",
//       scaledSize: new google.maps.Size(50, 50), // Tamanho do ícone personalizado
//     };

//     // Adiciona o marcador no mapa
//     new google.maps.Marker({
//       position: location,
//       map: map,
//       icon: icon,
//     });
//   }
// });
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

/* #map {
  border-radius: 50px;
} */
</style>
