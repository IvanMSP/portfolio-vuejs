<template>
  <main>
    <px-header />
  </main>
</template>

<script>
import PxHeader from "@/components/PxHeader";

export default {
  name: "app",
  components: {
    PxHeader
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
  background-color: #dde1e3;
}
</style>
