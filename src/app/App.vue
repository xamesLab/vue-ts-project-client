<template>
    <v-theme-provider>
        <div class="vue-component">
            <h1 class="main-title">Test deploy</h1>
            <div class="">env: {{ env }}</div>
            <div class="">users store: {{ users }}</div>
            <div class="">users is active: {{ activeUsers }}</div>
            <button @click="toggleTheme" class="button">change theme</button>
        </div>
    </v-theme-provider>
</template>
<script>
import "./style.scss";
import {useUserStore} from '../stores/userStore'
export default {
    name: 'app',
    data(){
        return {
            text: 'new Vue component in VPS ',
            env: process.env.NODE_ENV,
        }
    },
    computed: {
        theme() {
            return useUserStore().theme.type
        },
        users() {
            return useUserStore().users
        },
        activeUsers() {
            return useUserStore().activeUsers
        },
    },
    methods: {
        toggleTheme() {
            const nextTheme = this.theme === 'light' ? 'dark' : 'light'
            
            useUserStore().setTheme(nextTheme)
        }
    },
    created() {

    },
    mounted() {
        console.log('userStore.users', this.users)
    }
}
</script>
<style lang="scss">
    $body-color: green;
    .vue-component {
        
    }
</style>