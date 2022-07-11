<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
<rect x="200px" y="200px" rx="4px" ry="4px" class="blueprint"></rect>
</template>

<style scoped>
.blueprint {
  width: 200px;
  height: 200px;
  stroke: black;
  stroke-width: 2px;
  fill: white;
}
</style>
