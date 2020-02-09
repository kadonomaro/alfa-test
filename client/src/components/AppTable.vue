<template>
	<div class="app-table">
		<table class="app-table__table">
			<tbody>
				<tr>
					<th>Место</th>
					<th>ФИО</th>
					<th>Статус</th>
					<th>Опыт</th>
					<th>Монеты</th>
				</tr>
				<tr v-for="(user, index) in data" :key="index">
					<td>{{ positions[index] }}</td>
					<td>{{ user.fio }}</td>
					<td>{{ user.level }}</td>
					<td>{{ user.exp }}</td>
					<td>{{ user.coins }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	name: 'AppTable',
	props: {
		data: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			positions: [],
		}
	},
	mounted() {
		this.getCurrentPosition();
	},
	methods: {
		getCurrentPosition() {
			this.positions.length = 0;
			let position = 1;
			this.positions.push(position);
			this.data.forEach((item, index, data) => {
				const current = data[index];
				const prev = data[index - 1];
				if (prev) {
					if (prev.exp > current.exp) {
						position++;
						this.positions.push(position);
					} else if (prev.exp === current.exp) {
						position = position;
						this.positions.push(position);
					}
				}
			});
		}
	},
	watch: {
		data() {
			this.getCurrentPosition();
		}
	}
}
</script>

<style lang="scss">
	.app-table {
		overflow-x: auto;
		&__table {
			margin: 0 auto;
			border: 1px solid #303030;
			border-collapse: collapse;
			th,
			td {
				padding: 8px 12px;
			}
			th {
				color: #ffffff;
				background-color: #4e4e4e;
				&:not(:last-child) {
					border-right: 1px solid #ffffff;
				}
			}
			td {
				border-bottom: 1px solid #4e4e4e;
				&:not(:last-child) {
				border-right: 1px solid #4e4e4e;
				}
			}
		}
	}

	@media screen and (max-width: 767px) {
		.app-table {
			th,
			td {
				padding: 4px 6px;
			}
		}	
	}

</style>