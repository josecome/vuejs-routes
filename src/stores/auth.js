import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  /* 
  The purpose of this auth is only to store status of user 
  and not the implementation of all user session system.
  
  To find the Login system implementation in other repository 
  from this github account: https://github.com/josecome
  */
  const login_status = ref(false)
  
  function login() {
    console.log('Logged in0!')
    login_status.value = true
    console.log('Logged in!')
  }
  function logout() {
    login_status.value = false
    console.log('Logged out!')
  }

  return { login_status, login, logout }
})
