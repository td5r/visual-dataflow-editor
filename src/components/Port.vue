<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  def: {
    type: Object,
    required: true
  },
  verticalOffset: {
    type: Number,
    default: 2 
  },
})

const emit = defineEmits(["updatePorts"])
const nPorts = ref(0)

const isMap = computed(() => props.def.type == "map")
const isStream = computed(() => props.def.type == "stream")

const portSize = 10
// ------------------------lt--------rt-----------m-----------
const portPolygonPoints = `0,0 ${portSize},0 ${portSize/2},${portSize-2}`
/*      lt---rt
         \   /
          \ /
           m
 */

if (!(props.def.type == "map" || props.def.type == "stream")) {
  emit("updatePorts", (1))
}

</script>

<template>
<g v-if="isMap"
:transform="`translate(${portSize*(verticalOffset)+2} 0)`"
class="port--map"
>
<Port v-for="(subType, portName, i) in def.map"
:transform="`translate(${i*(portSize+1)} 0)`"
:def="subType"
:vertical-offset="verticalOffset"
@update-ports="(n) => nPorts+=n"
></Port>
<rect :width="nPorts*portSize" height="1px" transform="translate(0 0)"></rect>
</g>

<g v-else-if="isStream"
class="port--stream"
>
<Port :def="def.stream"
:vertical-offset="verticalOffset"
@update-ports="(n) => nPorts+=n"
></Port>
</g>

<polygon v-else
class="port"
:class="def.type"
:points="portPolygonPoints"
@update-ports="(n) => nPorts+=n"
/>
</template>

<style scoped>
.port {
  fill: #001247;
}
.port.string {
  fill: #3A0CA3;
}
.port.boolean {
  fill: #7209B7;
}
.port.number,.port.primitive {
  fill: #4CC9F0;
}
.port.binary {
  fill: #F72585;
}
.port.trigger {
  fill: #4361EE;
}

.port__container--map {
  stroke: #001247;
  stroke-width: 1px;
  fill: transparent;
}

.port__container--stream {
  fill: #001247;
}
</style>