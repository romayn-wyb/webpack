<template>
  <div>
    <button @click="handelClick">message</button>
  </div>
</template>

<script>

export default {
  name: "message",
  mounted(){
    debugger
  },
  methods:{
      handelClick(){
          this.$message({
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