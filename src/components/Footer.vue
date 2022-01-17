<template lang="pug">
    section#footer
        .sns
            span: a(href="https://twitter.com/YuhnosukeHashi" target="_blank") Twitter
            span: a(href="https://github.com/Yuhnosuke" target="_blank") Github
</template>

<style lang="scss" scoped>
    @import './styles/_variables.scss';
    #footer {
        background-color: map-get($background-color, 'footer');
        padding: 25px 0;
        .sns {
            width: 60%;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            span {
                width: 25%;
                padding: 10px 0;
                a {
                    color: $font-color;
                    font-size: map-get($font-size, 'sns');
                }
            }
        }
    }
    a:active, a:visited, a:active {
        color: $font-color;
    }
</style>
