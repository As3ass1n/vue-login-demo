<template>
  <div>{{username}}</div>
</template>

<script>
  // console.log(this.$route.params)
  console.log(this && this.$route)
  export default {
    name:'UserInfo',
    data() {
      return {
        userename: ''
      }
    },
    created(){
      this.showUserName();
    },
    watch: {
      '$route': 'showUserName'
    },
    methods: {
      showUserName() {
        console.log(this.$route)
        this.username = this.$route.params.username || ''
      }
    }
  }
</script>