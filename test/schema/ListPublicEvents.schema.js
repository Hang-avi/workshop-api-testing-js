const listPublicEventsSchema = {
  $schema: 'http://json-schema.org/draft-04/schema#',
  type: 'array',
  properties: {
    id: {
      type: 'string'
    },
    $schema: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    definitions: {
      type: 'object',
      properties: {
        schemaArray: {
          type: 'object',
          properties: {
            type: {
              type: 'string'
            },
            minItems: {
              type: 'integer'
            },
            items: {
              type: 'object',
              properties: {
                $ref: {
                  type: 'string'
                }
              },
              required: [
                '$ref'
              ]
            }
          },
          required: [
            'type',
            'minItems',
            'items'
          ]
        },
        positiveInteger: {
          type: 'object',
          properties: {
            type: {
              type: 'string'
            },
            minimum: {
              type: 'integer'
            }
          },
          required: [
            'type',
            'minimum'
          ]
        },
        positiveIntegerDefault0: {
          type: 'object',
          properties: {
            allOf: {
              type: 'array',
              items: [
                {
                  type: 'object',
                  properties: {
                    $ref: {
                      type: 'string'
                    }
                  },
                  required: [
                    '$ref'
                  ]
                },
                {
                  type: 'object',
                  properties: {
                    default: {
                      type: 'integer'
                    }
                  },
                  required: [
                    'default'
                  ]
                }
              ]
            }
          },
          required: [
            'allOf'
          ]
        },
        simpleTypes: {
          type: 'object',
          properties: {
            enum: {
              type: 'array',
              items: [
                {
                  type: 'string'
                },
                {
                  type: 'string'
                },
                {
                  type: 'string'
                },
                {
                  type: 'string'
                },
                {
                  type: 'string'
                },
                {
                  type: 'string'
                },
                {
                  type: 'string'
                }
              ]
            }
          },
          required: [
            'enum'
          ]
        },
        stringArray: {
          type: 'object',
          properties: {
            type: {
              type: 'string'
            },
            items: {
              type: 'object',
              properties: {
                type: {
                  type: 'string'
                }
              },
              required: [
                'type'
              ]
            },
            minItems: {
              type: 'integer'
            },
            uniqueItems: {
              type: 'boolean'
            }
          },
          required: [
            'type',
            'items',
            'minItems',
            'uniqueItems'
          ]
        }
      },
      required: [
        'schemaArray',
        'positiveInteger',
        'positiveIntegerDefault0',
        'simpleTypes',
        'stringArray'
      ]
    },
    type: {
      type: 'string'
    },
    properties: {
      type: 'object',
      properties: {
        id: {
          type: 'object',
          properties: {
            type: {
              type: 'string'
            }
          },
          required: [
            'type'
          ]
        },
        $schema: {
          type: 'object',
          properties: {
            type: {
              type: 'string'
            }
          },
          required: [
            'type'
          ]
        },
        title: {
          type: 'object',
          properties: {
            type: {
              type: 'string'
            }
          },
          required: [
            'type'
          ]
        },
        description: {
          type: 'object',
          properties: {
            type: {
              type: 'string'
            }
          },
          required: [
            'type'
          ]
        },
        default: {
          type: 'object'
        },
        multipleOf: {
          type: 'object',
          properties: {
            type: {
              type: 'string'
            },
            minimum: {
              type: 'integer'
            },
            exclusiveMinimum: {
              type: 'boolean'
            }
          },
          required: [
            'type',
            'minimum',
            'exclusiveMinimum'
          ]
        },
        maximum: {
          type: 'object',
          properties: {
            type: {
              type: 'string'
            }
          },
          required: [
            'type'
          ]
        },
        exclusiveMaximum: {
          type: 'object',
          properties: {
            type: {
              type: 'string'
            },
            default: {
              type: 'boolean'
            }
          },
          required: [
            'type',
            'default'
          ]
        },
        minimum: {
          type: 'object',
          properties: {
            type: {
              type: 'string'
            }
          },
          required: [
            'type'
          ]
        },
        exclusiveMinimum: {
          type: 'object',
          properties: {
            type: {
              type: 'string'
            },
            default: {
              type: 'boolean'
            }
          },
          required: [
            'type',
            'default'
          ]
        },
        maxLength: {
          type: 'object',
          properties: {
            $ref: {
              type: 'string'
            }
          },
          required: [
            '$ref'
          ]
        },
        minLength: {
          type: 'object',
          properties: {
            $ref: {
              type: 'string'
            }
          },
          required: [
            '$ref'
          ]
        },
        pattern: {
          type: 'object',
          properties: {
            type: {
              type: 'string'
            },
            format: {
              type: 'string'
            }
          },
          required: [
            'type',
            'format'
          ]
        },
        additionalItems: {
          type: 'object',
          properties: {
            anyOf: {
              type: 'array',
              items: [
                {
                  type: 'object',
                  properties: {
                    type: {
                      type: 'string'
                    }
                  },
                  required: [
                    'type'
                  ]
                },
                {
                  type: 'object',
                  properties: {
                    $ref: {
                      type: 'string'
                    }
                  },
                  required: [
                    '$ref'
                  ]
                }
              ]
            },
            default: {
              type: 'object'
            }
          },
          required: [
            'anyOf',
            'default'
          ]
        },
        items: {
          type: 'object',
          properties: {
            anyOf: {
              type: 'array',
              items: [
                {
                  type: 'object',
                  properties: {
                    $ref: {
                      type: 'string'
                    }
                  },
                  required: [
                    '$ref'
                  ]
                },
                {
                  type: 'object',
                  properties: {
                    $ref: {
                      type: 'string'
                    }
                  },
                  required: [
                    '$ref'
                  ]
                }
              ]
            },
            default: {
              type: 'object'
            }
          },
          required: [
            'anyOf',
            'default'
          ]
        },
        maxItems: {
          type: 'object',
          properties: {
            $ref: {
              type: 'string'
            }
          },
          required: [
            '$ref'
          ]
        },
        minItems: {
          type: 'object',
          properties: {
            $ref: {
              type: 'string'
            }
          },
          required: [
            '$ref'
          ]
        },
        uniqueItems: {
          type: 'object',
          properties: {
            type: {
              type: 'string'
            },
            default: {
              type: 'boolean'
            }
          },
          required: [
            'type',
            'default'
          ]
        },
        maxProperties: {
          type: 'object',
          properties: {
            $ref: {
              type: 'string'
            }
          },
          required: [
            '$ref'
          ]
        },
        minProperties: {
          type: 'object',
          properties: {
            $ref: {
              type: 'string'
            }
          },
          required: [
            '$ref'
          ]
        },
        required: {
          type: 'object',
          properties: {
            $ref: {
              type: 'string'
            }
          },
          required: [
            '$ref'
          ]
        },
        additionalProperties: {
          type: 'object',
          properties: {
            anyOf: {
              type: 'array',
              items: [
                {
                  type: 'object',
                  properties: {
                    type: {
                      type: 'string'
                    }
                  },
                  required: [
                    'type'
                  ]
                },
                {
                  type: 'object',
                  properties: {
                    $ref: {
                      type: 'string'
                    }
                  },
                  required: [
                    '$ref'
                  ]
                }
              ]
            },
            default: {
              type: 'object'
            }
          },
          required: [
            'anyOf',
            'default'
          ]
        },
        definitions: {
          type: 'object',
          properties: {
            type: {
              type: 'string'
            },
            additionalProperties: {
              type: 'object',
              properties: {
                $ref: {
                  type: 'string'
                }
              },
              required: [
                '$ref'
              ]
            },
            default: {
              type: 'object'
            }
          },
          required: [
            'type',
            'additionalProperties',
            'default'
          ]
        },
        properties: {
          type: 'object',
          properties: {
            type: {
              type: 'string'
            },
            additionalProperties: {
              type: 'object',
              properties: {
                $ref: {
                  type: 'string'
                }
              },
              required: [
                '$ref'
              ]
            },
            default: {
              type: 'object'
            }
          },
          required: [
            'type',
            'additionalProperties',
            'default'
          ]
        },
        patternProperties: {
          type: 'object',
          properties: {
            type: {
              type: 'string'
            },
            additionalProperties: {
              type: 'object',
              properties: {
                $ref: {
                  type: 'string'
                }
              },
              required: [
                '$ref'
              ]
            },
            default: {
              type: 'object'
            }
          },
          required: [
            'type',
            'additionalProperties',
            'default'
          ]
        },
        dependencies: {
          type: 'object',
          properties: {
            type: {
              type: 'string'
            },
            additionalProperties: {
              type: 'object',
              properties: {
                anyOf: {
                  type: 'array',
                  items: [
                    {
                      type: 'object',
                      properties: {
                        $ref: {
                          type: 'string'
                        }
                      },
                      required: [
                        '$ref'
                      ]
                    },
                    {
                      type: 'object',
                      properties: {
                        $ref: {
                          type: 'string'
                        }
                      },
                      required: [
                        '$ref'
                      ]
                    }
                  ]
                }
              },
              required: [
                'anyOf'
              ]
            }
          },
          required: [
            'type',
            'additionalProperties'
          ]
        },
        enum: {
          type: 'object',
          properties: {
            type: {
              type: 'string'
            },
            minItems: {
              type: 'integer'
            },
            uniqueItems: {
              type: 'boolean'
            }
          },
          required: [
            'type',
            'minItems',
            'uniqueItems'
          ]
        },
        type: {
          type: 'object',
          properties: {
            anyOf: {
              type: 'array',
              items: [
                {
                  type: 'object',
                  properties: {
                    $ref: {
                      type: 'string'
                    }
                  },
                  required: [
                    '$ref'
                  ]
                },
                {
                  type: 'object',
                  properties: {
                    type: {
                      type: 'string'
                    },
                    items: {
                      type: 'object',
                      properties: {
                        $ref: {
                          type: 'string'
                        }
                      },
                      required: [
                        '$ref'
                      ]
                    },
                    minItems: {
                      type: 'integer'
                    },
                    uniqueItems: {
                      type: 'boolean'
                    }
                  },
                  required: [
                    'type',
                    'items',
                    'minItems',
                    'uniqueItems'
                  ]
                }
              ]
            }
          },
          required: [
            'anyOf'
          ]
        },
        format: {
          type: 'object',
          properties: {
            type: {
              type: 'string'
            }
          },
          required: [
            'type'
          ]
        },
        allOf: {
          type: 'object',
          properties: {
            $ref: {
              type: 'string'
            }
          },
          required: [
            '$ref'
          ]
        },
        anyOf: {
          type: 'object',
          properties: {
            $ref: {
              type: 'string'
            }
          },
          required: [
            '$ref'
          ]
        },
        oneOf: {
          type: 'object',
          properties: {
            $ref: {
              type: 'string'
            }
          },
          required: [
            '$ref'
          ]
        },
        not: {
          type: 'object',
          properties: {
            $ref: {
              type: 'string'
            }
          },
          required: [
            '$ref'
          ]
        }
      },
      required: [
        'id',
        '$schema',
        'title',
        'description',
        'default',
        'multipleOf',
        'maximum',
        'exclusiveMaximum',
        'minimum',
        'exclusiveMinimum',
        'maxLength',
        'minLength',
        'pattern',
        'additionalItems',
        'items',
        'maxItems',
        'minItems',
        'uniqueItems',
        'maxProperties',
        'minProperties',
        'required',
        'additionalProperties',
        'definitions',
        'properties',
        'patternProperties',
        'dependencies',
        'enum',
        'type',
        'format',
        'allOf',
        'anyOf',
        'oneOf',
        'not'
      ]
    },
    dependencies: {
      type: 'object',
      properties: {
        exclusiveMaximum: {
          type: 'array',
          items: [
            {
              type: 'string'
            }
          ]
        },
        exclusiveMinimum: {
          type: 'array',
          items: [
            {
              type: 'string'
            }
          ]
        }
      },
      required: [
        'exclusiveMaximum',
        'exclusiveMinimum'
      ]
    },
    default: {
      type: 'object'
    }
  },
  required: [
    'id',
    '$schema',
    'description',
    'definitions',
    'type',
    'properties',
    'dependencies',
    'default'
  ]
};

exports.listPublicEventsSchema = listPublicEventsSchema;
