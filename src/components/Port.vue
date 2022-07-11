<script setup>
import { computed, toRefs } from 'vue';

const props = defineProps({
  def: {
    type: Object,
    required: true
  },
  verticalOffset: {
    type: Number,
    default: 2 
  },
  nestedLevel: {
    type: Number,
    default: 0 
  }
})

const isMap = computed(() => props.def.type == "map")
const isStream = computed(() => props.def.type == "stream")
const mapPortCount = computed(() => getSubportCount())

const portSize = 10
const portHeight = portSize-2;
// ------------------------lt--------rt-----------m-----------
const portPolygonPoints = `0,0 ${portSize},0 ${portSize/2},${portSize-2}`
/*      lt---rt
         \   /
          \ /
           m
 */

const getSubportCount = (mapPort) => {
  const portType = !mapPort?props.def:mapPort
  return portType.type === "map"?Object.keys(props.def.map).length:1
}
</script>

<template>
<g v-if="isMap"
:transform="`translate(${portSize*(verticalOffset)+2} 0)`"
class="port--map"
>
<!--
<rect class="port__container--map"
transform="translate(-1 -1)"
rx="2" ry="2"
:width="(portSize+2)*mapPortCount"
:height="portSize-1"
/>-->
<rect v-if="nestedLevel>0" width="3px" height="3px" transform="translate(-2 5)"></rect>
<Port v-for="(subType, portName, i) in def.map"
:transform="`translate(${i*(portSize+1)} 0)`"
:def="subType"
:vertical-offset="verticalOffset"
:nested-level="1"
></Port>
</g>

<g v-else-if="isStream"
class="port--stream"
>
<Port :def="def.stream"
:nested-level="1"
:vertical-offset="verticalOffset"
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
  fill: orangered;
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
