<script setup>
import Blueprint from '../components/Blueprint.vue';

const blueprintDef = {
  "id": "d46cda63-1c91-409b-a0ae-e0e4cdc61511",
  "services": {
    "main": {
      "in": {
        "type": "map",
        "map": {
          "a": {
            "type": "primitive"
          },
          "b": {
            "type": "stream",
            "stream": {
              "type": "binary"
            }
          },
          "c": {
            "type": "map",
            "map": {
              "a": {
                "type": "string"
              },
              "b": {
                "type": "boolean"
              },
              "c": {
                "type": "map",
                "map": {
                  "a": {
                    "type": "number"
                  },
                  "b": {
                    "type": "binary"
                  },
                  "c": {
                    "type": "string"
                  },
                  "d": {
                    "type": "boolean"
                  }
                }
              }
            }
          }
        }
      },
      "out": {
        "type": "map",
        "map": {
          "a": {
            "type": "binary"
          },
          "b": {
            "type": "map",
            "map": {
              "a": {
                "type": "primitive"
              },
              "b": {
                "type": "number"
              },
              "c": {
                "type": "boolean"
              }
            }
          },
          "c": {
            "type": "stream",
            "stream": {
              "type": "map",
              "map": {
                "a": {
                  "type": "primitive"
                },
                "b": {
                  "type": "number"
                },
                "c": {
                  "type": "boolean"
                }
              }
            }
          }
        }
      }
    }
  },
}

</script>

<template>
  <main>
    <svg class="editor-whiteboard">
      <Blueprint :def="blueprintDef"></Blueprint>
    </svg>
  </main>
</template>

<style>
.editor-whiteboard {
  width: 100vw;
  height: 100vh;

  background-color: rgb(237, 232, 247);
}

</style>