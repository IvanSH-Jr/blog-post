<template>
  <div class="post">
    <div>
        <div><strong>Название:</strong>{{post.title}}</div>
        <div><strong>Описание:</strong>{{post.body}}</div>        
    </div>
    <div class="post__btns">
        <my-btn
            @click="$router.push(`/posts/${post.id}`)"
        >
            Открыть
        </my-btn>
        <my-btn
            @click="$emit('removePost', post)"
        >Удалить
        </my-btn>
    </div>
  </div>
  
</template>

<script>
import MyBtn from './myUI/MyBtn.vue'
export default {
  components: { MyBtn },
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
.post__btns{
    display: flex;
}

</style>