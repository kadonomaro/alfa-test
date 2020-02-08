<template>
	<h1 class="page-title">{{ text }}</h1>
</template>

<script>
export default {
	name: 'PageTitle',
	props: {
		text: {
			type: String,
			required: false,
			default: ()=> 'Title'
		}
	}
};
</script>

<style>
</style>