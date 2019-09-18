<template>
  <div class="home">
    <Principal/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Principal from '@/components/Principal.vue'

import Footer from '@/components/Footer.vue'


export default {
  name: 'home',
  components: {
    Principal,
    Footer,
  }
}
</script>
