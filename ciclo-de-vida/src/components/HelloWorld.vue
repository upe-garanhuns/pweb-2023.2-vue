<template>
  <input ref="texto" type="texto" v-model="palavra">
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      palavra: ""
    }
  },
  beforeCreate() { // sem acesso ao DOM e aos dados
    console.log("before create")
    console.log("Data:", this.palavra)
    console.log("DOM:", this.$refs.texto)
  },
  created() { // com acesso aos dados, mas sem acesso ao DOM
    console.log("created")
    console.log("Data:", this.palavra)
    console.log("DOM:", this.$refs.texto)
  },
  beforeMount() { // com acesso aos dados, mas sem acesso ao DOM
    console.log("before mount")
    console.log("Data:", this.palavra)
    console.log("DOM:", this.$refs.texto)
  },
  mounted() { // com acesso ao DOM e aos dados
    console.log("mounted")
    console.log("Data:", this.palavra)
    console.log("DOM:", this.$refs.texto)
  },
  beforeUpdate() { // com acesso ao DOM e aos dados
    console.log("before update")
    console.log("Data:", this.palavra)
    console.log("DOM:", this.$refs.texto)
  },
  updated() { // com acesso ao DOM e aos dados
    console.log("updated")
    console.log("Data:", this.palavra)
    console.log("DOM:", this.$refs.texto)
  },
  beforeUnmount() { //DOM undefined e sem acesso aos dados
    console.log("before unmount")
    console.log("Data:", this.palavra)
    console.log("DOM:", this.$refs.texto)
  },
  unmounted() { // sem acesso ao DOM, mas com acesso aos dados
    console.log("unmount")
    console.log("Data:", this.palavra)
    console.log("DOM:", this.$refs.texto)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
