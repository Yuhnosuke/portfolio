<template lang="pug">
    section#home
        h1 Yuhnosuk Hashimoto
        p
            | Software Engineer engaged in<br>
            | Social Business
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
        height: 770px;
        width: 100%;
        display: flex;
        flex-direction:column;
        justify-content: center;
        h1 {
            font-size: map-get($font-size, 'name');
        }
        p {
            font-size: map-get($font-size, 'job');
        }
        h1, p {
            color:  map-get($font-color, 'home');
        }
    }
    @media screen and (max-width: 480px) {
        #home {
            height: 844px;
            h1 {
                font-size: map-get($font-size, 'name') * $sp-font-threshold;
            }
            p {
                font-size: map-get($font-size, 'job') * $sp-font-threshold;
                margin-top: 1rem;
            }
        }
    }
</style>
