<template>
    <base-layout pageTilte="Login">
        <div class="login-container">
            <div class="login-box">
                <img class="login-img" src="../assets/logo.png" alt="">
                 <ion-item class="login-item">
                    <ion-label position="floating">Usuario</ion-label>
                    <ion-input placeholder="Usuario" type="text"></ion-input>
                </ion-item>
                <ion-item class="login-item">
                    <ion-label position="floating">Contraseña</ion-label>
                    <ion-input placeholder="Contraseña" type="password"></ion-input>
                </ion-item>
                <ion-button class="login-btn" expand="block" strong="true">Ingresar</ion-button>
            </div>
        </div>
    </base-layout>
</template>

<script>
import {IonItem,IonLabel,IonInput,IonButton,} from '@ionic/vue';
import BaseLayout from '@/components/base/BaseLayout.vue';


export default {
    components:{
        BaseLayout,IonItem,IonLabel,IonInput,IonButton,
    }
}
</script>
