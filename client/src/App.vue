<template>
  <div id="app">
    <page-nav />
    <main-layout />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import PageNav from '@/components/PageNav.vue';
import MainLayout from '@/layouts/MainLayout.vue';
export default {
  components: {
    PageNav,
    MainLayout
  },
	mounted() {
		this.fetchUsersFullData('http://localhost:3000/users');
	},
	methods: {
		...mapActions([
			'fetchUsersFullData'
		])
	},
  
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
