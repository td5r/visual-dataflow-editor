<script setup>
import Port from './Port.vue';
defineProps(["def"])
</script>

<template>
<g
transform="translate(200 200)"
class="blueprint"
>

<rect
class="blueprint__body"
rx="9px" ry="9px"
></rect>

<g
transform="translate(0 -8)"
class="blueprint__port-input"
>
  <Port
  :def="def.services.main.in"
  transform="translate(10 0)"
  />
</g>

<g
transform="translate(0 192)"
class="blueprint__port-output"
>
  <Port
  :def="def.services.main.out"
  transform="translate(10 0)"
  />
</g>

</g>
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
