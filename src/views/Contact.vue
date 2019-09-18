<template>
    <div class="contact">
        <Contacts/>
        <Footer/>
    </div>
</template>

<script>
import Contacts from '@/components/Contacts.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'contact',
    components: {
        Contacts,
        Footer,
    }
}
</script>