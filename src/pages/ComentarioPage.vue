<template>
    <base-layout pageTilte="Comentario">
        <div class="login-container">
            <div class="login-box">
                <h1 class="registro-title">Comentario</h1>
                 <ion-item class="login-item">
                    <ion-label position="floating">Nombre</ion-label>
                    <ion-input placeholder="Nombre" type="text"></ion-input>
                </ion-item>
                <ion-item class="login-item">
                    <ion-label position="floating">Correo</ion-label>
                    <ion-input placeholder="Correo" type="email"></ion-input>
                </ion-item>
                 <ion-item>
                    <ion-label position="floating">Comentario</ion-label>
                    <ion-textarea placeholder="Escribenos un comentario"></ion-textarea>
                </ion-item>
                <ion-button class="login-btn" expand="block" strong="true">Enviar</ion-button>
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
