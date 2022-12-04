<template>
  <div class="content">
    <nav-bar />
    <div class="w-100 mx-auto mw-80vw p-2 h-100 flex-grow-1">
      <transition name="fade">
        <router-view />
      </transition>
    </div>
    <footer-bar />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterBar from "@/components/FooterBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
    FooterBar,
  },
};
</script>

<style lang="scss">
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css");
:root {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.content {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.mw-80vw {
  max-width: 80vw !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
