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
            color: #F2EADF;
            font-size: map-get($font-size, 'sections');
        }
        .skill-container {
            width: 60%;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            .front, .backend {
                width: 50%;
                padding: 10px 0;
                ul {
                    list-style-type: none;
                    li {
                        color: #F2DFBB;
                        font-size: map-get($font-size, 'skills');
                        font-weight: 500;
                    }
                }
            }
        }
    }
</style>
