<template lang="pug">
    .main
        h1 {{ name }}
        h3 {{ title }}
</template>

<script>
export default {
    name: 'Home',
    data: function() {
        return {
            name: 'Yuhnosuk Hashimoto',
            title: 'Programmer',
        }
    },
}
</script>
