<template>
     <ion-menu side="end" content-id="main-content" menu-id="app-menu">
        <ion-header>
          <ion-toolbar translucent>
            <ion-title>Menu</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-list class="menu-list" lines="">
            <ion-item class="menu-item" color="#F7ECDE" button  @onclick="() => router.push('/inicio')">
              <ion-label class="menu-label"><h1 class="menu-text"> Inicio</h1></ion-label>
            </ion-item>
            <ion-item class="menu-item" color="#F7ECDE" button @onclick="navigateMenu('/noticias')">
              <ion-label class="menu-label"><h1 class="menu-text">Noticias</h1></ion-label>
            </ion-item>
            <ion-item class="menu-" color="#F7ECDE" button @onclick="navigateMenu('/eventos')">
              <ion-label class="menu-label"><h1 class="menu-text">Eventos</h1></ion-label>
            </ion-item>
            <ion-item class="menu-item" color="#F7ECDE" button @onclick="navigateMenu('/galeria')">
              <ion-label class="menu-label"><h1 class="menu-text">Galeria</h1></ion-label>
            </ion-item>
            <ion-item class="menu-item" color="#F7ECDE" button @onclick="navigateMenu('/comentario')">
              <ion-label class="menu-label"><h1 class="menu-text">Comentario</h1></ion-label>
            </ion-item>
            <ion-item class="menu-item" color="#F7ECDE" button @onclick="navigateMenu('/registro')">
              <ion-label class="menu-label"><h1 class="menu-text">Registro</h1></ion-label>
            </ion-item>
            <ion-item class="menu-item" color="#F7ECDE" button @onclick="navigateMenu('/login')">
              <ion-label class="menu-label"><h1 class="menu-text">Login</h1></ion-label>
            </ion-item>
          </ion-list>
        </ion-content>
      </ion-menu>
</template>

<script>
import {IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, menuController} from '@ionic/vue';
import { useRouter } from 'vue-router';

export default {
    components:{
        IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel,
    },
    methods:{
      navigateMenu(url){
        menuController.close("app-menu");
        this.$router.push(url);
      },
    },
    setup() {
      const router = useRouter();
      return { router };
    },

}
</script>
