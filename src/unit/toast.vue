<template>
  <div>
    <button @click="handelClick">toast</button>
  </div>
</template>

<script>
export default {
  name: "demo",
  methods:{
      handelClick(){
          this.$toast({
              type:"success",
              msg:'成功',
              duration:3
          })
      }
  }
};
</script>

<style>
</style>