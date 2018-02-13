<template>
    <blaze-template template="container" :data="{message}"></blaze-template>
</template>

<script>
	import container from './container.js'
    
	export default {
		name: 'App',
		data() {
			return {
				message: 'The cake is a lie!'
            }
		},
	}
</script>

<style scoped>

</style>
