<template>
    <div>
        <h1>Hello {{ name }}</h1>
        <h3>
            Repo Cards will be here.
        </h3>
    </div>
</template>

<script>
  export default {
    name: 'HelloCard',
    props: {
        name: String
    }
  }
</script>