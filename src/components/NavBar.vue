<template>
  <nav class="d-flex align-items-center p-4">
    <div
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
    >
      <img src="@/assets/logo-full.svg" alt="logo" />
    </div>
    <ul class="nav nav-pills">
      <li class="nav-item p-1">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item p-1">
        <router-link class="nav-link" to="/inventory">Inventory</router-link>
      </li>
      <li class="nav-item p-1">
        <router-link class="nav-link" to="/about">About</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style lang="scss" scoped>
nav {
  border-bottom: 2px solid #e5e5e5;
}
</style>
