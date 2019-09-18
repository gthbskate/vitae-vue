<template>
  <div id="app">
    <header class="hello">
      <nav>
        <div class="nav-wrapper">
          <router-link class="brand-logo" to="/"><i class="material-icons" id="code-icon">apps</i></router-link>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down">
            <li><router-link class="text-nav" to="/skill">{{ skills }}</router-link></li>
            <li><router-link class="text-nav" to="/school">{{ school }}</router-link></li>
            <li><router-link class="text-nav" to="/course">{{ courses }}</router-link></li>
            <li><router-link class="text-nav" to="/development">{{ developments }}</router-link></li>
            <li><router-link class="text-nav" to="/experience">{{ experience }}</router-link></li>
            <li><router-link class="text-nav" to="/contact">{{ contact }}</router-link></li>
          </ul>
      </div>
    </nav>
      <ul class="sidenav" id="mobile-demo">
        <li><router-link class="text-nav" to="/skill">{{ skills }}<i class="material-icons">done_all</i></router-link></li>
        <li><router-link class="text-nav" to="/school">{{ school }}<i class="material-icons">school</i></router-link></li>
        <li><router-link class="text-nav" to="/course">{{ courses }}<i class="material-icons">edit</i></router-link></li>
        <li><router-link class="text-nav" to="/development">{{ developments }}<i class="material-icons">code</i></router-link></li>
        <li><router-link class="text-nav" to="/experience">{{ experience }}<i class="material-icons">important_devices</i></router-link></li>
        <li><router-link class="text-nav" to="/contact">{{ contact }}<i class="material-icons">mail</i></router-link></li>
      </ul>
  </header>
<!-- Header End -->
    <router-view/>
    <!-- Button-float End -->
    <div class="row row-container-button-float">
        <div class="col12 s12 m12 l12 xl12">
            <ul class="collapsible collapsible-button-float">
                <li>
                    <div class="collapsible-header collapsible-header-button-float">
                        <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
                    </div>
                    <div class="collapsible-body collapsible-body-button-float">
                        <!-- Contact Start -->
                        <div class="row row-container-text-contact">
                            <div class="col s12 m12 l12 xl12 col-container-text-contact button-float-contact">
                                <a class="item-contact" href="https://wa.me/5215518745874" target="_blank"><i class="material-icons">phone</i></a>
                                <a class="item-contact" href="mailto:skate.boarding@live.com.mx"><i class="material-icons">email</i></a>
                                <h6 class="text-contact-h6">Nombre / <span class="text-contact-span">Name :</span></h6>
                                <p class="text-contact-p" >Cesar</p>
                                <h6 class="text-contact-h6">Apellido / <span class="text-contact-span">Last Name :</span></h6>
                                <p class="text-contact-p" >González Caballero</p>
                                <h6 class="text-contact-h6">Telefóno / <span class="text-contact-span">Phone :</span></h6>
                                <a  href="https://wa.me/5215518745874" target="_blank"><p class="text-contact-p">5518745874</p></a>
                                <h6 class="text-contact-h6">Correo / <span class="text-contact-span">Mail :</span></h6>
                                <a  href="mailto:skate.boarding@live.com.mx"><p class="text-contact-p">skate.boarding@live.com.mx</p></a>
                            </div>
                        </div>
                <!-- Contact End -->
                    </div>
                </li>
            </ul>
        </div>
    </div>
<!-- Button-float End -->
  </div>
</template>

<script>
$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.slider').slider();
  $('.collapsible').collapsible();

});

 export default{
  data() {
  return{
    skills: 'Habilidades',
    school: 'Estudios',
    courses: 'Cursos',
    developments: 'Desarrollos',
    experience: 'Experiencia',
    contact: 'Contacto',
    }
  }
}


</script>

<style>
.nav-wrapper{
    background-color: #FA824C;
}
.material-icons{
    margin: auto auto auto 15px;
}

#code-icon{
    font-size: 50px;
}

.text-nav{
    font-family: 'Raleway', sans-serif;
}

@media screen and (min-width: 993px) {
  .row-container-button-float {
    margin: 0% 0px 0px 0px !important;
    padding: 0px !important;
    position: absolute; }

  .collapsible-button-float {
    width: 90px !important;
    height: 30px !important;
    box-shadow: none !important;
    border-width: 0px !important;
    background-color: transparent !important;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    position: fixed;
    bottom: 15%;
    left: 90%;
    z-index: 2; }

  .collapsible-header-button-float {
    box-shadow: none !important;
    border-width: 0px !important;
    background-color: transparent !important;
    width: 90px !important;
    height: 30px !important;
    margin: 0px;
    padding: 0px; }

  .collapsible-body-button-float {
    box-shadow: none !important;
    border-width: 0px !important;
    background-color: transparent !important;
    width: 0px !important;
    height: 0px !important;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    transition: 0ms !important; }

  .button-float-contact {
    border-width: 0px !important;
    margin: -100% 0% 0% -90% !important;
    padding: 0px 0px 0px 0px;
    transition: 0ms !important; } }
@media screen and (min-width: 768px) and (max-width: 992px) {
  .row-container-button-float {
    margin: 0% 0% 0% 0% !important;
    padding: 0px !important;
    position: absolute; }

  .collapsible-button-float {
    width: 90px !important;
    height: 30px !important;
    box-shadow: none !important;
    border-width: 0px !important;
    background-color: transparent !important;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    position: fixed;
    bottom: 15%;
    left: 90%;
    z-index: 2; }

  .collapsible-header-button-float {
    box-shadow: none !important;
    border-width: 0px !important;
    background-color: transparent !important;
    width: 90px !important;
    height: 30px !important;
    margin: 0px;
    padding: 0px; }

  .collapsible-body-button-float {
    box-shadow: none !important;
    border-width: 0px !important;
    background-color: transparent !important;
    width: 0px !important;
    height: 0px !important;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    transition: 0ms !important; }

  .button-float-contact {
    border-width: 0px !important;
    margin: -100% 0% 0% -90% !important;
    padding: 0px 0px 0px 0px;
    transition: 0ms !important; } }
@media screen and (max-width: 767px) {
  .row-container-button-float {
    margin: 0% 0% 0% 0% !important;
    padding: 0px !important;
    position: absolute; }

  .collapsible-button-float {
    width: 90px !important;
    height: 30px !important;
    box-shadow: none !important;
    border-width: 0px !important;
    background-color: transparent !important;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    position: fixed;
    bottom: 15%;
    left: 83%;
    z-index: 2; }

  .collapsible-header-button-float {
    box-shadow: none !important;
    border-width: 0px !important;
    background-color: transparent !important;
    width: 90px !important;
    height: 30px !important;
    margin: 0px;
    padding: 0px; }

  .collapsible-body-button-float {
    box-shadow: none !important;
    border-width: 0px !important;
    background-color: transparent !important;
    width: 0px !important;
    height: 0px !important;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    transition: 0ms !important; }

  .button-float-contact {
    border-width: 0px !important;
    margin: -145% 0% 0% -90% !important;
    padding: 0px 0px 0px 0px;
    transition: 0ms !important; } }

    @media screen and (min-width: 993px) {
  body {
    margin: 0px !important;
    padding: 0px !important; }

  #contact {
    background-color: #577399;
    margin: 0px !important;
    padding: 0px !important;
    height: 100%; }

  .text-contact-principal {
    font-family: 'Raleway', sans-serif;
    font-size: 5.5em;
    font-weight: normal;
    text-align: center;
    border-bottom: 1px solid #FAFFFD;
    padding-bottom: .5em;
    color: #FAFFFD; }

  .text-contact-principal-span {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1em;
    font-weight: bold; }

  .row-container-text-contact {
    width: 30em;
    height: 100%; }

  .col-container-text-contact {
    border: 1px solid #342E37;
    border-radius: 5px;
    box-shadow: 5px 10px 5px 5px #342E37;
    text-align: center;
    background-color: #FAFFFD; }

  .item-contact {
    font-size: 40px; }

  .text-contact-h6 {
    font-family: 'Raleway', sans-serif;
    font-size: 1em;
    font-weight: normal;
    text-align: center;
    color: #342E37; }

  .text-contact-span {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold; }

  .text-contact-p {
    font-family: 'Raleway', sans-serif;
    font-size: 1.5em;
    font-weight: normal;
    text-align: center;
    border-bottom: 1px solid #2195F2;
    color: #2195F2; } }

  body {
    margin: 0px !important;
    padding: 0px !important; }

  #contact {
    background-color: #577399;
    height: 100%; }

  .text-contact-principal {
    font-family: 'Raleway', sans-serif;
    font-size: 2.3em;
    font-weight: normal;
    text-align: center;
    border-bottom: 1px solid #FAFFFD;
    padding-bottom: .5em;
    color: #FAFFFD; }

  .text-contact-principal-span {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1em;
    font-weight: bold; }

  .row-container-text-contact {
    width: 20em; }

  .col-container-text-contact {
    border: 1px solid #342E37;
    border-radius: 5px;
    box-shadow: 5px 10px 5px 5px #342E37;
    text-align: center;
    background-color: #FAFFFD; }

  .item-contact {
    font-size: 40px; }

  .text-contact-h6 {
    font-family: 'Raleway', sans-serif;
    font-size: 1em;
    font-weight: normal;
    text-align: center;
    color: #342E37; }

  .text-contact-span {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold; }

  .text-contact-p {
    font-family: 'Raleway', sans-serif;
    font-size: 1.3em;
    font-weight: normal;
    text-align: center;
    border-bottom: 1px solid #2195F2;
    color: #2195F2; } 
    body {
    margin: 0px !important;
    padding: 0px !important; }

  #contact {
    background-color: #577399;
    height: 100%; }

  .text-contact-principal {
    font-family: 'Raleway', sans-serif;
    font-size: 2.3em;
    font-weight: normal;
    text-align: center;
    border-bottom: 1px solid #FAFFFD;
    padding-bottom: .5em;
    color: #FAFFFD; }

  .text-contact-principal-span {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1em;
    font-weight: bold; }

  .row-container-text-contact {
    width: 20em; }

  .col-container-text-contact {
    border: 1px solid #342E37;
    border-radius: 5px;
    box-shadow: 5px 10px 5px 5px #342E37;
    text-align: center;
    background-color: #FAFFFD; }

  .item-contact {
    font-size: 40px; }

  .text-contact-h6 {
    font-family: 'Raleway', sans-serif;
    font-size: 1em;
    font-weight: normal;
    text-align: center;
    color: #342E37; }

  .text-contact-span {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold; }

  .text-contact-p {
    font-family: 'Raleway', sans-serif;
    font-size: 1.3em;
    font-weight: normal;
    text-align: center;
    border-bottom: 1px solid #2195F2;
    color: #2195F2; } 
    
</style>
