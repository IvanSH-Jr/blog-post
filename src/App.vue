<template>
  <div class="app__logo"><img alt="Vue logo" src="./assets/logo.png"></div>
  <h1>Страница с постами</h1>
  <div class="app__btns">
    <my-btn
      @click="openCreatePost"
    >
      Создание постов
    </my-btn>
    <my-select
      v-model="selectedSort"
      :options = "sortOptions"
    ></my-select>
  </div>

  <my-create-post v-model:openWindow="createPostVisible">
    <post-form
      @create="createPost"
    />
  </my-create-post>

  <post-list 
    v-if="!postLoading"
    :posts="posts"
    @removePost="removePost"
  />
  <div v-else class="loading">Идет загрузка...</div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import MyCreatePost from './components/myUI/MyCreatePost.vue';
import MyBtn from './components/myUI/MyBtn.vue';
import axios from 'axios'
export default {
  components:{
    PostForm,
    PostList,
    MyCreatePost,
    MyBtn
    
  },
  data(){
    return{
      posts:[],
      createPostVisible: false,
      postLoading: false,
      selectedSort: '',
      sortOptions:[
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'}
      ]
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
    },
    async fetchPost(){
      try {
        this.postLoading = true
        setTimeout( async () => {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
          this.posts = response.data  
          this.postLoading = false        
        }, 1000)
      } catch (error) {
        console.log(error)
      }
    }
  },

  mounted(){
    this.fetchPost()
  }

}
</script>

<style scope>
  .app__logo{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loading{
    margin: 15px;
    font-size: 20px;
    font-family:Verdana, Geneva, Tahoma, sans-serif
  }
  .app__btns{
    display: flex;
    justify-content: space-between;
  }
</style>
