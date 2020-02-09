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
				<tr v-for="(user, index) in rowCount ? sortedData.slice(0, rowCount) : sortedData" :key="index">
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
		},
		rowCount: {
			type: Number,
			required: false
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
		getCurrentPosition(index) {
			let position = 1;
			this.positions.push(position);
			this.sortedData.slice(0, this.rowCount).forEach((item, index, data) => {
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
		},

		getExperienceSum(data) {
			data = JSON.parse(data);
			let sum = 0;
			for (const key in data) {
				if (data.hasOwnProperty(key)) {
					const element = data[key];
					if (element.resource === 'ACTIVERATE' || element.resource === 'PASSIVERATE') {
						sum += element.value;
					}
				}
			}
			return sum;
		},

		getCoinsSum(data) {
			data = JSON.parse(data);
			let sum = 0;
			for (const key in data) {
				if (data.hasOwnProperty(key)) {
					const element = data[key];
					if (element.resource === 'MONEY') {
						sum += element.value;
					}
				}
			}
			return sum;
		},

		compareExp(a, b) {
			return a.exp - b.exp;
		}
	},
	computed: {
		sortedData() {
			return this.data.map((item) => {
				return {
					fio: item.fio,
					level: item.level,
					exp: this.getExperienceSum(item.resources),
					coins: this.getCoinsSum(item.resources),
				};
			}).sort(this.compareExp).reverse();
		}
	}

}
</script>

<style lang="scss">
	.app-table {
		&__table {
			margin: 0 auto;
			border: 1px solid #303030;
			border-collapse: collapse;
			th,
			td {
				padding: 5px 8px;
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

</style>