<template>
  <div class="card">
     <slot/>
  </div>
</template>

<script>
export default {
  name: "HelloCard",
  props: ["fullname", "url", "name", "id", "branch"]
};
</script>

<!-- <style>
 .card{
  width: 40%;
  border-radius: 15px;
  background-color: red;
  padding: 20px;
  transition: all ease-in-out .2s;
 }
 .card:hover{
  transform: scale(1.1); 
 }
 .title{
  color: #000;
  font-style: italic;
 }
 p{
  color:#fff
 }
</style> -->