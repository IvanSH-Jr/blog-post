<template>
  <div class="post">
    <div>
        <div><strong>Название:</strong>{{post.title}}</div>
        <div><strong>Описание:</strong>{{post.body}}</div>        
    </div>
    <div>
        <my-btn
            @click="$emit('removePost', post)"
        >Удалить
        </my-btn>
    </div>
  </div>
  
</template>

<script>
export default {
    props:{
        post:{
            type: Object,
            required: true,
        }
    }
}
</script>

<style scope>
.post{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
}
</style>