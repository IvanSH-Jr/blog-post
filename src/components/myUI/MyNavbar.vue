<template>
  <div class="navbar">
    <div class="navbar__btns">
      <my-btn style="color:rgb(65, 184, 131)" @click="$router.push('/posts')">К постам</my-btn>
      <my-btn style="color:rgb(65, 184, 131)" @click="$router.push('/about')">О приложении</my-btn>
    </div>
  </div>
</template>

<script>

export default {
 

}
</script>

<style scoped>
  .navbar{
    height: 50px;
    background-color: teal;
    box-shadow: 2px 2px 4px grey;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
    border-radius: 10px;
  }

</style>