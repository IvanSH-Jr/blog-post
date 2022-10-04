<template>
  
  <div class="app">
    <my-navbar></my-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import MyNavbar from '@/components/myUI/MyNavbar.vue'
export default {
  components:{
    MyNavbar
  }
}
</script>

<style>
  body{
    width: 50%;
    margin: 15px auto;
    padding: 20px;
    border: 4px solid teal;
    border-radius: 15px;
  }
</style>