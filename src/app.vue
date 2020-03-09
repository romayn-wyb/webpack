<template>
  <div class="btn" @click="show">
    {{msg}}
    <!-- <img src="./assets/small.jpg" /> -->
  </div>
</template>

<script>
 import { mapActions } from 'vuex';
export default {
  name: "App",
  data() {
    return {
      msg: "hello vue"
    };
  },
  computed: {
     
  },
  methods:{
    ...mapActions('person',['login']),

    show(){
     
  this.login({ userId: "", token: "", param: { phone: 19922222222, password: 1 } }).then((res)=>{
    debugger
  })
      
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