<script setup>
import { provide, ref } from 'vue';
import Blueprint from '../components/Blueprint.vue';

const mouseAction = {
  dragging: ref(false),
  start: {
    x: 0,
    y: 0
  },
  prev: {
    x: 0,
    y: 0,
  },
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

  console.log("Start Dragging");
}
function whileMouseMoves(event) {
  event.preventDefault();

  if (!mouseAction.dragging.value) {
    return
  }

  const prev = mouseAction.prev
  const curr = {
    x: event.clientX,
    y: event.clientY,
  }
  mouseAction.delta.value = {x: prev.x-curr.x, y: prev.y-curr.y}
  mouseAction.prev = curr
  console.log("-->", mouseAction)
}
function stopMouseAction(event) {
  event.preventDefault();
  mouseAction.dragging.value = false;

  console.log("Stop Dragging");
}

</script>

<template>
  <main oncontextmenu="return false;" >
    <svg 
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