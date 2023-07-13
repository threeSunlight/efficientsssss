<template>
	<div class="tableClass">
		<!-- 父组件 -->
		<!-- input查询框 -->
		<div class="mt-4">
			<el-input
				v-model="userId"
				placeholder="Please input"
				class="input-with-select"
			>
				<template #append>
					<el-button />
				</template>
			</el-input>
		</div>
		<!-- 添加用户 -->
		<el-button type="primary" @click="addUserItem">添加用户</el-button>
		<!-- table列表 -->
		<el-table :data="tableData" style="width: 100%">
			<el-table-column label="#" type="index"/>
			<el-table-column prop="username" label="姓名" />
			<el-table-column prop="email" label="邮箱" />
			<el-table-column prop="mobile" label="电话" />
			<el-table-column prop="role_name" label="角色" />
			<el-table-column prop="mg_state" label="状态">
				<template #default="scoped">
					<el-switch v-model="scoped.row.mg_state" />
				</template>
			</el-table-column>
			<el-table-column fixed="right" label="操作">
				<template #default="scoped">
					<el-button link type="primary" size="small" @click="handleClick(scoped.row)">
						编辑
					</el-button>
					<el-button link type="primary" size="small">删除</el-button>
					<el-button link type="primary" size="small">分配角色</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
	<AddOrUpdate v-if="addOrUpdateVisible" ref="addOrUpdate" @closeDialog="closeDialog"/>
</template>
<script setup lang="ts">
	import { ref, reactive, nextTick } from 'vue';
	import * as TS from '../../api/defind';
	import { getUserList } from '../../api/api';
	/**引入子组件 */
	import AddOrUpdate from './AddOrUpdate.vue';

	/**控制新增和修改弹框显隐 */
	let addOrUpdateVisible = ref<boolean>(false)
	/**查询id */
	const userId = ref<string>('');
	// const userId: Ref<string> = ref('')

	/**获取弹框的dom元素 */
	const addOrUpdate = ref()

	/**列表传参 */
	const tableQuery: TS.UserTableQuery = reactive({
		pagenum: 1,
		pagesize: 10,
	});
	//定义数据列表
	let tableData = ref<TS.UserList>([]);

	/**新增弹框 */
	const addUserItem = () => {
		console.log('添加用户');
		
		addOrUpdateVisible.value = true
		nextTick(() => {
			addOrUpdate.value.getParentInfo()	
		})
	}
	/**编辑弹框 */
	const handleClick = (tableItem: TS.UserItem) => {
		console.log(tableItem,'tableItem');
		// 让子组件进行显示,并且获取子组件的方法,进行传参
		addOrUpdateVisible.value = true
		console.log('click');
		nextTick(() => {
			addOrUpdate.value.getParentInfo(tableItem)	
		})
	};
	/**关闭弹框 */
	const closeDialog = (value: boolean) => {
		addOrUpdateVisible.value = value
	}
	/**获取列表信息 */
	const getUserLists = () => {
		getUserList(tableQuery)
			.then((res) => {
				const {
					data: { users },
					meta,
				} = res.data;
				tableData.value = users;
				console.log(tableData, 'tableData');
			})
			.catch((err) => {
				console.log(err);
			});
	};
	getUserLists();
</script>
<style lang="scss">
	.tableClass {
		padding: 20px;
	}
</style>
