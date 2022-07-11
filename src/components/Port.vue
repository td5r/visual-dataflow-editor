<script setup>
defineProps(["def"])

const isMap = computed(() => this.def.type == "map")
const isStream = computed(() => this.def.type == "stream")

</script>

<template>
<svg:polygon
class="port"
:class="def.type"
points="0,0 20,0 10,18"/>

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
