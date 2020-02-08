<template>
  <div class="full">
		<app-table :data="getUsersFullData" />
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AppTable from '@/components/AppTable.vue';

export default {
  name: "Full",
  components: {
		AppTable
	},
  data() {
    return {

		}
	},
	mounted() {
		this.fetchUsersFullData('http://localhost:3000/users');
	},
	methods: {
		...mapActions([
			'fetchUsersFullData'
		])
	},
	computed: {
		...mapGetters([
			'getUsersFullData'
		])
	}
};
</script>
