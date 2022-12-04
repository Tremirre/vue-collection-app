<template>
  <article class="card shadow p-4 text-start h-100">
    <h2 class="card-title text-decoration-underline fs-3">{{ title }}</h2>
    <p class="card-text" v-for="text in texts" :key="text">
      {{ text }}
    </p>
    <ul v-if="bulletPoints">
      <li v-for="bulletPoint in bulletPoints" :key="bulletPoint">
        {{ bulletPoint }}
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  name: "TextCard",
  props: {
    title: String,
    texts: Array,
    bulletPoints: Array,
  },
};
</script>

<style lang="scss"></style>
