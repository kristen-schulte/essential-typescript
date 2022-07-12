<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { HttpHandler } from "./data/httpHandler";
import { useStore } from "vuex";

export default defineComponent({
  name: "App",
  setup() {
    const store = useStore();
    const handler = new HttpHandler();
    onMounted(() => store.dispatch("loadProducts", handler.loadProducts));
  },
});
</script>
