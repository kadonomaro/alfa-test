<template>
  <main class="main">
		<div class="main__content">
			<transition name="fade" mode="out-in">
				<router-view/>
			</transition>
		</div>
	</main>
</template>

<script>

export default {
	name: 'MainLayout',
}
</script>

<style lang="scss">
	.main {
		&__nav {
			margin-bottom: 40px;
		}
		&__content {
			max-width: 1200px;
			margin: 0 auto;
			padding: 30px 10px
		}
	}

</style>