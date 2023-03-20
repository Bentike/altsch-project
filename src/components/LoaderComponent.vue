<template>
    <div v-show="loading">Loading...</div>
</template>

<script>
 export default {
    name: "LoaderComponent",
    props: {
        loading: Boolean
    }
 }
</script>