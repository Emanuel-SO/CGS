<template>
  <ion-app>

    <MenuComp></MenuComp>

    <ion-router-outlet id="main-content"/>
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet, } from '@ionic/vue';
import { defineComponent } from 'vue';
import MenuComp from './components/MenuComp.vue'

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    MenuComp,
  }
});
</script>