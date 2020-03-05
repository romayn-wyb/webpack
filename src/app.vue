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
      msg: "hello vue"
    };
  },
  mounted() {
  
  
  },
  methods:{
    show(){
      
     alert(this.$store.state.count)   //this.$store.commit('increment');
      
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