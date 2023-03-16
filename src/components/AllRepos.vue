<template>
    <div>
        <h1>All My Repos</h1>
        <p>{{ repos }}</p>
        <button @click="setAllRepos">change repo</button>
    </div>
</template>

<script>
 export default{
    name: 'AllRepos',
    data() {
        return{
            repos: []
        }
    },
    methods: {
        setAllRepos(){
            this.repos = "Bentee";
        }
    },
    mounted(){
       fetch("https://api.github.com/users/bentike/repos")
       .then(res => res.json())
       .then(data => {
         this.repos = data;
       });
    }
 }
</script>