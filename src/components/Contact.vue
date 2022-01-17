<template lang="pug">
    section#contact
        h3 Contact
        label email
</template>

<script>
export default {
    name: 'Contact',
}
</script>

<style lang="scss" scoped>
    @import './styles/_variables.scss';
    #contact {
        background-color: map-get($background-color, 'contact');
        h3, label {
            color: $font-color;
        }
    }
</style>
