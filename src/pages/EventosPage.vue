<template>
    <base-layout pageTilte="Noticias">
        <div>
            <ion-text class="container-titulo">
                <h1>Eventos</h1>
            </ion-text>
            <div class="container-botones">
                <ion-button class="btn-style">Destacados</ion-button>
                <ion-button class="btn-style">Resientes</ion-button>
                <ion-button class="btn-style">Todas</ion-button>
            </div>
            <div class="container-cards">
                <ion-card>
                    <img src="../assets/hotel8.jpg" />
                    <ion-card-header>
                        <ion-card-subtitle>15/Septiembr/2022</ion-card-subtitle>
                        <ion-card-title>Madison, WI</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the
                        Wisconsin Territory in 1836.
                    </ion-card-content>
                </ion-card>
                <ion-card>
                    <img src="../assets/habitacion.jpg" />
                    <ion-card-header>
                        <ion-card-subtitle>03/Junio/2023</ion-card-subtitle>
                        <ion-card-title>Madison, WI</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the
                        Wisconsin Territory in 1836.
                    </ion-card-content>
                </ion-card>
                <ion-card>
                    <img src="../assets/hotel3.jpg" />
                    <ion-card-header>
                        <ion-card-subtitle>04/Agosto/2023</ion-card-subtitle>
                        <ion-card-title>Madison, WI</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the
                        Wisconsin Territory in 1836.
                    </ion-card-content>
                </ion-card>
            </div>
        </div>
    </base-layout>
</template>

<script>
import {IonButton, IonCard, IonCardHeader,IonCardSubtitle,IonCardTitle,IonCardContent, IonText} from '@ionic/vue';
import BaseLayout from '@/components/base/BaseLayout.vue';

export default {
    components:{
        BaseLayout,IonButton,IonCard, IonCardHeader,IonCardSubtitle,IonCardTitle,IonCardContent,IonText
    }
}
</script>
