<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-thumbnail slot="start">
          <img src="../../assets/logo_blanco.png" class="tamano-logo"/>
        </ion-thumbnail>
        <ion-buttons slot="end" @click="showMenu()">
          <ion-menu-button auto-hide="false"></ion-menu-button>
        </ion-buttons>
        <ion-title slot="">{{ pageTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot />
      <ion-toolbar>
        <div class="redes">
          <img src="../../assets/facebook.png" class="img-redes"/>
          <img src="../../assets/twitter.png" class="img-redes"/>
          <img src="../../assets/youtube.png" class="img-redes"/>
          <img src="../../assets/instagram.png" class="img-redes"/>
        </div>
        <div class="redes">
          <img src="../../assets/logo_blanco.png" class="img-logo" />
        </div>
        <div class="redes">© Derechos resevados 2022 CBS.</div>
      </ion-toolbar>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonToolbar,
  IonTitle,
  IonHeader,
  IonButtons,
  IonMenuButton,
  IonThumbnail,
  menuController,
} from "@ionic/vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonToolbar,
    IonHeader,
    IonTitle,
    IonButtons,
    IonMenuButton,
    IonThumbnail,
  },
  props: [
    'pageTitle'
  ],
  methods: {
    showMenu() {
      menuController.open("app-menu");
    },
  },
});
</script>