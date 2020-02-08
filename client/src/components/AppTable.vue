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
				<tr v-for="item in rowCount ? sortedData.slice(0, rowCount) : sortedData" :key="item.idNode">
					<td>1</td>
					<td>{{ item.fio }}</td>
					<td>{{ item.level }}</td>
					<td>{{ item.exp }}</td>
					<td>{{ item.coins }}</td>
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
			required: true
		},
		rowCount: {
			type: Number,
			required: false
		}
	},
	methods: {
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
		}
	},
	computed: {
		sortedData() {
			return this.data.map((item)=>{
				return {
					fio: item.fio,
					level: item.level,
					exp: this.getExperienceSum(item.resources),
					coins: this.getCoinsSum(item.resources)
				};
			})
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