<template>
  <div class="app__logo"><img alt="Vue logo" src="./assets/logo.png"></div>
  <h1>Страница с постами</h1>
  <my-input 
    v-model="searchQuery"
    placeholder="Поиск..."
  />
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
    :posts="sortedAndSearchedPosts"
    @removePost="removePost"
  />
  <div v-else class="loading">Идет загрузка...</div>
  <div class="page__wrapper">
    <div 
      v-for="pageNumber in totalPages" 
      :key="pageNumber" 
      class="page"
      :class="{
        'current-page': page === pageNumber
      }"
      @click="changePage(pageNumber)"
      >{{pageNumber}}
  </div>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import MyCreatePost from './components/myUI/MyCreatePost.vue';
import MyBtn from './components/myUI/MyBtn.vue';
import axios from 'axios'
import MyInput from './components/myUI/MyInput.vue';
export default {
  components:{
    PostForm,
    PostList,
    MyCreatePost,
    MyBtn,
    MyInput
    
  },
  data(){
    return{
      posts:[],
      createPostVisible: false,
      postLoading: false,
      selectedSort: '',
      searchQuery:'',
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions:[
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'}
      ],
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
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
            params:{
              _page: this.page,
              _limit: this.limit
            }
          });
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit) 
          this.posts = response.data  
          this.postLoading = false        
        }, 1000)
      } catch (error) {
        console.log(error)
      }
    },
    changePage(pageNumber){
      this.page = pageNumber
    }
  },
  computed:{
    sortedPost(){
      return [...this.posts].sort(((post1,post2) => {
          return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      }))
    },
    sortedAndSearchedPosts(){
      return this.sortedPost.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLocaleLowerCase()))
    }
  },
  watch:{
    page(){
      console.log(this.page)
      this.fetchPost()
    }
  },
  mounted(){
    this.fetchPost()
  }

}
</script>

<style scope>
  body{
    width: 50%;
    margin: 15px auto;
    padding: 20px;
    border: 4px solid teal;
    border-radius: 15px;
  }
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
    margin-top: 15px;
  }
  .page__wrapper{
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  .page{
    border: 1px solid black;
    padding: 10px;
  }
  .page:hover{
    cursor: pointer;
  }
  .page:not(:first-child){
    margin-left: 15px;
  }
  .current-page{
    border: 2px solid teal;
  }
</style>
