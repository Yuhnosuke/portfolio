<template lang="pug">
    .skills
        ul
            li(v-for="webSkill in webSkills") {{ webSkill }}
</template>

<script>
export default {
    name: 'Skills',
    data: function() {
        return {
            webSkills: ['JavaScript', 'Python'],
        }
    }
}
</script>
