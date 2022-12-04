<template>
  <div class="inventory shadow">
    <list-component
      :items="items"
      title="Inventory"
      @delete-all="items = []"
      @load-url="loadUrl"
      @load-local="loadLocal"
      @edit-item="onEditItem"
      @delete-single="onDeleteItem"
    />
    <edit-modal
      v-if="editModalVisible"
      @close="editModalVisible = false"
      @save="onSaveItem"
      :item="editModalItem"
    />
  </div>
</template>

<script>
import ListComponent from "@/components/ListComponent.vue";
import EditModal from "@/components/EditModal.vue";
import { mockItems } from "@/item.js";

export default {
  name: "InventoryView",
  components: {
    ListComponent,
    EditModal,
  },
  data() {
    return {
      items: structuredClone(mockItems),
      editModalVisible: false,
      editModalItem: null,
    };
  },
  methods: {
    loadUrl() {
      const url = prompt(
        "Enter URL to load",
        "https://mocki.io/v1/c545bd64-bfe8-48fd-89f6-6e53bbb594b3",
      );
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.items = data;
        })
        .catch((err) => {
          alert(`Error loading data from ${url}: ` + err);
        });
    },
    loadLocal() {
      this.items = structuredClone(mockItems);
    },
    onEditItem(editItem) {
      this.editModalVisible = true;
      this.editModalItem = editItem;
    },
    onSaveItem(item) {
      const id = item.id;
      const index = this.items.findIndex((item) => item.id === id);
      if (index === -1) {
        this.items.push(item);
      } else {
        this.items.splice(index, 1, item);
      }
      this.editModalVisible = false;
    },
    onDeleteItem(id) {
      const index = this.items.findIndex((item) => item.id === id);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    },
  },
};
</script>
