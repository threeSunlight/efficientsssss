<template>
  <h1>登录</h1>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
  >
    <el-form-item label="登录" prop="username">
      <el-input v-model="ruleForm.username" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="ruleForm.password" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"> 登录 </el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue"
import type { FormInstance, FormRules } from "element-plus"
import * as TS from '../../api/defind'
import {Login} from '@/api/api'
// 表单尺寸大小
const formSize = ref("default")
// 获取表单实例对象
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<TS.RuleForm>({
  username: "",
  password: ""
})

const rules = reactive<FormRules<TS.RuleForm>>({
  username: [{ required: true, message: "登录名", trigger: "blur" }],
  password: [{ required: true, message: "登录名", trigger: "blur" }]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
			//@ts-ignore
      Login(ruleForm).then((res: TS.LoginRes) => {
				 // 先把token储存到本地

			})
    } else {
      console.log("error submit!", fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

</script>
