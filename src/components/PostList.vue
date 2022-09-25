<template>
    <div v-if="posts.length > 0">
        <h3>Список постов:</h3>
        <post-item 
            v-for="post in posts" :key="post.id"
            :post="post"
            @removePost="$emit('removePost', post)"
        />
        
    </div>
    <h2 
        v-else 
        class="empty-list"
    >
        Спискок постов пуст!
    </h2>
</template>

<script>
import PostItem from '@/components/PostItem'
export default {
    components:{
        PostItem,
       
    },
    props:{
        posts:{
            type: Array,
            required: true
        }
    },
    data(){
        return{
            
        }
    }
}
</script>

<style scoped>
.empty-list{
    color: red;
}
</style>>

