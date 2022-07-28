<script setup>
import { provide, ref } from 'vue';
import Blueprint from '../components/Blueprint.vue';


const mouseAction = {
  dragging: ref(false),
  delta: ref({x:0, y:0})
}
provide("dragging", mouseAction.dragging)
provide("mouseDelta", mouseAction.delta)
function startDragging(event) {
  event.preventDefault();
  mouseAction.dragging.value = true;
  mouseAction.prev = mouseAction.start = {
    x: event.clientX,
    y: event.clientY,
  }
}
function whileMouseMoves(event) {
  event.preventDefault();

  if (!mouseAction.dragging.value) {
    return
  }

  const svg = document.getElementById("svgcanvas")

  mouseAction.delta.value = transformMouseMovementToSVG(svg, event)
}

function stopMouseAction(event) {
  event.preventDefault();
  mouseAction.dragging.value = false;
}

function transformMouseMovementToSVG(svg, event) {
  // Source: https://stackoverflow.com/a/59963464/19383215
  const {clientX, clientY, movementX, movementY} = event
  const DOM_pt = svg.createSVGPoint()
  DOM_pt.x = clientX
  DOM_pt.y = clientY

  const {x, y} = DOM_pt.matrixTransform(svg.getScreenCTM().inverse())

  DOM_pt.x += movementX
  DOM_pt.y += movementY

  const {x: last_x, y: last_y } = DOM_pt.matrixTransform(svg.getScreenCTM().inverse())

  return {x: last_x - x, y: last_y - y}
}

</script>

<template>
  <main oncontextmenu="return false;" >
    <svg 
    id="svgcanvas"
    @mousedown.left="startDragging"
    @mousemove="whileMouseMoves"
    @mouseup="stopMouseAction"
    class="editor-whiteboard"
    viewBox="-500 -500 1000 1000">
      <Blueprint id="d46cda63-1c91-409b-a0ae-e0e4cdc61511"/>
    </svg>
  </main>
</template>

<style>
.editor-whiteboard {
  width: 100vw;
  height: 100vh;

  background-color: #0A395E;
}

</style>