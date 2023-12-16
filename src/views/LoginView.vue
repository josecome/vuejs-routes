<script setup>
import { useAuthStore } from '@/stores/auth'
const auth = useAuthStore()
const login = () => { 
    auth.login()
    
    }
</script>
<template>
<span>Click be logged in</span> <button @click="login">Login</button>
</template>
<style scoped>
button {
    padding: 8px;
    margin: 8px;
}
</style>