<template>
    <div v-show="loading">Loading...</div>
</template>

<script>
 export default {
    name: "Loader",
    props: {
        loading: Boolean
    }
 }
</script>