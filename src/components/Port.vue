<script setup>
import { computed } from 'vue';

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

const portSize = 10
// ------------------------lt--------rt-----------m-----------
const portPolygonPoints = `0,0 ${portSize},0 ${portSize/2},${portSize-2}`
/*      lt---rt
         \   /
          \ /
           m
 */

</script>

<template>
<g v-if="isMap"
:transform="`translate(${portSize*(verticalOffset)+2} 0)`"
class="port--map"
>
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
:vertical-offset="verticalOffset"
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