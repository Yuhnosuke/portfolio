<template lang="pug">
    section#skills
        h3 Skills
        ul
            li(v-for="webSkill in webSkills") {{ webSkill }}
</template>

<script>
export default {
    name: 'Skills',
    data: function() {
        return {
            webSkills: [
                'HTML',
                'CSS',
                'JavaScript',
                'Python',
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
@import './styles/_variables.scss';
    #skills {
        background-color: map-get($background-color, 'skills');
        h3 {
            color: #F2EADF;
        }
        li {
            color: #F2DFBB;
        }
    }
</style>
