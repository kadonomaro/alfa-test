<template>
  <main class="main">
		<page-nav class="main__nav" />
		<div class="main__content">
			<router-view/>
		</div>
	</main>
</template>

<script>
import PageNav from '@/components/PageNav.vue';
export default {
	name: 'MainLayout',
	components: {
		PageNav
	}
	
}
</script>

<style lang="scss">
	.main {
		max-width: 1200px;
		margin: 0 auto;
		padding: 100px 20px;
		&__nav {
			margin-bottom: 40px;
		}
	}

</style>