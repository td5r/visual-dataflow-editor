<script setup>
import Styles from '../styles';
import Port from './Port.vue';
import Operator from './Operator.vue';
import { computed } from '@vue/reactivity';
import Blueprints from '../blueprints';
import { inject, ref } from 'vue';
import { def } from '@vue/shared';

const props = defineProps(["id"])
const blueprint = Blueprints.find(bd => bd.id === props.id)
const operators = ref(Object.entries(blueprint.operators).map(([opName, op]) => {
  return {
    name: opName,
    def: op,
    pos: op.geometry&&op.geometry.position ? op.geometry.position : {x:0, y:0}
  }
}))


let selectedOperator = ref(operators.value[0])

console.log(selectedOperator.value)

const size = blueprint.geometry && blueprint.geometry.size ? blueprint.geometry.size: {width: 400, height: 400}
const position = {
  x: -size.width/2,
  y: -size.height/2,
}

const attrTransform = computed(() => {
  return `translate(${position.x} ${position.y})`
})

const dragging = inject("dragging", false)
const mouseDelta = inject("mouseDelta", {x: 0, y: 0})
function whileMouseMoves(event) {
  if (!dragging.value) {
    return;
  }

  event.preventDefault();

  const pos = selectedOperator.value.pos
  selectedOperator.value.pos = {
    x: pos.x + mouseDelta.value.x,
    y: pos.y + mouseDelta.value.y
  }
}

</script>

<template>
<g
@mousemove="whileMouseMoves"
class="blueprint"
:transform="attrTransform"
>

<rect
class="blueprint__body"
:rx="Styles.Operator.r" :ry="Styles.Operator.r"
:width="size.width"
:height="size.height"
></rect>

<Operator
 :def="def"
 :x="pos.x"
 :y="pos.y"
 v-for="({name, def, pos}, i) in operators"/>

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
  stroke: #FFFEFE;
  stroke-width: 1px;
  fill: transparent;
}
</style>
