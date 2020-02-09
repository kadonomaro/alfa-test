<template>
  <div class="top">
    <app-table :data="getUsersTopData"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppTable from '@/components/AppTable.vue';

export default {
  name: 'top',
  components: {
    AppTable
  },
	computed: {
		...mapGetters([
      'getUsersTopData'
		])
	}
}
</script>
