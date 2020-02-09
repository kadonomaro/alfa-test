<template>
  <div class="top">
    <!-- <app-table :data="getUsersFullData" :rowCount="5"/>
    <hr>
    <span>sorted</span> -->
    <app-table :data="getUsersSortedData" :rowCount="5"/>
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
      'getUsersSortedData'
		])
	}
}
</script>
