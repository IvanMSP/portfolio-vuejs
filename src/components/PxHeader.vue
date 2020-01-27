<template>
  <div class="flex-col container px-5 sm:px-20 py-20 flex justify-center">
    <header class="flex justify-center">
      <div class="flex flex-col sm:flex-row justify-around items-center">
        <div class="flex flex-col items-center">
          <img class="rounded-full" src="../assets/ivan.jpeg" alt="ivan" />
        </div>
        <div class="my-12 px-12 flex flex-col">
          <h1 class="title text-5xl">Iván López</h1>
          <h3 class="subtitle text-5xl">Backend Developer Jr.</h3>
          <div class="flex mb-4">
            <linkedin :size="48" />
            <github-circle :size="48" :fillColor="'#b71c1c'" />
            <gitlab :size="48" :fillColor="'#b71c1c'" />
          </div>
        </div>
      </div>
    </header>
    <div class="flex-col container px-5 sm:px-20 py-20 flex justify-center">
      <ul class="flex justify-center">
        <li class="-mb-px mr-1">
          <a class="inline-block py-2 px-4 font-semibold info" href="#"
            >Work Experiences</a
          >
        </li>
        <li class="mr-1">
          <a class="inline-block py-2 px-4 font-semibold info" href="#"
            >Qualifications</a
          >
        </li>
        <li class="mr-1">
          <a class="inline-block py-2 px-4 font-semibold info" href="#"
            >Education</a
          >
        </li>
        <li class="mr-1">
          <a class="inline-block py-2 px-4 font-semibold info" href="#"
            >Professional Skills</a
          >
        </li>
        <li class="mr-1">
          <a class="inline-block py-2 px-4 font-semibold info" href="#"
            >References</a
          >
        </li>
        <li class="mr-1">
          <a class="inline-block py-2 px-4 font-semibold info" href="#"
            >Hobbies</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Linkedin from "vue-material-design-icons/Linkedin.vue";
import GithubCircle from "vue-material-design-icons/GithubCircle.vue";
import Gitlab from "vue-material-design-icons/Gitlab.vue";

export default {
  components: {
    Linkedin,
    GithubCircle,
    Gitlab
  }
};
</script>

<style scoped>
.title {
  font-family: "Anton", Regular;
  color: #b71c1c;
}
.subtitle {
  font-family: "Dosis", Regular;
}
.info {
  font-family: "Anton", Regular;
  color: #b71c1c;
}
</style>
