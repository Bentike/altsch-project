<template>
    <div v-if="loading" ></div> 
 </template>
 
 <script>
 export default {
     name: "LoadingComponent",
     props: {loading: Boolean},
 }
 </script>