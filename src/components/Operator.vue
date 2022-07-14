<script setup>
import { def } from '@vue/shared';
import Styles from '../styles';
import Port from './Port.vue';
import Blueprints from '../blueprints';

const props = defineProps({
  def: {
    type: Object,
    required: true
  },
  x: {
    type: Number,
    default: 10,
  },
  y: {
    type: Number,
    default: 10,
  },
  w: {
    type: Number,
    default: 100,
  },
  h: {
    type: Number,
    default: 80,
  },
})

const size = {
  w: Styles.Operator.w,
  h: Styles.Operator.h,
}

const pos = props.def.geometry && props.def.geometry.position ? props.def.geometry.position: {x: 100, y: 100}
const blueprintDef = Blueprints.find(bd => bd.id === props.def.operator)

</script>

<template>
<g
:transform="`translate(${pos.x} ${pos.y})`"
class="operator"
>

<rect
class="operator__body"
rx="9px" ry="9px"
:width="size.w"
:height="size.h"
></rect>

<g
transform="translate(0 -8)"
class="operator__port-input"
>
  <Port
  :def="blueprintDef.services.main.in"
  transform="translate(10 0)"
  />
</g>

<g
:transform="`translate(0 ${size.h-Styles.Port.h})`"
class="operator__port-output"
>
  <Port
  :def="blueprintDef.services.main.out"
  transform="translate(10 0)"
  />
</g>

</g>
</template>

<style scoped>
.operator__body {
  stroke: black;
  stroke-width: 1px;
  fill: white;
}
</style>
