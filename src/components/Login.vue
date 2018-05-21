<template>
  <div class="login">
    <div class="block">
      <label for="name">用户名</label> <input name="username" type="text" id="username">
    </div>
    <div class="block">
      <label for="password">密码</label> <input name="password" type="password" id="password">
    </div>
    <div class="button" id="btn">
      <button class="login-btn" v-on:click="login">登陆</button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import MockAdapter from 'axios-mock-adapter';

  const url = 'http://test.advance.ai';

  const mock = new MockAdapter(axios);
  mock.onPost(`${url}/login`).reply((config) => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve([200,{
          code: 0,
          status: 0,
          body: {token: Math.random().toString(36).substr(2)}
        }])
      },100)
    })
  });

  export default {
    name: 'Login',
    methods: {
      login: async function() {
        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;
        const result = await axios.post(`${url}/login`,JSON.stringify({username,password}))
        const {data} = result;
        const {status} = data;
        // 登陆成功
        if(status === 0){
          this.$router.push({name: 'UserInfo',params: {username}})
        }
      }
    }
  }
</script>

<style scoped>
  .login{
    width: 400px;
    height: 400px;
    margin: 50px auto;
    border: 1px solid #ccc;
  }
</style>