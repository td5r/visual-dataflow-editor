<script setup>
import { computed, toRefs } from 'vue';

const props = defineProps({
  def: {
    type: Object,
    required: true
  },
  nestedLevel: {
    type: Number,
    default: 0 
  }
})

const isMap = computed(() => props.def.type == "map")
const isStream = computed(() => props.def.type == "stream")
const mapPortCount = computed(() => props.def.type == "map"?Object.keys(props.def.map).length:1)
console.log("nestedLevel", props.nestedLevel)

const portSize = 10
const portHeight = portSize-2;
// ---------------lt--------rt-----------m-----------
const portPolygonPoints = `0,0 ${portSize},0 ${portSize/2},${portSize-2}`
/*      lt---rt
         \   /
          \ /
           m
 */
</script>

<template>
<g v-if="isMap"
class="port--map"
>
<!--
<rect class="port__container--map"
transform="translate(-1 -1)"
rx="2" ry="2"
:width="(portSize+2)*mapPortCount"
:height="portSize-1"
/>-->
<rect v-if="nestedLevel>0" width="1px" height="1px" transform="translate(0 4)"></rect>
<Port v-for="(subType, portName, i) in def.map"
:transform="`translate(${i*(portSize+2)+nestedLevel*3} 0)`"
:def="subType"
:nested-level="nestedLevel+1"
></Port>
</g>

<g v-else-if="isStream"
class="port--stream"
>
<Port :def="def.stream"
:nested-level="nestedLevel"
></Port>
</g>

<polygon v-else
class="port"
:class="def.type"
:points="portPolygonPoints"/>
</template>

<style scoped>
.port {
  fill: black;
}
.port.string {
  fill: crimson;
}
.port.boolean {
  fill: purple;
}
.port.number,.port.primitive {
  fill: aqua;
}
.port.binary {
  fill: magenta;
}
.port.trigger {
  fill: slategrey;
}

.port__container--map {
  stroke: black;
  stroke-width: 1px;
  fill: transparent;
}
</style>
