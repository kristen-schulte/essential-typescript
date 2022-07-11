<template>
  <div class="p-1 bg-secondary text-white text-right">
    {{ displayText }}
    <button class="btn btn-sm btn-primary m-1">Submit Order</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Order } from "@/data/entities";

export default defineComponent({
  name: "Header",
  props: {
    order: {
      type: Object as PropType<Order>,
      required: true,
    },
  },
  computed: {
    displayText(): string {
      const count = this.order.productCount;
      return count === 0
        ? "(No Selection)"
        : `${count} product(s), $${this.order.total.toFixed(2)}`;
    },
  },
});
</script>
