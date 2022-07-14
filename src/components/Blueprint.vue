<script setup>
import Styles from '../styles';
import Port from './Port.vue';
import Operator from './Operator.vue';
import { computed } from '@vue/reactivity';
import Blueprints from '../blueprints';

const props = defineProps(["id"])
const blueprint = Blueprints.find(bd => bd.id === props.id)

const size = blueprint.geometry && blueprint.geometry.size ? blueprint.geometry.size: {width: 400, height: 400}
const position = {
  x: -size.width/2,
  y: -size.height/2,
}


const attrTransform = computed(() => {
  return `translate(${position.x} ${position.y})`
})

</script>

<template>
<g
class="blueprint"
:transform="attrTransform"
>

<rect
class="blueprint__body"
rx="9px" ry="9px"
:width="size.width"
:height="size.height"
></rect>

<Operator :def="operatorDef" v-for="(operatorDef, operatorName, i) in blueprint.operators"/>

<g
transform="translate(0 -8)"
class="blueprint__port-input"
>
  <Port
  :def="blueprint.services.main.in"
  transform="translate(10 0)"
  />
</g>

<g
:transform="`translate(0 ${size.height-Styles.Port.h})`"
class="blueprint__port-output"
>
  <Port
  :def="blueprint.services.main.out"
  transform="translate(10 0)"
  />
</g>

</g>
</template>

<style scoped>
.blueprint__body {
  stroke: black;
  stroke-width: 1px;
  fill: white;
}
</style>
