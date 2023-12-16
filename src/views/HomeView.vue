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
    <span>Route name: <strong>{{ route_name }}</strong></span>  <span>Route path: <strong>{{ route_path }}</strong></span>  <br />
    Parameter: {{ route.params.id }}<br />
    <h2>Do not require Login Status True</h2>
    <!-- As we have to reload the page, we will not use RouterLink -->
    <a href="/" class="route">Route path: /</a><br />
    <a href="/folder" class="route">Route path: /folder</a><br />
    <a href="/folder/sub_folder" class="route">Route path: /folder/sub_folder</a><br />
    <a href="/param/1a" class="route">Route path: /param/1a</a> this router accept any parameter (1)<br />
    <a href="/param2/1" class="route">Route path: /param2/1</a> this router accept only number parameter (1)<br />
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
