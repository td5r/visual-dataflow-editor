<script setup>
import Port from './Port.vue';

defineProps(["def"])
</script>

<template>
<svg:g
transform="translate(200 200)"
class="blueprint"
>

<svg:rect
class="blueprint__body"
rx="9px" ry="9px"
></svg:rect>

<svg:g
transform="translate(0 182)"
>
  <Port
  :def="def.services.main.in"
  transform="translate(90 0)"
  class="blueprint__port-input"
  />
</svg:g>

<svg:g
transform="translate(0 -18)"
>
  <Port
  :def="def.services.main.out"
  transform="translate(90 0)"
  class="blueprint__port-output"
  />
</svg:g>

</svg:g>
</template>

<style scoped>
.blueprint__body {
  width: 200px;
  height: 200px;
  stroke: black;
  stroke-width: 1px;
  fill: white;
}
</style>
