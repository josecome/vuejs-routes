<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const route_name = ref('')
    onMounted(() => {
      route_name.value = route.name
    })
</script>
<template>
    <h1>Protected View: {{ route_name }}</h1>
</template>