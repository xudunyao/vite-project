<template>
  <div id="login">
    <div id="login-form">
      <h1>登陆界面</h1>
      <label for="username"></label>
      <input
        type="text"
        placeholder="用户名"
        name="username"
        id="username"
        autocapitalize="off"
        v-model.trim="username"
        aria-autocomplete="off"
      />
      <label for="password"></label>
      <input
        type="password"
        placeholder="密码"
        name="password"
        id="password"
        autocapitalize="off"
        v-model.trim="password"
      />
      <div>
        <el-button type="primary" @click="inputInfo">登录</el-button>
        <el-button type="info" @click="resetInfo">重置</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
const router = useRouter()
const username = ref('')
const password = ref('')

const inputInfo = () => {
  // 模拟登录逻辑
  if (username.value === 'admin' && password.value === '123456') {
    // 跳转到主页面
    ElMessage({
      showClose: true,
      message: '登录成功',
      type: 'success',
    })
    localStorage.setItem('isLoggedIn', 'true');
    router.push('/') // 请替换成你的主页面路由
  } else {
    console.log('登录失败，用户名或密码不正确')
  }
}

const resetInfo = () => {
  // 处理重置逻辑
  username.value = ''
  password.value = ''
}
</script>

<style lang="scss" scoped>
#login {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: #e8e8e8;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}

#login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50vw;
  min-width: 300px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 15px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);

  h1 {
    width: 60%;
    margin: 50px auto 20px;
    color: #c1c1c1;
    text-align: center;
    font-size: 32px;
  }

  input {
    width: 60%;
    margin: 15px auto;
    outline: none;
    border: none;
    padding: 10px;
    border-bottom: 1px solid #fff;
    background: transparent;
    color: white;
  }

  label {
    width: 60%;
    margin: 0 auto;
    position: relative;
    top: 30px;
    left: -15px;
  }

  div {
    width: 60%;
    margin: 10px auto;
    display: flex;
    justify-content: center;
    align-content: center;
  }

  button {
    // rgba
    background-color: rgba(9, 108, 144, 0.5);
    margin: 10px 25px 40px 25px;
  }

  p {
    width: 60%;
    margin: 8px auto;
    position: relative;
    left: -15px;
    color: #ff0000;
    font-size: 8px;
  }
}

input {
  -webkit-text-fill-color: #ffffff !important;
  transition: background-color 5000s ease-in-out, width 1s ease-out !important;
}
</style>
