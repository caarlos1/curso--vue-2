<template>
  <v-app>
    <app-menu />
    <app-header />
    <app-carousel />
    <app-footer />

  </v-app>
</template>

<script>
import Menu from '@/components/template/Menu.vue'
import Header from '@/components/template/Header.vue'
import Carousel from '@/components/widgets/Carousel.vue'
import Footer from '@/components/template/Footer.vue'


export default {
  components: {
    'app-menu': Menu,
    'app-header': Header,
    'app-carousel': Carousel,
    'app-footer': Footer,
  }
}
</script>
