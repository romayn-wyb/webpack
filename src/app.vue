<template>
  <div class="btn" @click="show()">
    {{msg}}
    <!-- <img src="./assets/small.jpg" /> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: "hello v444     ue"
    };
  },
  mounted() {
  
  },
  methods:{
    show(){
      
         this.$message.success('this is success message!')
    }
  }
};
</script>

<style lang="scss">
@import "./style/index.scss";
$red: red;
.btn {
  background: $red;
}
</style>