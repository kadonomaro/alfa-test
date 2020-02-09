<template>
  <div class="full">
		<app-table :data="getUsersSortedData" />
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
			'getUsersSortedData'
		])
	}
};
</script>
