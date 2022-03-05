<template lang="pug">
    section#about
        h3 About
</template>

<script>
export default {
    name: 'About',
}
</script>
<style lang="scss" scoped>
    @import './styles/_variables.scss';
    #about {
        background-color: map-get($background-color, 'about');
        font-size: map-get($font-size, 'sections');
    }
</style>
