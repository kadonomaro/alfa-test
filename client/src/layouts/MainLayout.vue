<template>
  <main class="main-layout">
		<page-nav />
		<router-view/>
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
	.main-layout {
		max-width: 1200px;
		margin: 0 auto;
		padding: 100px 20px;
	}

</style>