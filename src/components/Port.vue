<script setup>
import { computed, toRefs } from 'vue';

const props = defineProps(["def"])

const isMap = computed(() => props.def.type == "map")
const isStream = computed(() => props.def.type == "stream")

const portSize = 10
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
<Port v-for="(subType, portName, i) in def.map"
:transform="`translate(${i*(portSize+2)} 0)`"
:def="subType"
></Port>
</g>

<g v-else-if="isStream"
class="port--stream"
>
<Port :def="def.stream"
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

</style>
