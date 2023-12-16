<script setup>
import { ref, watch } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
const auth = useAuthStore()
const router = useRouter()
import { storeToRefs } from 'pinia'
const { login_status } = storeToRefs(auth)
watch(login_status, () => login_status.value ? router.push({ name: 'home' }) : '' )
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav id="nv">
        <RouterLink to="/" class="inline_block">Home</RouterLink>
        <RouterLink to="/about" class="inline_block">About</RouterLink>
        <RouterLink v-show="!auth.login_status" to="/login" class="inline_block">Login</RouterLink>
        <RouterLink v-show="auth.login_status" to="/logout" class="inline_block">Logout</RouterLink> <br />
        <span>Login becouse some routes are protected</span><br />
        <span>Login Status: </span><strong>{{ auth.login_status }}</strong> 
      </nav>
    </div>
  </header>
  <h2>Login System will work for the follow links (These page only will be accessed when Login Status is True)</h2>
  <RouterLink to="/protected_1" class="route">Route path: protected_1</RouterLink><br />
  <RouterLink to="/protected_2" class="route">Route path: protected_2</RouterLink><br />    

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
