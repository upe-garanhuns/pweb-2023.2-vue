<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ url }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: window.location.href.toString().split("/").pop()
    }
  }
}
</script>
