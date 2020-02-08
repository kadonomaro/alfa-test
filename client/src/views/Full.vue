<template>
  <div class="full">
		<app-table :data="getUsersFullData" />
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppTable from '@/components/AppTable.vue';

export default {
  name: "Full",
  components: {
		AppTable
	},
	computed: {
		...mapGetters([
			'getUsersFullData'
		])
	}
};
</script>
