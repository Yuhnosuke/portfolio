<template lang="pug">
  #app
    Main
    About
    Skills
    Contact
</template>

<script>
import Main from '@/components/Main.vue'
import About from '@/components/About.vue'
import Skills from '@/components/Skills.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'App',
  components: {
    Main,
    About,
    Skills,
    Contact,
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>