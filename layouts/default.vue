<template>
  <div class="root-div">
    <Navbar />
    <Nuxt/>
    <Footer />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'


export default Vue.extend({
  components: {
    Navbar,
    Footer  
  }
})
</script>

<style>
::selection{
  background-color: #33c1af;
}

html {
  width: 100vw;
}
.root-div {
  width: 100vw;
}
</style>