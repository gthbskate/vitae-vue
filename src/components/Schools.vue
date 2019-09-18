<template>
<!-- School Start -->
    <section id="school">
        <div class="row">
            <div class="col s12 m12 l12 xl12">
                <h1 class="text-school-principal">
                    {{ textStudiesEs }}<span class="text-school-principal-span">{{ textStudiesEn }}</span> 
                </h1>
            </div>
        </div>
        <div class="row">
            <div class="col s12 m4 l4 xl4">
                <div class="card card-container-info">
                    <div class="card-image">
                        <img src="../assets/profile/photo-perfil.png">
                    </div>
                    <div class="card-content">
                        <p class="text-one">{{ textNameEs }}<span class="text-one-span">{{ textNameEn }}</span></p>
                        <p class="text-two">{{ texName }}</p>
                        <p class="text-one">{{ textAgeEs }}<span class="text-one-span">{{ textAgeEn }}</span></p>
                        <p class="text-two">{{ textAgeNum }}<span class="text-two-span">{{ textAgeString }}</span></p>
                        <p class="text-one">{{ textLocationEs }}<span class="text-one-span">{{ textLocationEn }}</span></p>
                        <p class="text-two">{{ textLocation }}</p>
                    </div>
                    <div class="card-action">
                        <p class="text-one">Desarroldor web front-end / <span class="text-one-span">Developor web front-end</span></p>
                    </div>
                </div>
            </div>
            <div class="col s12 m7 l7 xl7 col-container-panel">
                <div class="card-panel card-panel-school">
                    <div class="card-content-2">
                        <p class="text-one">{{ textNameEs }}<span class="text-one-span">{{ textNameEn }}</span></p>
                        <p class="text-two">{{ texName }}</p>
                        <p class="text-one">{{ textAgeEs }}<span class="text-one-span">{{ textAgeEn }}</span></p>
                        <p class="text-two">{{ textAgeNum }}<span class="text-two-span">{{ textAgeString }}</span></p>
                        <p class="text-one">{{ textLocationEs }}<span class="text-one-span">{{ textLocationEn }}</span></p>
                        <p class="text-two">{{ textLocation }}</p>
                    </div>
                    <h5 class="black-text"><i class="material-icons ico-devices">devices</i>{{ textIng }}</h5>
                    <div class="progress">
                        <div class="determinate d-school"></div>
                    </div>
                    <h5 class="black-text"><i class="material-icons ico-devices">storage</i>{{ textAnalist }}</h5>
                    <div class="progress">
                        <div class="determinate d-analist"></div>
                    </div>
                    <h5 class="black-text"><i class="material-icons ico-devices">group</i>{{ textPsic }}</h5>
                    <div class="progress">
                        <div class="determinate d-psicologi"></div>
                    </div>
                    <h5 class="black-text"><i class="material-icons ico-devices">create</i>{{ textTec }}</h5>
                    <div class="progress">
                        <div class="determinate d-draw"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
<!-- School End -->
</template>

<script>
export default {
    name: 'Schools',
    data(){
        return{
            textStudiesEs: 'Estudios / ',
            textStudiesEn: 'Studies',
            textNameEs: 'Nombre / ',
            textNameEn: 'Name :',
            texName: 'Cesar González Caballero',
            textAgeEs: 'Edad / ',
            textAgeEn: 'Age :',
            textAgeNum: '32 años / ',
            textAgeString: 'Years old',
            textLocationEs: 'Ubicación / ',
            textLocationEn: 'Location :',
            textLocation: 'CDMX, México.',
            textIng: ' Lic. Ingenieria en sistemas Computacionales ',
            textAnalist: ' Analista de Programación, Redes y Bases de Datos ',
            textPsic: 'Lic. Psicología ',
            textTec: 'Tec. Dibujo Publicitaro ',
        }
    }
}
</script>

<style scoped>
@media screen and (min-width: 993px) {
  .card-content-2 {
    display: none; }

  #school {
    background-color: #2195F2;
    height: 100%; }

  .text-school-principal {
    font-family: 'Raleway', sans-serif;
    font-size: 5.5em;
    font-weight: normal;
    text-align: center;
    color: #FAFFFD;
    border-bottom: 1px solid #FAFFFD;
    padding-bottom: .5em; }

  .text-school-principal-span {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1em;
    font-weight: bold; }

  .card-container-info {
    margin: 0em 0em 1em 5em !important;
    background-color: #FAFFFD !important;
    width: 60%;
    box-shadow: 5px 5px 5px black !important; }

  .black-text {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 2em;
    font-weight: bold;
    text-align: left;
    color: #342E37; }

  .ico-devices {
    margin: 0em 1em 0em 1em;
    color: #577399; }

  .card-panel-school {
    background-color: #FAFFFD !important; }

  .col-container-panel {
    margin: 3em 0em 0em 0em; }

  .card-content {
    margin: 1em !important;
    padding: 0em !important; }

  .text-one {
    font-family: 'Raleway', sans-serif;
    font-size: .7em; }

  .text-two {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
    font-size: 1.2em;
    text-align: left; }

  .text-one-span {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold; }

  .text-two-span {
    font-family: 'Roboto Condensed', sans-serif; }

  .card-action {
    text-align: center; }

  .progress {
    height: 10px !important; }

  .d-school {
    width: 85.71%;
    background-color: #FA824C !important; }

  .d-analist {
    width: 100%;
    background-color: #FA824C !important; }

  .d-psicologi {
    width: 70%;
    background-color: #FA824C !important; }

  .d-draw {
    width: 100%;
    background-color: #FA824C !important; } }
@media screen and (min-width: 768px) and (max-width: 992px) {
  .card-content-2 {
    display: none; }

  #school {
    background-color: #2195F2;
    height: 100%; }

  .text-school-principal {
    font-family: 'Raleway', sans-serif;
    font-size: 4em;
    font-weight: normal;
    text-align: center;
    color: #FAFFFD;
    border-bottom: 1px solid #FAFFFD;
    padding-bottom: .5em; }

  .text-school-principal-span {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1em;
    font-weight: bold; }

  .card-container-info {
    margin: 0em 0em 1em 5em !important;
    background-color: #FAFFFD !important;
    width: 60%;
    box-shadow: 5px 5px 5px black !important; }

  .black-text {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 2em;
    font-weight: bold;
    text-align: left;
    color: #342E37; }

  .ico-devices {
    margin: 0em 1em 0em 1em;
    color: #577399; }

  .card-panel-school {
    background-color: #FAFFFD !important; }

  .col-container-panel {
    margin: 3em 0em 0em 0em; }

  .card-content {
    margin: 1em !important;
    padding: 0em !important; }

  .text-one {
    font-family: 'Raleway', sans-serif;
    font-size: .7em; }

  .text-two {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
    font-size: 1.2em;
    text-align: left; }

  .text-one-span {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold; }

  .text-two-span {
    font-family: 'Roboto Condensed', sans-serif; }

  .card-action {
    text-align: center; }

  .progress {
    height: 10px !important; }

  .d-school {
    width: 85.71%;
    background-color: #FA824C !important; }

  .d-analist {
    width: 100%;
    background-color: #FA824C !important; }

  .d-psicologi {
    width: 70%;
    background-color: #FA824C !important; }

  .d-draw {
    width: 100%;
    background-color: #FA824C !important; } }
@media screen and (max-width: 767px) {
  #school {
    background-color: #2195F2;
    height: 100%; }

  .text-school-principal {
    font-family: 'Raleway', sans-serif;
    font-size: 2.3em;
    font-weight: normal;
    text-align: center;
    color: #FAFFFD;
    border-bottom: 1px solid #FAFFFD;
    padding-bottom: .5em; }

  .text-school-principal-span {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1em;
    font-weight: bold; }

  .card-container-info {
    display: none;
    margin: 0em 0em 1em 1em !important;
    background-color: #FAFFFD !important;
    width: 60%;
    box-shadow: 5px 5px 5px black !important; }

  .black-text {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1.5em;
    font-weight: bold;
    text-align: left;
    color: #342E37; }

  .ico-devices {
    margin: 0em 0em 0em 0em;
    color: #577399; }

  .card-panel-school {
    background-color: #FAFFFD !important; }

  .col-container-panel {
    margin: 0em 0em 0em 0em; }

  .card-content {
    margin: 1em !important;
    padding: 0em !important; }

  .card-content-2 {
    margin: 1em 1em 5em 1em !important;
    padding: 0em !important;
    text-align: center; }

  .text-one {
    font-family: 'Raleway', sans-serif;
    font-size: .7em;
    text-align: center; }

  .text-two {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
    font-size: 1.2em;
    text-align: center; }

  .text-one-span {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold; }

  .text-two-span {
    font-family: 'Roboto Condensed', sans-serif;
    text-align: center; }

  .card-action {
    text-align: center; }

  .progress {
    height: 10px !important; }

  .d-school {
    width: 85.71%;
    background-color: #FA824C !important; }

  .d-analist {
    width: 100%;
    background-color: #FA824C !important; }

  .d-psicologi {
    width: 70%;
    background-color: #FA824C !important; }

  .d-draw {
    width: 100%;
    background-color: #FA824C !important; } }
</style>