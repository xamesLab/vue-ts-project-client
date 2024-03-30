<template>
    <h1 class="main-title">Title</h1>
    <div class="vue-component">{{ text }}</div>
    <div class="">env: {{ env }}</div>
</template>
<script>
import "./style.scss";

export default {
    name: 'app',
    data(){
        return {
            text: 'Vue component',
            env: process.env.NODE_ENV
        }
    }
}
</script>
<style lang="scss">
    $body-color: green;
    .vue-component {
        color: $body-color;
    }
</style>