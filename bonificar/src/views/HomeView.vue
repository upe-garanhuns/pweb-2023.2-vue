<template>
    <nav>
      <router-link :to="{ name: 'login'}">Login - Responsável</router-link> |
      <router-link :to="{ name: 'login-dependente'}">Login - Dependente</router-link> |
      <router-link :to="{ name: 'cadastro' }">Cadastro - Responsável</router-link> 
    </nav>
    <main>
      <h1>Seja bem-vindo!</h1>
    </main>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
