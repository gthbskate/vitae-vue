<template>
    <div class="development">
        <Developments/>
        <Footer/>
    </div>
</template>

<script>
import Developments from '@/components/Developments.vue'

import Footer from '@/components/Footer.vue'

export default {
    name: 'development',
    components: {
        Developments,
        Footer,

    }
}
</script>