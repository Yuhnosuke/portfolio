<template lang="pug">
    section#home
        h1 Yuhnosuk Hashimoto
        p Software Engineer
</template>

<script>
export default {
    name: 'Home',
}
</script>

<style lang="scss" scoped>
@import './styles/_variables.scss';
    #home {
        background-color: map-get($background-color, 'home');
        height: 768px;
        display: flex;
        flex-direction:column;
        justify-content: center;
        h1 {
            font-size: 5rem;
        }
        p {
            font-size: 2.5rem;
        }
        h1, p {
            color: $font-color;
        }
    }
</style>
