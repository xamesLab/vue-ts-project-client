<template>
    <div class="vue-component">{{ text }}</div>
    <div class="vue-component">env: {{ env }}</div>
</template>
<script>
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
<style>
    .vue-component {
        color: brown;
    }
</style>