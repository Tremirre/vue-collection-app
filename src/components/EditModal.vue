<template>
  <div class="my-modal detached center">
    <article class="my-modal-window bg-light rounded">
      <header class="my-modal-header">
        <h2 class="my-modal-title fs-3">Create/Edit Item</h2>
      </header>
      <main class="my-modal-content">
        <template v-for="field in Object.keys(editItemModel)" :key="field">
          <div class="text-start px-1">{{ field }}</div>
          <div class="">
            <input
              class="form-control"
              type="text"
              v-model="editItemModel[field]"
              :readonly="field === 'id'"
              :disabled="field === 'id'"
            />
          </div>
        </template>
        <div
          v-if="createNewTemplate"
          class="colspan-all d-flex justify-content-center"
        >
          <button class="btn btn-secondary" @click="addField">+</button>
        </div>
      </main>
      <footer class="my-modal-footer">
        <button class="btn btn-primary" @click="saveItem">Save</button>
        <button class="btn btn-danger" @click="$emit('close')">Cancel</button>
      </footer>
    </article>
  </div>
</template>

<script>
export default {
  name: "EditModal",
  emits: ["close"],
  props: {
    item: Object,
  },
  data() {
    return {
      editItemModel: {},
      createNewTemplate: false,
    };
  },
  created() {
    if (!this.isItemEmpty()) this.editItemModel = this.item;
    else {
      this.createNewTemplate = true;
      this.editItemModel.id = 0;
    }
  },
  methods: {
    saveItem() {
      this.$emit("save", this.editItemModel);
    },
    isItemEmpty() {
      return (
        this.item &&
        Object.keys(this.item).length === 0 &&
        Object.getPrototypeOf(this.item) === Object.prototype
      );
    },
    addField() {
      const newField = prompt("Enter new field name");
      if (!newField) return;
      this.editItemModel[newField] = "";
    },
  },
};
</script>

<style lang="scss">
.detached {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1050;
  overflow: hidden;
  outline: 0;
}
.center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.my-modal {
  background-color: rgba($color: #202020, $alpha: 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.my-modal-window {
  width: 600px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-self: space-between;
}

.my-modal-header {
  border-bottom: 1px solid #dee2e6;
}

.my-modal-content {
  display: grid;
  grid-template-columns: 1fr 3fr;
  row-gap: 0.4rem;
}

.my-modal-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  gap: 1rem;
}

.colspan-all {
  grid-column: 1 / -1;
}
</style>
