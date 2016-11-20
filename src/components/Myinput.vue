<template>
	<div>
		<input type="text" v-model="name">
		<p>Message is: {{ name }}</p>
	</div>
	
</template>

<script>
export default {
  name: 'myinput',
  props: ['type','name'],
  data() {
    return {
      name: ''
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
