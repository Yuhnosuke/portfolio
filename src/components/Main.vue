<template lang="pug">
    .main
        h1 {{ name }}
        h3 {{ title }}
    
</template>

<script>
export default {
    name: 'Main',
    data: function() {
        return {
            name: 'Yuhnosuk Hashimoto',
            title: 'Programmer',
        }

    }
}
</script>

<style lang="scss" scoped>


</style>