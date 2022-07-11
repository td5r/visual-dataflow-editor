<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
<svg:polygon
class="port"
points="0,0 20,0 10,18"/>
</template>

<style scoped>
.port {
  fill: purple;
}
</style>
