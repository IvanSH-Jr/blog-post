<template>
  <div class="dialog" v-if="openWindow" @click="closeWindow">
    <div class="dialog--content" @click.stop>
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: 'my-create-post',
    props:{
        openWindow: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    methods:{
        closeWindow(){
            this.$emit('update:openWindow', false)
        }
    }
}
</script>

<style scoped>
 .dialog{
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    position: fixed;
    display: flex;
 }
 .dialog--content{
    margin: auto;
    background: rgb(65, 184, 131);
    border-radius: 12px;
    min-height: 50px;
    min-width: 300px;
    padding: 20px;
 }
</style>