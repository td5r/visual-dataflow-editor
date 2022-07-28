<script setup>
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
    default: 0,
  },
  y: {
    type: Number,
    default: 0,
  },
  w: {
    type: Number,
    default: Styles.Operator.w,
  },
  h: {
    type: Number,
    default: Styles.Operator.h,
  },
})

const size = {
  w: props.w,
  h: props.h,
}

const blueprintDef = Blueprints.find(bd => bd.id === props.def.operator)

</script>

<template>
<g
:transform="`translate(${x} ${y})`"
class="operator"
>

<rect
class="operator__body"
:rx="Styles.Operator.r" :ry="Styles.Operator.r"
:width="size.w"
:height="size.h"
></rect>

<g
:transform="`translate(0 ${-Styles.Port.h})`"
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
  stroke: #FFFEFE;
  stroke-width: 1px;
  fill: #FFFEFE;
}
</style>
