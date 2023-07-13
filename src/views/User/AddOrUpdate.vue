<!-- 新增和修改的弹框 -->
<template>
  <el-dialog v-model="dialogFormVisible" :title="!form.id ? '新增用户' : '修改用户'">
    <el-form :model="form">
      <el-form-item label="用户名" :label-width="formLabelWidth" :disabled="!form.id">
        <el-input v-model="form.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" :label-width="formLabelWidth" v-if="!form.id">
        <el-input v-model="form.password" autocomplete="off" />
      </el-form-item>
      <el-form-item label="手机" :label-width="formLabelWidth">
        <el-input v-model="form.mobile" autocomplete="off" />
      </el-form-item>
      <el-form-item label="邮箱" :label-width="formLabelWidth">
        <el-input v-model="form.email" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="saveInfo">
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import * as TS from '../../api/defind'
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'
const emit = defineEmits(['closeDialog'])
let form: TS.UserAdd = reactive({
  id: 0,
  username: '', 
  password: '', 
  mobile: '', 
  email: ''
})

/**定义一个父组件调用的方法 */
const getParentInfo = (tableItem: TS.UserItem) => {
  dialogFormVisible.value = true
  console.log(!0,'0000000')
  if(!tableItem) {
    // 新增
  } else {
    //修改
    form = tableItem
  }

  
}

/**保存数据 */
const saveInfo = () => {
   emit('closeDialog', false)
   // 接口一会再说.现在接口请求完了
   //关闭弹框
}

/**将子组件的方法暴露给父组件 */
defineExpose({
  getParentInfo
})

</script>
<style>
</style>