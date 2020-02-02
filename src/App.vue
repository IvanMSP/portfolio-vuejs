<template>
  <main>
    <px-header :user="user" />
    <router-view class="container px-5 sm:px-20 py-20 flex justify-content" />
  </main>
</template>

<script>
import api from "@/api";
import PxHeader from "@/components/PxHeader";

export default {
  name: "app",

  components: {
    PxHeader
  },

  data() {
    return {
      user: {}
    };
  },

  created() {
    api.getUser().then(user => (this.user = user));
  }
};
</script>

<style>
#app {
  font-family: "Dosis", Light;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #b71c1c;
  margin-top: 60px;
}
body {
  background-color: #ebebeb;
  color: rgb(0, 0, 0);
}
</style>
