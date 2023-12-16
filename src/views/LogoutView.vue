<script setup>

import { useAuthStore } from '@/stores/auth'
const auth = useAuthStore()
auth.logout

</script>
<template>
<span>Logout successfully!</span>
</template>