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
    <!-- As we have to reload the page, we will not use RouterLink -->
    <strong>href</strong> <a href="/" class="route">Route path: /</a><br />
    <strong>href</strong> <a href="/folder" class="route">Route path: /folder</a><br />
    <strong>href</strong> <a href="/folder/sub_folder" class="route">Route path: /folder/sub_folder</a><br />
    <strong>href</strong> <a href="/" class="route">Route path: /</a><br />
    <strong>href</strong> <a href="/" class="route">Route path: /</a><br />
    <h2>Login System will work for the follow links</h2>
    <strong>RouterLink</strong> <a href="/" class="route">Route path: /</a><br />
    <strong>RouterLink</strong> <a href="/" class="route">Route path: /</a><br />
    <strong>RouterLink</strong> <a href="/" class="route">Route path: /</a><br />
    <strong>RouterLink</strong> <a href="/" class="route">Route path: /</a><br />
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
