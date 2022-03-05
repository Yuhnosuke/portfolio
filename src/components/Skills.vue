<template lang="pug">
    section#skills
        h3 Skills
        .skill-container
            .front
                ul
                    li HTML
                    li CSS
                    li JavaScript
            .backend
                ul
                    li Python
            .sem
                ul
                    li Google Analytics
                    li Google Tag Manager
</template>

<script>
export default {
    name: 'Skills',
}
</script>

<style lang="scss" scoped>
@import './styles/_variables.scss';
    #skills {
        background-color: map-get($background-color, 'skills');
        padding: 50px 0;
        h3 {
            color: $c-white;
            font-size: map-get($font-size, 'sections');
        }
        .skill-container {
            width: 60%;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            .front, .backend, .sem {
                width: 50%;
                padding: 10px 0;
                ul {
                    list-style-type: none;
                    li {
                        color: $c-white;
                        font-size: map-get($font-size, 'skills');
                        font-weight: 500;
                    }
                }
            }
        }
    }
</style>
