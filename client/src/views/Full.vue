<template>
  <div class="full">full</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "Full",
  components: {},
  data() {
    return {

		}
	},
	mounted() {
		this.getUsersFullData('http://localhost:3000/users');
	},
	methods: {
		...mapActions([
			'getUsersFullData'
		])
	}
};
</script>
