<template lang="pug">
    .about
        p {{ explanation }}
</template>

<script>
export default {
    name: 'About',
    data: function() {
        return {
            explanation: 'This site is developed by a programmer who is going to hack this world.'
        }
    }
}
</script>