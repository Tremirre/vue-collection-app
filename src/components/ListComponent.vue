<template>
  <div class="container card p-4">
    <header class="d-flex justify-content-between">
      <h2 class="text-start fs-3 me-4">{{ title }}</h2>
      <span class="d-flex g-1">
        <input
          type="text"
          class="rounded"
          v-model="filterString"
          placeholder="Global Filter"
        />
        <span class="btn-group">
          <button
            class="btn btn-outline-primary"
            @click="$emit('edit-item', createEmptyEntry())"
          >
            Add New
          </button>
          <button class="btn btn-outline-primary" @click="$emit('load-url')">
            Load from URL
          </button>
          <button class="btn btn-outline-primary" @click="$emit('load-local')">
            Load locally
          </button>
        </span>
        <button class="btn btn-outline-danger" @click="$emit('delete-all')">
          Delete All
        </button>
      </span>
    </header>
    <div class="border rounded pt-3 mt-3">
      <table v-if="items.length" class="table table-striped table-hover mb-0">
        <thead>
          <tr>
            <th>Controls</th>
            <th v-for="field in fields" :key="field" scope="row">
              {{ translateHeader(field) }}
              <i
                class="bi bi-arrow-down-circle-fill icon-hover"
                @click="onHeaderIconClicked(field, $event)"
              ></i>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in filteredItems" :key="item.id">
            <td class="column">
              <div class="d-flex justify-content-center align-items-center">
                <i
                  class="bi bi-pencil-square icon-hover icon-lg"
                  @click="$emit('edit-item', item)"
                ></i>
                <i
                  class="bi bi-x-octagon icon-hover icon-lg"
                  @click="$emit('delete-single', item.id)"
                ></i>
              </div>
            </td>
            <td class="column" v-for="field in fields" :key="field">
              <div v-if="field != 'picture'" class="text-truncate">
                {{ item[field] !== null ? item[field] : "-" }}
              </div>
              <img
                v-else
                :src="getImage(item[field])"
                :alt="item[field]"
                class="img-thumbnail img-fs"
              />
            </td>
          </tr>
        </tbody>
        <tfoot class="table-foot">
          <td :colspan="fields.length - 1">&nbsp;</td>
          <td>{{ filteredItems.length }} entries in total</td>
        </tfoot>
      </table>
      <div v-else class="text-center">
        <p class="text-muted">No items to display</p>
      </div>
    </div>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: "ListComponent",
  props: {
    title: String,
    items: {
      type: Array,
      required: true,
    },
  },
  emits: ["edit-item", "delete-single", "delete-all", "load-url", "load-local"],
  data() {
    return {
      interactiveItems: [],
      filterString: "",
    };
  },
  watch: {
    items: {
      handler: function (newItems) {
        this.interactiveItems = newItems;
      },
      immediate: true,
    },
  },
  computed: {
    fields() {
      return this.items.length ? Object.keys(this.items[0]) : [];
    },
    filteredItems() {
      if (this.filterString === "") {
        return this.interactiveItems;
      }
      return this.interactiveItems.filter((item) => {
        return Object.values(item).some((value) => {
          return value.toString().includes(this.filterString);
        });
      });
    },
    lastTakenId() {
      return this.interactiveItems.reduce((acc, item) => {
        return item.id > acc ? item.id : acc;
      }, 0);
    },
  },
  methods: {
    translateHeader(header) {
      if (header.length < 3) {
        return header.toUpperCase();
      }
      const headerTokens = header.split("_");
      const titelizedTokens = [];
      for (const token of headerTokens) {
        titelizedTokens.push(token.charAt(0).toUpperCase() + token.slice(1));
      }
      return titelizedTokens.join(" ");
    },
    onHeaderIconClicked(field, event) {
      const icon = event.target;
      const isAscending = icon.classList.contains("bi-arrow-up-circle-fill");
      const sortedItems = this.interactiveItems.sort((a, b) => {
        if (a[field] < b[field]) {
          return isAscending ? -1 : 1;
        }
        if (a[field] > b[field]) {
          return isAscending ? 1 : -1;
        }
        return 0;
      });
      this.interactiveItems = structuredClone(sortedItems);
      icon.classList.toggle("bi-arrow-down-circle-fill");
      icon.classList.toggle("bi-arrow-up-circle-fill");
    },
    getImage(name) {
      if (!name || name.match(/[1-4].jpg/) === null) name = "other.jpg";
      return require(`@/assets/images/${name}`);
    },
    createEmptyEntry() {
      if (this.fields.length === 0) return {};
      const freeId = this.lastTakenId + 1;
      const emptyEntry = {};
      for (const field of this.fields) {
        emptyEntry[field] = null;
      }
      emptyEntry.id = freeId;
      return emptyEntry;
    },
  },
};
</script>

<style class="scss" scoped>
tbody {
  display: block;
  max-height: 400px;
  overflow: auto;
}
thead,
tfoot,
tbody tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}
thead {
  width: calc(100% - 1em);
}

.table-foot {
  border-top: 2px solid black;
}

.g-1 {
  gap: 1rem;
}

.img-fs {
  width: 50px;
  height: 50px;
}

.icon-hover {
  cursor: pointer;
}

.icon-lg {
  font-size: 1.5rem;
  margin: 0 0.5rem;
}
</style>
