<template lang="pug">
    section#contact
        h3 Contact
        .form
            p Please contact me  with &nbsp;
            p: a(href="https://docs.google.com/forms/d/1pa2nFX-mO67YGFR_Bj3CqvnVwefCMDQOYVkSnQ7P5lE/edit" target='_blank') Google Form.
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
        padding: 50px 0;
        h3 {
            font-size: map-get($font-size, 'sections');
        }
        h3, p {
            color: $c-white;
        }
        p {
            font-size: map-get($font-size, 'form');
        }
        a:active, a:visited, a:active {
            color: $c-white;
        }
    }
    .form {
        display: flex;
        justify-content: center;
        margin-top: 10px;
    }
    @media screen and (max-width: 480px) {
        #contact {
            h3 {
                font-size: map-get($font-size, 'sections') * $sp-font-threshold;
            }
            p {
                font-size: map-get($font-size, 'form') * $sp-font-threshold;
            }
        }
    }
</style>
