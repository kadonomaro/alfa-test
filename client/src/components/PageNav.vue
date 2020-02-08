<template>
  <nav class="page-nav">
    <ul class="page-nav__list">
      <li class="page-nav__item">
				<router-link class="button page-nav__link" to="/home">Начало</router-link>
			</li>
      <li class="page-nav__item">
				<router-link class="button page-nav__link" to="/top">Топ 5</router-link>
			</li>
      <li class="page-nav__item">
				<router-link class="button page-nav__link" to="/full">Весь список</router-link>
			</li>
    </ul>
  </nav>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.page-nav {
	&__list {
		display: flex;
		justify-content: center;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	&__item {
		margin: 0 5px;
	}
	&__link {
		text-decoration: none;
	}
}
</style>