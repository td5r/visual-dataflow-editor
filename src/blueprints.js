export default [
    {
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
        "geometry": {
        "size": {
            "width": 560,
            "height": 400
        }
        },
        "operators": {
            "HTTPclient": {
                "operator": "f7f5907d-758b-4892-8a3e-ae86b877b869",
                "geometry": {
                "position": {
                    "x": 0,
                    "y": 0
                }
                },
            },
            "Value2": {
                "operator": "8b62495a-e482-4a3e-8020-0ab8a350ad2d",
                "geometry": {
                "position": {
                    "x": -300,
                    "y": -200
                }
                },
                "properties": {
                "value": [
                    {
                    "key": "Content-Type",
                    "values": [
                        "$contentType"
                    ]
                    }
                ]
                },
            }
        }
    },
  {
    "id": "f7f5907d-758b-4892-8a3e-ae86b877b869",
    "services": {
      "main": {
        "in": {
          "type": "map",
          "map": {
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
              }
            }
          }
        },
        "out": {
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
    },
  },
  {
    "id": "8b62495a-e482-4a3e-8020-0ab8a350ad2d",
    "services": {
      "main": {
        "in": {
          "type": "map",
          "map": {
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
              }
            }
          }
        },
        "out": {
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
    },
  }
]