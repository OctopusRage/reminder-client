<template>
  <button @click="clickHandler">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'mybutton',
  props: ['label', 'clickHandler']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
