<template>
  <div class="app__logo"><img alt="Vue logo" src="./assets/logo.png"></div>
  <h1>Страница с постами</h1>
  <my-btn
    @click="openCreatePost"
  >Создание постов</my-btn>
  <my-create-post v-model:openWindow="createPostVisible">
    <post-form
      @create="createPost"
    />
  </my-create-post>

  <post-list 
    :posts="posts"
    @removePost="removePost"
  />
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import MyCreatePost from './components/myUI/MyCreatePost.vue';
import MyBtn from './components/myUI/MyBtn.vue';

export default {
  components:{
    PostForm,
    PostList,
    MyCreatePost,
    MyBtn
    
  },
  data(){
    return{
      posts:[
        {id:1, title: 'JavaScript', body:'Описание поста'},
        {id:2, title: 'JavaScript', body:'Описание поста'},
        {id:3, title: 'JavaScript', body:'Описание поста'},
        {id:4, title: 'JavaScript', body:'Описание поста'},
        {id:5, title: 'JavaScript', body:'Описание поста'},
      ],
      createPostVisible: false
    }
  },
  methods: {
    createPost(post){
      this.posts.push(post)
      this.createPostVisible = false
    },
    removePost(post){
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    openCreatePost(){
      this.createPostVisible = true
    }
  }
}
</script>

<style scope>
  .app__logo{
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
