<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
const auth = useAuthStore()
const route = useRoute()
const route_name = ref(route.name)
const route_path = ref(route.path)
</script>
<template>
  <main>
    <h1>Home page</h1><span>Route name: <strong>{{ route_name }}</strong></span>  <span>Route path: <strong>{{ route_path }}</strong></span>  <br />
    <strong>List of Routes</strong><br />
    <RouterLink to="/" class="route">Route path: /</RouterLink><br />
    <RouterLink to="/" class="route">Route path: /</RouterLink><br />
    <RouterLink to="/" class="route">Route path: /</RouterLink><br />
    <RouterLink to="/" class="route">Route path: /</RouterLink><br />
    <RouterLink to="/" class="route">Route path: /</RouterLink><br />
    <RouterLink to="/" class="route">Route path: /</RouterLink><br />
    <RouterLink to="/" class="route">Route path: /</RouterLink><br />
  </main>
</template>
<style scoped>
span {
  padding: 8px;
  margin: 8px;
  font-size: 26px;
}
strong {
  font-size: 26px;
}
.route {
  padding: 6px;
  margin: 6px;
  font-size: 18px;
}
</style>
