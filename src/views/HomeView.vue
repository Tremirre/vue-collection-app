<template>
  <div>
    <header class="m-5">
      <h1>Welcome to Dummy Collection App!</h1>
    </header>
    <main class="mt-4 mb-4">
      <div class="container">
        <div class="row">
          <div class="col">
            <text-card
              title="Description"
              :texts="[
                'This is a simple app that allows you to manage your collection of dummy items.',
                'The purpuse of this app is purely educational as part of the Internet Applications course.',
              ]"
            />
          </div>
          <div class="col">
            <text-card
              title="Features"
              :texts="['Current the application supports the following:']"
              :bulletPoints="[
                'Adding new items to the collection with own data.',
                'Loading custom JSON data arrays from URL.',
                'Creating random items.',
                'Viewing all items in the collection in a convinient sortable, filterable table.',
              ]"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <article
              class="d-flex flex-row justify-content-center w-100 p-4 mt-4 floating-box"
            >
              <button
                class="btn btn-success btn-lg"
                @click="$router.push('/inventory')"
              >
                Go to Inventory
              </button>
            </article>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import TextCard from "@/components/TextCard.vue";

export default {
  name: "HomeView",
  components: { TextCard },
};
</script>

<style lang="scss">
.floating-box {
  animation: floating-box 1s ease-in-out infinite alternate;
}

@keyframes floating-box {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(10px);
  }
}
</style>
