



export const fakeReq1 = {
  "startedDateTime": new Date("2022-08-12T22:31:10.833Z"),
    "responseBody": "{\"data\":{\"catalog\":{\"issuesConnection\":{\"pageInfo\":{\"hasNextPage\":false,\"__typename\":\"PageInfo\"},\"totalCount\":0,\"edges\":[],\"__typename\":\"CatalogIssuesConnection\"},\"__typename\":\"Catalog\"}},\"extensions\":{\"requestId\":\"6c359943-c060-4d38-b85d-173f30c53918\"}}",
    "url": "https://purplemanager.com/delivery/graphql",
    "response": {
      "status": 200,
      "statusText": "OK",
      "httpVersion": "HTTP/2",
      "headers": [
        {
          "name": "date",
          "value": "Fri, 12 Aug 2022 09:29:31 GMT"
        },
        {
          "name": "content-type",
          "value": "application/json;charset=UTF-8"
        },
        {
          "name": "access-control-allow-origin",
          "value": "*"
        },
        {
          "name": "access-control-expose-headers",
          "value": "X-Cache-Date, X-Atmosphere-tracking-id"
        },
        {
          "name": "strict-transport-security",
          "value": "max-age=15724800; includeSubDomains"
        },
        {
          "name": "X-Firefox-Spdy",
          "value": "h2"
        }
      ],
      "cookies": [],
      "content": {
        "mimeType": "application/json; charset=UTF-8",
        "size": 254,
        "comment": "Keine Response-Bodies enthalten"
      },
      "redirectURL": "",
      "headersSize": 287,
      "bodySize": 541
    },
    "time": 51,
    "timings": {
      "blocked": -1,
      "dns": 0,
      "connect": 0,
      "ssl": 0,
      "send": 0,
      "wait": 51,
      "receive": 0
    },
    "queryVariables": {
      "appInfo": {
        "appId": "d20d290d-6ec1-45b4-9ec1-c11e584c9af6",
        "appVersion": ""
      },
      "deviceInfo": {
        "deviceId": "752ea954-1dc8-4d07-8499-8c62b78b70e0",
        "deviceModel": "web",
        "locale": "de_DE",
        "smallestScreenWidthDp": 1282,
        "deviceOs": "web",
        "platform": "web"
      },
      "authorization": {
        "accessToken": "",
        "subscriptionCodes": []
      },
      "filter": {
        "properties": {
          "key": "purple_source_issue",
          "value": "July-2022"
        }
      },
      "comparators": [
        {
          "property": {
            "key": "purple_page_number",
            "direction": "ASC",
            "valueType": "INT"
          }
        },
        {
          "property": {
            "key": "purple_seq_number",
            "direction": "ASC",
            "valueType": "INT"
          }
        }
      ]
    },
    "fragments": [
      {
        "name": "LegacyIssueFragment",
        "kind": "FragmentDefinition",
        "operations": [
          {
            "kind": "Field",
            "name": "undefined: id",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: version",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: name",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: description",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: index",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: alias",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: externalIssueId",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: publicationDate",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: comingSoon",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: contentLength",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: numberOfPages",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: publicationId",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: purchasable",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: productId",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: properties",
            "params": [],
            "fields": [
              {
                "kind": "Field",
                "name": "undefined: key",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: value",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: thumbnails",
            "params": [],
            "fields": [
              {
                "kind": "Field",
                "name": "undefined: kind",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: url",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: categories",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: tags",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: purchaseData",
            "params": [],
            "fields": [
              {
                "kind": "Field",
                "name": "undefined: purchased",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: purchasedBy",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: preview",
            "params": [],
            "fields": [
              {
                "kind": "Field",
                "name": "undefined: id",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: version",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: contentLength",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: numberOfPages",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: contentBundles",
            "params": [],
            "fields": [
              {
                "kind": "Field",
                "name": "undefined: issueVersionId",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: __typename",
            "params": [],
            "fields": null,
            "type": "Field"
          }
        ]
      }
    ],
    "id": "1660296570198.6704",
    "bareQuery": "query CatalogIssuesQuery($appInfo: AppInfo!, $deviceInfo: DeviceInfo!, $authorization: Authorization!, $filter: IssueFilter, $comparators: [IssueComparator!], $first: Int, $after: String) {\n  catalog(\n    appInfo: $appInfo\n    deviceInfo: $deviceInfo\n    authorization: $authorization\n  ) {\n    issuesConnection(\n      filter: $filter\n      sort: $comparators\n      first: $first\n      after: $after\n    ) {\n      pageInfo {\n        hasNextPage\n        __typename\n      }\n      totalCount\n      edges {\n        cursor\n        issue: node {\n          ...LegacyIssueFragment\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment LegacyIssueFragment on Issue {\n  id\n  version\n  name\n  description\n  index\n  alias\n  externalIssueId\n  publicationDate\n  comingSoon\n  contentLength\n  numberOfPages\n  publicationId\n  purchasable\n  productId\n  properties {\n    key\n    value\n    __typename\n  }\n  thumbnails {\n    kind\n    url\n    __typename\n  }\n  categories\n  tags\n  purchaseData {\n    purchased\n    purchasedBy\n    __typename\n  }\n  preview {\n    id\n    version\n    contentLength\n    numberOfPages\n    __typename\n  }\n  contentBundles {\n    issueVersionId\n    __typename\n  }\n  __typename\n}\n",
    "data": [
      {
        "name": "CatalogIssuesQuery",
        "kind": "OperationDefinition",
        "operations": [
          {
            "kind": "Field",
            "name": "undefined: catalog",
            "params": [
              {
                "name": "appInfo",
                "value": "$appInfo",
                "kind": "Variable"
              },
              {
                "name": "deviceInfo",
                "value": "$deviceInfo",
                "kind": "Variable"
              },
              {
                "name": "authorization",
                "value": "$authorization",
                "kind": "Variable"
              }
            ],
            "fields": [
              {
                "kind": "Field",
                "name": "undefined: issuesConnection",
                "params": [
                  {
                    "name": "filter",
                    "value": "$filter",
                    "kind": "Variable"
                  },
                  {
                    "name": "sort",
                    "value": "$comparators",
                    "kind": "Variable"
                  },
                  {
                    "name": "first",
                    "value": "$first",
                    "kind": "Variable"
                  },
                  {
                    "name": "after",
                    "value": "$after",
                    "kind": "Variable"
                  }
                ],
                "fields": [
                  {
                    "kind": "Field",
                    "name": "undefined: pageInfo",
                    "params": [],
                    "fields": [
                      {
                        "kind": "Field",
                        "name": "undefined: hasNextPage",
                        "params": [],
                        "fields": null
                      },
                      {
                        "kind": "Field",
                        "name": "undefined: __typename",
                        "params": [],
                        "fields": null
                      }
                    ]
                  },
                  {
                    "kind": "Field",
                    "name": "undefined: totalCount",
                    "params": [],
                    "fields": null
                  },
                  {
                    "kind": "Field",
                    "name": "undefined: edges",
                    "params": [],
                    "fields": [
                      {
                        "kind": "Field",
                        "name": "undefined: cursor",
                        "params": [],
                        "fields": null
                      },
                      {
                        "kind": "Field",
                        "name": "issue: node",
                        "params": [],
                        "fields": [
                          {
                            "kind": "FragmentSpread",
                            "name": "LegacyIssueFragment",
                            "params": null,
                            "fields": null
                          },
                          {
                            "kind": "Field",
                            "name": "undefined: __typename",
                            "params": [],
                            "fields": null
                          }
                        ]
                      },
                      {
                        "kind": "Field",
                        "name": "undefined: __typename",
                        "params": [],
                        "fields": null
                      }
                    ]
                  },
                  {
                    "kind": "Field",
                    "name": "undefined: __typename",
                    "params": [],
                    "fields": null
                  }
                ]
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "query"
          }
        ]
      },
      {
        "name": "LegacyIssueFragment",
        "kind": "FragmentDefinition",
        "operations": [
          {
            "kind": "Field",
            "name": "undefined: id",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: version",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: name",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: description",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: index",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: alias",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: externalIssueId",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: publicationDate",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: comingSoon",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: contentLength",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: numberOfPages",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: publicationId",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: purchasable",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: productId",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: properties",
            "params": [],
            "fields": [
              {
                "kind": "Field",
                "name": "undefined: key",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: value",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: thumbnails",
            "params": [],
            "fields": [
              {
                "kind": "Field",
                "name": "undefined: kind",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: url",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: categories",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: tags",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: purchaseData",
            "params": [],
            "fields": [
              {
                "kind": "Field",
                "name": "undefined: purchased",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: purchasedBy",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: preview",
            "params": [],
            "fields": [
              {
                "kind": "Field",
                "name": "undefined: id",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: version",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: contentLength",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: numberOfPages",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: contentBundles",
            "params": [],
            "fields": [
              {
                "kind": "Field",
                "name": "undefined: issueVersionId",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: __typename",
            "params": [],
            "fields": null,
            "type": "Field"
          }
        ]
      }
    ],
    "rawParse": "{\"kind\":\"Document\",\"definitions\":[{\"kind\":\"OperationDefinition\",\"operation\":\"query\",\"name\":{\"kind\":\"Name\",\"value\":\"CatalogIssuesQuery\",\"loc\":{\"start\":6,\"end\":24}},\"variableDefinitions\":[{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"appInfo\",\"loc\":{\"start\":26,\"end\":33}},\"loc\":{\"start\":25,\"end\":33}},\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"AppInfo\",\"loc\":{\"start\":35,\"end\":42}},\"loc\":{\"start\":35,\"end\":42}},\"loc\":{\"start\":35,\"end\":43}},\"directives\":[],\"loc\":{\"start\":25,\"end\":43}},{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"deviceInfo\",\"loc\":{\"start\":46,\"end\":56}},\"loc\":{\"start\":45,\"end\":56}},\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"DeviceInfo\",\"loc\":{\"start\":58,\"end\":68}},\"loc\":{\"start\":58,\"end\":68}},\"loc\":{\"start\":58,\"end\":69}},\"directives\":[],\"loc\":{\"start\":45,\"end\":69}},{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"authorization\",\"loc\":{\"start\":72,\"end\":85}},\"loc\":{\"start\":71,\"end\":85}},\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Authorization\",\"loc\":{\"start\":87,\"end\":100}},\"loc\":{\"start\":87,\"end\":100}},\"loc\":{\"start\":87,\"end\":101}},\"directives\":[],\"loc\":{\"start\":71,\"end\":101}},{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"filter\",\"loc\":{\"start\":104,\"end\":110}},\"loc\":{\"start\":103,\"end\":110}},\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"IssueFilter\",\"loc\":{\"start\":112,\"end\":123}},\"loc\":{\"start\":112,\"end\":123}},\"directives\":[],\"loc\":{\"start\":103,\"end\":123}},{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"comparators\",\"loc\":{\"start\":126,\"end\":137}},\"loc\":{\"start\":125,\"end\":137}},\"type\":{\"kind\":\"ListType\",\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"IssueComparator\",\"loc\":{\"start\":140,\"end\":155}},\"loc\":{\"start\":140,\"end\":155}},\"loc\":{\"start\":140,\"end\":156}},\"loc\":{\"start\":139,\"end\":157}},\"directives\":[],\"loc\":{\"start\":125,\"end\":157}},{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"first\",\"loc\":{\"start\":160,\"end\":165}},\"loc\":{\"start\":159,\"end\":165}},\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Int\",\"loc\":{\"start\":167,\"end\":170}},\"loc\":{\"start\":167,\"end\":170}},\"directives\":[],\"loc\":{\"start\":159,\"end\":170}},{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"after\",\"loc\":{\"start\":173,\"end\":178}},\"loc\":{\"start\":172,\"end\":178}},\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\",\"loc\":{\"start\":180,\"end\":186}},\"loc\":{\"start\":180,\"end\":186}},\"directives\":[],\"loc\":{\"start\":172,\"end\":186}}],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"catalog\",\"loc\":{\"start\":192,\"end\":199}},\"arguments\":[{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"appInfo\",\"loc\":{\"start\":205,\"end\":212}},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"appInfo\",\"loc\":{\"start\":215,\"end\":222}},\"loc\":{\"start\":214,\"end\":222}},\"loc\":{\"start\":205,\"end\":222}},{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"deviceInfo\",\"loc\":{\"start\":227,\"end\":237}},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"deviceInfo\",\"loc\":{\"start\":240,\"end\":250}},\"loc\":{\"start\":239,\"end\":250}},\"loc\":{\"start\":227,\"end\":250}},{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"authorization\",\"loc\":{\"start\":255,\"end\":268}},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"authorization\",\"loc\":{\"start\":271,\"end\":284}},\"loc\":{\"start\":270,\"end\":284}},\"loc\":{\"start\":255,\"end\":284}}],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"issuesConnection\",\"loc\":{\"start\":295,\"end\":311}},\"arguments\":[{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"filter\",\"loc\":{\"start\":319,\"end\":325}},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"filter\",\"loc\":{\"start\":328,\"end\":334}},\"loc\":{\"start\":327,\"end\":334}},\"loc\":{\"start\":319,\"end\":334}},{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"sort\",\"loc\":{\"start\":341,\"end\":345}},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"comparators\",\"loc\":{\"start\":348,\"end\":359}},\"loc\":{\"start\":347,\"end\":359}},\"loc\":{\"start\":341,\"end\":359}},{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"first\",\"loc\":{\"start\":366,\"end\":371}},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"first\",\"loc\":{\"start\":374,\"end\":379}},\"loc\":{\"start\":373,\"end\":379}},\"loc\":{\"start\":366,\"end\":379}},{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"after\",\"loc\":{\"start\":386,\"end\":391}},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"after\",\"loc\":{\"start\":394,\"end\":399}},\"loc\":{\"start\":393,\"end\":399}},\"loc\":{\"start\":386,\"end\":399}}],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"pageInfo\",\"loc\":{\"start\":414,\"end\":422}},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"hasNextPage\",\"loc\":{\"start\":433,\"end\":444}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":433,\"end\":444}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":453,\"end\":463}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":453,\"end\":463}}],\"loc\":{\"start\":423,\"end\":471}},\"loc\":{\"start\":414,\"end\":471}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"totalCount\",\"loc\":{\"start\":478,\"end\":488}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":478,\"end\":488}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"edges\",\"loc\":{\"start\":495,\"end\":500}},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"cursor\",\"loc\":{\"start\":511,\"end\":517}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":511,\"end\":517}},{\"kind\":\"Field\",\"alias\":{\"kind\":\"Name\",\"value\":\"issue\",\"loc\":{\"start\":526,\"end\":531}},\"name\":{\"kind\":\"Name\",\"value\":\"node\",\"loc\":{\"start\":533,\"end\":537}},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"FragmentSpread\",\"name\":{\"kind\":\"Name\",\"value\":\"LegacyIssueFragment\",\"loc\":{\"start\":553,\"end\":572}},\"directives\":[],\"loc\":{\"start\":550,\"end\":572}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":583,\"end\":593}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":583,\"end\":593}}],\"loc\":{\"start\":538,\"end\":603}},\"loc\":{\"start\":526,\"end\":603}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":612,\"end\":622}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":612,\"end\":622}}],\"loc\":{\"start\":501,\"end\":630}},\"loc\":{\"start\":495,\"end\":630}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":637,\"end\":647}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":637,\"end\":647}}],\"loc\":{\"start\":406,\"end\":653}},\"loc\":{\"start\":295,\"end\":653}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":658,\"end\":668}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":658,\"end\":668}}],\"loc\":{\"start\":289,\"end\":672}},\"loc\":{\"start\":192,\"end\":672}}],\"loc\":{\"start\":188,\"end\":674}},\"loc\":{\"start\":0,\"end\":674}},{\"kind\":\"FragmentDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"LegacyIssueFragment\",\"loc\":{\"start\":685,\"end\":704}},\"typeCondition\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Issue\",\"loc\":{\"start\":708,\"end\":713}},\"loc\":{\"start\":708,\"end\":713}},\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\",\"loc\":{\"start\":718,\"end\":720}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":718,\"end\":720}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"version\",\"loc\":{\"start\":723,\"end\":730}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":723,\"end\":730}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"name\",\"loc\":{\"start\":733,\"end\":737}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":733,\"end\":737}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"description\",\"loc\":{\"start\":740,\"end\":751}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":740,\"end\":751}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"index\",\"loc\":{\"start\":754,\"end\":759}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":754,\"end\":759}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"alias\",\"loc\":{\"start\":762,\"end\":767}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":762,\"end\":767}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"externalIssueId\",\"loc\":{\"start\":770,\"end\":785}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":770,\"end\":785}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"publicationDate\",\"loc\":{\"start\":788,\"end\":803}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":788,\"end\":803}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"comingSoon\",\"loc\":{\"start\":806,\"end\":816}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":806,\"end\":816}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"contentLength\",\"loc\":{\"start\":819,\"end\":832}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":819,\"end\":832}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"numberOfPages\",\"loc\":{\"start\":835,\"end\":848}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":835,\"end\":848}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"publicationId\",\"loc\":{\"start\":851,\"end\":864}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":851,\"end\":864}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"purchasable\",\"loc\":{\"start\":867,\"end\":878}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":867,\"end\":878}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"productId\",\"loc\":{\"start\":881,\"end\":890}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":881,\"end\":890}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"properties\",\"loc\":{\"start\":893,\"end\":903}},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"key\",\"loc\":{\"start\":910,\"end\":913}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":910,\"end\":913}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"value\",\"loc\":{\"start\":918,\"end\":923}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":918,\"end\":923}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":928,\"end\":938}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":928,\"end\":938}}],\"loc\":{\"start\":904,\"end\":942}},\"loc\":{\"start\":893,\"end\":942}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"thumbnails\",\"loc\":{\"start\":945,\"end\":955}},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"kind\",\"loc\":{\"start\":962,\"end\":966}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":962,\"end\":966}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"url\",\"loc\":{\"start\":971,\"end\":974}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":971,\"end\":974}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":979,\"end\":989}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":979,\"end\":989}}],\"loc\":{\"start\":956,\"end\":993}},\"loc\":{\"start\":945,\"end\":993}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"categories\",\"loc\":{\"start\":996,\"end\":1006}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":996,\"end\":1006}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"tags\",\"loc\":{\"start\":1009,\"end\":1013}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1009,\"end\":1013}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"purchaseData\",\"loc\":{\"start\":1016,\"end\":1028}},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"purchased\",\"loc\":{\"start\":1035,\"end\":1044}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1035,\"end\":1044}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"purchasedBy\",\"loc\":{\"start\":1049,\"end\":1060}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1049,\"end\":1060}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":1065,\"end\":1075}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1065,\"end\":1075}}],\"loc\":{\"start\":1029,\"end\":1079}},\"loc\":{\"start\":1016,\"end\":1079}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"preview\",\"loc\":{\"start\":1082,\"end\":1089}},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\",\"loc\":{\"start\":1096,\"end\":1098}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1096,\"end\":1098}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"version\",\"loc\":{\"start\":1103,\"end\":1110}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1103,\"end\":1110}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"contentLength\",\"loc\":{\"start\":1115,\"end\":1128}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1115,\"end\":1128}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"numberOfPages\",\"loc\":{\"start\":1133,\"end\":1146}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1133,\"end\":1146}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":1151,\"end\":1161}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1151,\"end\":1161}}],\"loc\":{\"start\":1090,\"end\":1165}},\"loc\":{\"start\":1082,\"end\":1165}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"contentBundles\",\"loc\":{\"start\":1168,\"end\":1182}},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"issueVersionId\",\"loc\":{\"start\":1189,\"end\":1203}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1189,\"end\":1203}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":1208,\"end\":1218}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1208,\"end\":1218}}],\"loc\":{\"start\":1183,\"end\":1222}},\"loc\":{\"start\":1168,\"end\":1222}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":1225,\"end\":1235}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1225,\"end\":1235}}],\"loc\":{\"start\":714,\"end\":1237}},\"loc\":{\"start\":676,\"end\":1237}}],\"loc\":{\"start\":0,\"end\":1238}}"
  }



  export const fakeReq2 = {
    "startedDateTime": new Date("2022-08-12T22:31:10.855Z"),
    "responseBody": "{\"data\":{\"catalog\":{\"contentsConnection\":{\"pageInfo\":{\"hasNextPage\":false,\"__typename\":\"PageInfo\"},\"totalCount\":1,\"edges\":[{\"cursor\":\"c2ltcGxlLWN1cnNvcjE=\",\"content\":{\"__typename\":\"Post\",\"id\":\"932e1a5c-4c75-45a7-9505-dda9c04d8dee\",\"version\":220003,\"name\":\"‘Four out of six ain’t bad, is it?’\",\"description\":\"Hickman cements TT greatness in Senior\",\"index\":0,\"alias\":null,\"externalId\":\"17001\",\"publicationDate\":\"2022-06-13T22:00Z\",\"access\":\"FREE\",\"productId\":null,\"purchaseData\":{\"purchased\":true,\"purchasedBy\":[],\"__typename\":\"ContentPurchaseData\"},\"publication\":{\"id\":\"6f6aedd5-4876-47d9-b998-38d6e42a15fe\",\"__typename\":\"Publication\"},\"properties\":[{\"key\":\"purple_page_number\",\"value\":\"74\",\"__typename\":\"Property\"},{\"key\":\"purple_seq_number\",\"value\":\"34\",\"__typename\":\"Property\"},{\"key\":\"purple_source_article\",\"value\":\"article_74-1.xml\",\"__typename\":\"Property\"},{\"key\":\"purple_source_issue\",\"value\":\"15-June-2022\",\"__typename\":\"Property\"},{\"key\":\"purple_external_id\",\"value\":\"15-June-2022-74-1\",\"__typename\":\"Property\"},{\"key\":\"purple_issue_code\",\"value\":\"\",\"__typename\":\"Property\"},{\"key\":\"purple_android_product\",\"value\":\"\",\"__typename\":\"Property\"},{\"key\":\"purple_ios_product\",\"value\":\"\",\"__typename\":\"Property\"},{\"key\":\"purple_web_product\",\"value\":\"\",\"__typename\":\"Property\"},{\"key\":\"order\",\"value\":\"\",\"__typename\":\"Property\"},{\"key\":\"slug\",\"value\":\"four-out-of-six-aint-bad-is-it\",\"__typename\":\"Property\"}],\"thumbnails\":[{\"kind\":\"default\",\"url\":\"https://c02.purpledshub.com/uploads/sites/13/2022/06/784450b9-47e0-4eb3-9002-1e64d0f0a009.jpg\",\"__typename\":\"Thumbnail\"}],\"categories\":[\"highlighted\",\"sport\"],\"tags\":[\"pkar\"],\"postType\":\"post\",\"bundleId\":\"221972bd-ddf8-41a8-bcbb-47ad8bd42cb5\",\"taxonomies\":[{\"id\":\"highlighted\",\"name\":\"Highlighted\",\"type\":\"category\",\"parentId\":\"\",\"properties\":[],\"__typename\":\"Taxonomy\"},{\"id\":\"sport\",\"name\":\"Sport\",\"type\":\"category\",\"parentId\":\"\",\"properties\":[],\"__typename\":\"Taxonomy\"},{\"id\":\"pkar\",\"name\":\"pkar\",\"type\":\"tag\",\"parentId\":\"\",\"properties\":[],\"__typename\":\"Taxonomy\"}],\"authors\":[{\"name\":\"guy.procter@bauermedia.co.uk\",\"email\":\"guy.procter@bauermedia.co.uk\",\"__typename\":\"Author\"}],\"resources\":[{\"id\":\"340d7a25-35a0-4781-b634-cd20aec1a2fa\",\"url\":\"https://catalog.purplemanager.com/resources/content/f7701e5f-9efe-47f4-9115-d9251a31de40/932e1a5c-4c75-45a7-9505-dda9c04d8dee/340d7a25-35a0-4781-b634-cd20aec1a2fa/speech.json?appId=f7701e5f-9efe-47f4-9115-d9251a31de40&preview=false&platform=WEB&deviceId=078789b8-9577-40d1-8362-138ec8f438a3&deviceModel=web&deviceOs=web&smallestScreenWidthDp=1282\",\"type\":\"ASSET\",\"contentLength\":0,\"properties\":[{\"key\":\"ttsResource\",\"value\":\"true\",\"type\":\"BOOLEAN\",\"__typename\":\"Property\"}],\"__typename\":\"Resource\"}]},\"__typename\":\"CatalogContentsConnectionEdge\"}],\"__typename\":\"CatalogContentsConnection\"},\"__typename\":\"Catalog\"}}}",
    "url": "https://catalog.purplemanager.com/graphql",
    "response": {
      "status": 200,
      "statusText": "OK",
      "httpVersion": "HTTP/2",
      "headers": [
        {
          "name": "date",
          "value": "Fri, 12 Aug 2022 22:20:26 GMT"
        },
        {
          "name": "content-type",
          "value": "application/json;charset=UTF-8"
        },
        {
          "name": "vary",
          "value": "origin,access-control-request-method,access-control-request-headers,accept-encoding"
        },
        {
          "name": "access-control-allow-origin",
          "value": "https://members.motorcyclenews.com"
        },
        {
          "name": "content-encoding",
          "value": "gzip"
        },
        {
          "name": "strict-transport-security",
          "value": "max-age=15724800; includeSubDomains"
        },
        {
          "name": "X-Firefox-Spdy",
          "value": "h2"
        }
      ],
      "cookies": [],
      "content": {
        "mimeType": "application/json; charset=UTF-8",
        "size": 2820,
        "comment": "Keine Response-Bodies enthalten"
      },
      "redirectURL": "",
      "headersSize": 364,
      "bodySize": 1514
    },
    "time": 54,
    "timings": {
      "blocked": 0,
      "dns": 0,
      "connect": 0,
      "ssl": 0,
      "send": 0,
      "wait": 54,
      "receive": 0
    },
    "queryVariables": {
      "appInfo": {
        "appId": "f7701e5f-9efe-47f4-9115-d9251a31de40",
        "appVersion": ""
      },
      "deviceInfo": {
        "deviceId": "078789b8-9577-40d1-8362-138ec8f438a3",
        "deviceModel": "web",
        "locale": "de_DE",
        "smallestScreenWidthDp": 1282,
        "deviceOs": "web",
        "platform": "WEB"
      },
      "authorization": {
        "accessToken": "",
        "subscriptionCodes": []
      },
      "filter": {
        "id": {
          "value": "932e1a5c-4c75-45a7-9505-dda9c04d8dee"
        }
      },
      "first": 1,
      "includeBlocks": false,
      "includeHtml": false,
      "includeResources": true,
      "includeBundledContent": false
    },
    "fragments": [
      {
        "name": "ContentFragment",
        "kind": "FragmentDefinition",
        "operations": [
          {
            "kind": "Field",
            "name": "undefined: __typename",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: id",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: version",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: name",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: description",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: index",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: alias",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: externalId",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: publicationDate",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: access",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: productId",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: purchaseData",
            "params": [],
            "fields": [
              {
                "kind": "Field",
                "name": "undefined: purchased",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: purchasedBy",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: publication",
            "params": [],
            "fields": [
              {
                "kind": "Field",
                "name": "undefined: id",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: properties",
            "params": [],
            "fields": [
              {
                "kind": "Field",
                "name": "undefined: key",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: value",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: thumbnails",
            "params": [],
            "fields": [
              {
                "kind": "Field",
                "name": "undefined: kind",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: url",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: categories",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: tags",
            "params": [],
            "fields": null,
            "type": "Field"
          }
        ]
      },
      {
        "name": "PostFragment",
        "kind": "FragmentDefinition",
        "operations": [
          {
            "kind": "Field",
            "name": "undefined: postType",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: bundleId",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: taxonomies",
            "params": [],
            "fields": [
              {
                "kind": "FragmentSpread",
                "name": "TaxonomySummaryFragment",
                "params": null,
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: authors",
            "params": [],
            "fields": [
              {
                "kind": "Field",
                "name": "undefined: name",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: email",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: bundleId",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: content",
            "params": [],
            "fields": [
              {
                "kind": "FragmentSpread",
                "name": "ContentBlockFragment",
                "params": null,
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: previewContentBlocks",
            "params": [],
            "fields": [
              {
                "kind": "FragmentSpread",
                "name": "ContentBlockFragment",
                "params": null,
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: contentHtml",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: previewContentHtml",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: resources",
            "params": [],
            "fields": [
              {
                "kind": "Field",
                "name": "undefined: id",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: url",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: type",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: contentLength",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: properties",
                "params": [],
                "fields": [
                  {
                    "kind": "Field",
                    "name": "undefined: key",
                    "params": [],
                    "fields": null
                  },
                  {
                    "kind": "Field",
                    "name": "undefined: value",
                    "params": [],
                    "fields": null
                  },
                  {
                    "kind": "Field",
                    "name": "undefined: type",
                    "params": [],
                    "fields": null
                  },
                  {
                    "kind": "Field",
                    "name": "undefined: __typename",
                    "params": [],
                    "fields": null
                  }
                ]
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: __typename",
            "params": [],
            "fields": null,
            "type": "Field"
          }
        ]
      },
      {
        "name": "ContentBlockFragment",
        "kind": "FragmentDefinition",
        "operations": [
          {
            "kind": "Field",
            "name": "undefined: id",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: type",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: parentId",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: children",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: sequence",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: html",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: level",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: properties",
            "params": [],
            "fields": [
              {
                "kind": "Field",
                "name": "undefined: key",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: value",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: type",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: __typename",
            "params": [],
            "fields": null,
            "type": "Field"
          }
        ]
      },
      {
        "name": "BundleFragment",
        "kind": "FragmentDefinition",
        "operations": [
          {
            "kind": "Field",
            "name": "undefined: taxonomies",
            "params": [],
            "fields": [
              {
                "kind": "FragmentSpread",
                "name": "TaxonomySummaryFragment",
                "params": null,
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: contents",
            "params": [],
            "fields": [
              {
                "kind": "Field",
                "name": "undefined: id",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: content",
                "params": [],
                "fields": [
                  {
                    "kind": "FragmentSpread",
                    "name": "ContentFragment",
                    "params": null,
                    "fields": null
                  },
                  {
                    "kind": "FragmentSpread",
                    "name": "PostFragment",
                    "params": null,
                    "fields": null
                  },
                  {
                    "kind": "Field",
                    "name": "undefined: __typename",
                    "params": [],
                    "fields": null
                  }
                ]
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: __typename",
            "params": [],
            "fields": null,
            "type": "Field"
          }
        ]
      },
      {
        "name": "IssueFragment",
        "kind": "FragmentDefinition",
        "operations": [
          {
            "kind": "Field",
            "name": "undefined: contentLength",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: numberOfPages",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: previewContentLength",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: __typename",
            "params": [],
            "fields": null,
            "type": "Field"
          }
        ]
      },
      {
        "name": "TaxonomySummaryFragment",
        "kind": "FragmentDefinition",
        "operations": [
          {
            "kind": "Field",
            "name": "undefined: id",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: name",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: type",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: parentId",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: properties",
            "params": [],
            "fields": [
              {
                "kind": "Field",
                "name": "undefined: key",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: value",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: __typename",
            "params": [],
            "fields": null,
            "type": "Field"
          }
        ]
      }
    ],
    "id": "1660342824547.3357",
    "bareQuery": "query CatalogContentsQuery($appInfo: AppInfo!, $deviceInfo: DeviceInfo!, $authorization: Authorization!, $filter: ContentFilter, $comparators: [ContentComparator!], $first: Int, $after: String, $includeBlocks: Boolean!, $includeHtml: Boolean!, $includeResources: Boolean!, $includeBundledContent: Boolean!) {\n  catalog(\n    appInfo: $appInfo\n    deviceInfo: $deviceInfo\n    authorization: $authorization\n  ) {\n    contentsConnection(\n      filter: $filter\n      sort: $comparators\n      first: $first\n      after: $after\n    ) {\n      pageInfo {\n        hasNextPage\n        __typename\n      }\n      totalCount\n      edges {\n        cursor\n        content: node {\n          __typename\n          ...ContentFragment\n          ...PostFragment\n          ...IssueFragment\n          ...BundleFragment\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment ContentFragment on Content {\n  __typename\n  id\n  version\n  name\n  description\n  index\n  alias\n  externalId\n  publicationDate\n  access\n  productId\n  purchaseData {\n    purchased\n    purchasedBy\n    __typename\n  }\n  publication {\n    id\n    __typename\n  }\n  properties {\n    key\n    value\n    __typename\n  }\n  thumbnails {\n    kind\n    url\n    __typename\n  }\n  categories\n  tags\n}\n\nfragment PostFragment on Post {\n  postType\n  bundleId\n  taxonomies {\n    ...TaxonomySummaryFragment\n    __typename\n  }\n  authors {\n    name\n    email\n    __typename\n  }\n  bundleId\n  content @include(if: $includeBlocks) {\n    ...ContentBlockFragment\n    __typename\n  }\n  previewContentBlocks @include(if: $includeBlocks) {\n    ...ContentBlockFragment\n    __typename\n  }\n  contentHtml @include(if: $includeHtml)\n  previewContentHtml @include(if: $includeHtml)\n  resources @include(if: $includeResources) {\n    id\n    url\n    type\n    contentLength\n    properties {\n      key\n      value\n      type\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment ContentBlockFragment on ContentBlock {\n  id\n  type\n  parentId\n  children\n  sequence\n  html\n  level\n  properties {\n    key\n    value\n    type\n    __typename\n  }\n  __typename\n}\n\nfragment BundleFragment on Bundle {\n  taxonomies {\n    ...TaxonomySummaryFragment\n    __typename\n  }\n  contents @include(if: $includeBundledContent) {\n    id\n    content {\n      ...ContentFragment\n      ...PostFragment\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment IssueFragment on Issue {\n  contentLength\n  numberOfPages\n  previewContentLength\n  __typename\n}\n\nfragment TaxonomySummaryFragment on Taxonomy {\n  id\n  name\n  type\n  parentId\n  properties {\n    key\n    value\n    __typename\n  }\n  __typename\n}\n",
    "data": [
      {
        "name": "CatalogContentsQuery",
        "kind": "OperationDefinition",
        "operations": [
          {
            "kind": "Field",
            "name": "undefined: catalog",
            "params": [
              {
                "name": "appInfo",
                "value": "$appInfo",
                "kind": "Variable"
              },
              {
                "name": "deviceInfo",
                "value": "$deviceInfo",
                "kind": "Variable"
              },
              {
                "name": "authorization",
                "value": "$authorization",
                "kind": "Variable"
              }
            ],
            "fields": [
              {
                "kind": "Field",
                "name": "undefined: contentsConnection",
                "params": [
                  {
                    "name": "filter",
                    "value": "$filter",
                    "kind": "Variable"
                  },
                  {
                    "name": "sort",
                    "value": "$comparators",
                    "kind": "Variable"
                  },
                  {
                    "name": "first",
                    "value": "$first",
                    "kind": "Variable"
                  },
                  {
                    "name": "after",
                    "value": "$after",
                    "kind": "Variable"
                  }
                ],
                "fields": [
                  {
                    "kind": "Field",
                    "name": "undefined: pageInfo",
                    "params": [],
                    "fields": [
                      {
                        "kind": "Field",
                        "name": "undefined: hasNextPage",
                        "params": [],
                        "fields": null
                      },
                      {
                        "kind": "Field",
                        "name": "undefined: __typename",
                        "params": [],
                        "fields": null
                      }
                    ]
                  },
                  {
                    "kind": "Field",
                    "name": "undefined: totalCount",
                    "params": [],
                    "fields": null
                  },
                  {
                    "kind": "Field",
                    "name": "undefined: edges",
                    "params": [],
                    "fields": [
                      {
                        "kind": "Field",
                        "name": "undefined: cursor",
                        "params": [],
                        "fields": null
                      },
                      {
                        "kind": "Field",
                        "name": "content: node",
                        "params": [],
                        "fields": [
                          {
                            "kind": "Field",
                            "name": "undefined: __typename",
                            "params": [],
                            "fields": null
                          },
                          {
                            "kind": "FragmentSpread",
                            "name": "ContentFragment",
                            "params": null,
                            "fields": null
                          },
                          {
                            "kind": "FragmentSpread",
                            "name": "PostFragment",
                            "params": null,
                            "fields": null
                          },
                          {
                            "kind": "FragmentSpread",
                            "name": "IssueFragment",
                            "params": null,
                            "fields": null
                          },
                          {
                            "kind": "FragmentSpread",
                            "name": "BundleFragment",
                            "params": null,
                            "fields": null
                          }
                        ]
                      },
                      {
                        "kind": "Field",
                        "name": "undefined: __typename",
                        "params": [],
                        "fields": null
                      }
                    ]
                  },
                  {
                    "kind": "Field",
                    "name": "undefined: __typename",
                    "params": [],
                    "fields": null
                  }
                ]
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "query"
          }
        ]
      },
      {
        "name": "ContentFragment",
        "kind": "FragmentDefinition",
        "operations": [
          {
            "kind": "Field",
            "name": "undefined: __typename",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: id",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: version",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: name",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: description",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: index",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: alias",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: externalId",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: publicationDate",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: access",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: productId",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: purchaseData",
            "params": [],
            "fields": [
              {
                "kind": "Field",
                "name": "undefined: purchased",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: purchasedBy",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: publication",
            "params": [],
            "fields": [
              {
                "kind": "Field",
                "name": "undefined: id",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: properties",
            "params": [],
            "fields": [
              {
                "kind": "Field",
                "name": "undefined: key",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: value",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: thumbnails",
            "params": [],
            "fields": [
              {
                "kind": "Field",
                "name": "undefined: kind",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: url",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: categories",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: tags",
            "params": [],
            "fields": null,
            "type": "Field"
          }
        ]
      },
      {
        "name": "PostFragment",
        "kind": "FragmentDefinition",
        "operations": [
          {
            "kind": "Field",
            "name": "undefined: postType",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: bundleId",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: taxonomies",
            "params": [],
            "fields": [
              {
                "kind": "FragmentSpread",
                "name": "TaxonomySummaryFragment",
                "params": null,
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: authors",
            "params": [],
            "fields": [
              {
                "kind": "Field",
                "name": "undefined: name",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: email",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: bundleId",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: content",
            "params": [],
            "fields": [
              {
                "kind": "FragmentSpread",
                "name": "ContentBlockFragment",
                "params": null,
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: previewContentBlocks",
            "params": [],
            "fields": [
              {
                "kind": "FragmentSpread",
                "name": "ContentBlockFragment",
                "params": null,
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: contentHtml",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: previewContentHtml",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: resources",
            "params": [],
            "fields": [
              {
                "kind": "Field",
                "name": "undefined: id",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: url",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: type",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: contentLength",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: properties",
                "params": [],
                "fields": [
                  {
                    "kind": "Field",
                    "name": "undefined: key",
                    "params": [],
                    "fields": null
                  },
                  {
                    "kind": "Field",
                    "name": "undefined: value",
                    "params": [],
                    "fields": null
                  },
                  {
                    "kind": "Field",
                    "name": "undefined: type",
                    "params": [],
                    "fields": null
                  },
                  {
                    "kind": "Field",
                    "name": "undefined: __typename",
                    "params": [],
                    "fields": null
                  }
                ]
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: __typename",
            "params": [],
            "fields": null,
            "type": "Field"
          }
        ]
      },
      {
        "name": "ContentBlockFragment",
        "kind": "FragmentDefinition",
        "operations": [
          {
            "kind": "Field",
            "name": "undefined: id",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: type",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: parentId",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: children",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: sequence",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: html",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: level",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: properties",
            "params": [],
            "fields": [
              {
                "kind": "Field",
                "name": "undefined: key",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: value",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: type",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: __typename",
            "params": [],
            "fields": null,
            "type": "Field"
          }
        ]
      },
      {
        "name": "BundleFragment",
        "kind": "FragmentDefinition",
        "operations": [
          {
            "kind": "Field",
            "name": "undefined: taxonomies",
            "params": [],
            "fields": [
              {
                "kind": "FragmentSpread",
                "name": "TaxonomySummaryFragment",
                "params": null,
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: contents",
            "params": [],
            "fields": [
              {
                "kind": "Field",
                "name": "undefined: id",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: content",
                "params": [],
                "fields": [
                  {
                    "kind": "FragmentSpread",
                    "name": "ContentFragment",
                    "params": null,
                    "fields": null
                  },
                  {
                    "kind": "FragmentSpread",
                    "name": "PostFragment",
                    "params": null,
                    "fields": null
                  },
                  {
                    "kind": "Field",
                    "name": "undefined: __typename",
                    "params": [],
                    "fields": null
                  }
                ]
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: __typename",
            "params": [],
            "fields": null,
            "type": "Field"
          }
        ]
      },
      {
        "name": "IssueFragment",
        "kind": "FragmentDefinition",
        "operations": [
          {
            "kind": "Field",
            "name": "undefined: contentLength",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: numberOfPages",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: previewContentLength",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: __typename",
            "params": [],
            "fields": null,
            "type": "Field"
          }
        ]
      },
      {
        "name": "TaxonomySummaryFragment",
        "kind": "FragmentDefinition",
        "operations": [
          {
            "kind": "Field",
            "name": "undefined: id",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: name",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: type",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: parentId",
            "params": [],
            "fields": null,
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: properties",
            "params": [],
            "fields": [
              {
                "kind": "Field",
                "name": "undefined: key",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: value",
                "params": [],
                "fields": null
              },
              {
                "kind": "Field",
                "name": "undefined: __typename",
                "params": [],
                "fields": null
              }
            ],
            "type": "Field"
          },
          {
            "kind": "Field",
            "name": "undefined: __typename",
            "params": [],
            "fields": null,
            "type": "Field"
          }
        ]
      }
    ],
    "rawParse": "{\"kind\":\"Document\",\"definitions\":[{\"kind\":\"OperationDefinition\",\"operation\":\"query\",\"name\":{\"kind\":\"Name\",\"value\":\"CatalogContentsQuery\",\"loc\":{\"start\":6,\"end\":26}},\"variableDefinitions\":[{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"appInfo\",\"loc\":{\"start\":28,\"end\":35}},\"loc\":{\"start\":27,\"end\":35}},\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"AppInfo\",\"loc\":{\"start\":37,\"end\":44}},\"loc\":{\"start\":37,\"end\":44}},\"loc\":{\"start\":37,\"end\":45}},\"directives\":[],\"loc\":{\"start\":27,\"end\":45}},{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"deviceInfo\",\"loc\":{\"start\":48,\"end\":58}},\"loc\":{\"start\":47,\"end\":58}},\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"DeviceInfo\",\"loc\":{\"start\":60,\"end\":70}},\"loc\":{\"start\":60,\"end\":70}},\"loc\":{\"start\":60,\"end\":71}},\"directives\":[],\"loc\":{\"start\":47,\"end\":71}},{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"authorization\",\"loc\":{\"start\":74,\"end\":87}},\"loc\":{\"start\":73,\"end\":87}},\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Authorization\",\"loc\":{\"start\":89,\"end\":102}},\"loc\":{\"start\":89,\"end\":102}},\"loc\":{\"start\":89,\"end\":103}},\"directives\":[],\"loc\":{\"start\":73,\"end\":103}},{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"filter\",\"loc\":{\"start\":106,\"end\":112}},\"loc\":{\"start\":105,\"end\":112}},\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"ContentFilter\",\"loc\":{\"start\":114,\"end\":127}},\"loc\":{\"start\":114,\"end\":127}},\"directives\":[],\"loc\":{\"start\":105,\"end\":127}},{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"comparators\",\"loc\":{\"start\":130,\"end\":141}},\"loc\":{\"start\":129,\"end\":141}},\"type\":{\"kind\":\"ListType\",\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"ContentComparator\",\"loc\":{\"start\":144,\"end\":161}},\"loc\":{\"start\":144,\"end\":161}},\"loc\":{\"start\":144,\"end\":162}},\"loc\":{\"start\":143,\"end\":163}},\"directives\":[],\"loc\":{\"start\":129,\"end\":163}},{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"first\",\"loc\":{\"start\":166,\"end\":171}},\"loc\":{\"start\":165,\"end\":171}},\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Int\",\"loc\":{\"start\":173,\"end\":176}},\"loc\":{\"start\":173,\"end\":176}},\"directives\":[],\"loc\":{\"start\":165,\"end\":176}},{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"after\",\"loc\":{\"start\":179,\"end\":184}},\"loc\":{\"start\":178,\"end\":184}},\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\",\"loc\":{\"start\":186,\"end\":192}},\"loc\":{\"start\":186,\"end\":192}},\"directives\":[],\"loc\":{\"start\":178,\"end\":192}},{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"includeBlocks\",\"loc\":{\"start\":195,\"end\":208}},\"loc\":{\"start\":194,\"end\":208}},\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Boolean\",\"loc\":{\"start\":210,\"end\":217}},\"loc\":{\"start\":210,\"end\":217}},\"loc\":{\"start\":210,\"end\":218}},\"directives\":[],\"loc\":{\"start\":194,\"end\":218}},{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"includeHtml\",\"loc\":{\"start\":221,\"end\":232}},\"loc\":{\"start\":220,\"end\":232}},\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Boolean\",\"loc\":{\"start\":234,\"end\":241}},\"loc\":{\"start\":234,\"end\":241}},\"loc\":{\"start\":234,\"end\":242}},\"directives\":[],\"loc\":{\"start\":220,\"end\":242}},{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"includeResources\",\"loc\":{\"start\":245,\"end\":261}},\"loc\":{\"start\":244,\"end\":261}},\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Boolean\",\"loc\":{\"start\":263,\"end\":270}},\"loc\":{\"start\":263,\"end\":270}},\"loc\":{\"start\":263,\"end\":271}},\"directives\":[],\"loc\":{\"start\":244,\"end\":271}},{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"includeBundledContent\",\"loc\":{\"start\":274,\"end\":295}},\"loc\":{\"start\":273,\"end\":295}},\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Boolean\",\"loc\":{\"start\":297,\"end\":304}},\"loc\":{\"start\":297,\"end\":304}},\"loc\":{\"start\":297,\"end\":305}},\"directives\":[],\"loc\":{\"start\":273,\"end\":305}}],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"catalog\",\"loc\":{\"start\":311,\"end\":318}},\"arguments\":[{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"appInfo\",\"loc\":{\"start\":324,\"end\":331}},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"appInfo\",\"loc\":{\"start\":334,\"end\":341}},\"loc\":{\"start\":333,\"end\":341}},\"loc\":{\"start\":324,\"end\":341}},{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"deviceInfo\",\"loc\":{\"start\":346,\"end\":356}},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"deviceInfo\",\"loc\":{\"start\":359,\"end\":369}},\"loc\":{\"start\":358,\"end\":369}},\"loc\":{\"start\":346,\"end\":369}},{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"authorization\",\"loc\":{\"start\":374,\"end\":387}},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"authorization\",\"loc\":{\"start\":390,\"end\":403}},\"loc\":{\"start\":389,\"end\":403}},\"loc\":{\"start\":374,\"end\":403}}],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"contentsConnection\",\"loc\":{\"start\":414,\"end\":432}},\"arguments\":[{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"filter\",\"loc\":{\"start\":440,\"end\":446}},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"filter\",\"loc\":{\"start\":449,\"end\":455}},\"loc\":{\"start\":448,\"end\":455}},\"loc\":{\"start\":440,\"end\":455}},{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"sort\",\"loc\":{\"start\":462,\"end\":466}},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"comparators\",\"loc\":{\"start\":469,\"end\":480}},\"loc\":{\"start\":468,\"end\":480}},\"loc\":{\"start\":462,\"end\":480}},{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"first\",\"loc\":{\"start\":487,\"end\":492}},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"first\",\"loc\":{\"start\":495,\"end\":500}},\"loc\":{\"start\":494,\"end\":500}},\"loc\":{\"start\":487,\"end\":500}},{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"after\",\"loc\":{\"start\":507,\"end\":512}},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"after\",\"loc\":{\"start\":515,\"end\":520}},\"loc\":{\"start\":514,\"end\":520}},\"loc\":{\"start\":507,\"end\":520}}],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"pageInfo\",\"loc\":{\"start\":535,\"end\":543}},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"hasNextPage\",\"loc\":{\"start\":554,\"end\":565}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":554,\"end\":565}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":574,\"end\":584}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":574,\"end\":584}}],\"loc\":{\"start\":544,\"end\":592}},\"loc\":{\"start\":535,\"end\":592}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"totalCount\",\"loc\":{\"start\":599,\"end\":609}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":599,\"end\":609}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"edges\",\"loc\":{\"start\":616,\"end\":621}},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"cursor\",\"loc\":{\"start\":632,\"end\":638}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":632,\"end\":638}},{\"kind\":\"Field\",\"alias\":{\"kind\":\"Name\",\"value\":\"content\",\"loc\":{\"start\":647,\"end\":654}},\"name\":{\"kind\":\"Name\",\"value\":\"node\",\"loc\":{\"start\":656,\"end\":660}},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":673,\"end\":683}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":673,\"end\":683}},{\"kind\":\"FragmentSpread\",\"name\":{\"kind\":\"Name\",\"value\":\"ContentFragment\",\"loc\":{\"start\":697,\"end\":712}},\"directives\":[],\"loc\":{\"start\":694,\"end\":712}},{\"kind\":\"FragmentSpread\",\"name\":{\"kind\":\"Name\",\"value\":\"PostFragment\",\"loc\":{\"start\":726,\"end\":738}},\"directives\":[],\"loc\":{\"start\":723,\"end\":738}},{\"kind\":\"FragmentSpread\",\"name\":{\"kind\":\"Name\",\"value\":\"IssueFragment\",\"loc\":{\"start\":752,\"end\":765}},\"directives\":[],\"loc\":{\"start\":749,\"end\":765}},{\"kind\":\"FragmentSpread\",\"name\":{\"kind\":\"Name\",\"value\":\"BundleFragment\",\"loc\":{\"start\":779,\"end\":793}},\"directives\":[],\"loc\":{\"start\":776,\"end\":793}}],\"loc\":{\"start\":661,\"end\":803}},\"loc\":{\"start\":647,\"end\":803}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":812,\"end\":822}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":812,\"end\":822}}],\"loc\":{\"start\":622,\"end\":830}},\"loc\":{\"start\":616,\"end\":830}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":837,\"end\":847}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":837,\"end\":847}}],\"loc\":{\"start\":527,\"end\":853}},\"loc\":{\"start\":414,\"end\":853}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":858,\"end\":868}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":858,\"end\":868}}],\"loc\":{\"start\":408,\"end\":872}},\"loc\":{\"start\":311,\"end\":872}}],\"loc\":{\"start\":307,\"end\":874}},\"loc\":{\"start\":0,\"end\":874}},{\"kind\":\"FragmentDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"ContentFragment\",\"loc\":{\"start\":885,\"end\":900}},\"typeCondition\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Content\",\"loc\":{\"start\":904,\"end\":911}},\"loc\":{\"start\":904,\"end\":911}},\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":916,\"end\":926}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":916,\"end\":926}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\",\"loc\":{\"start\":929,\"end\":931}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":929,\"end\":931}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"version\",\"loc\":{\"start\":934,\"end\":941}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":934,\"end\":941}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"name\",\"loc\":{\"start\":944,\"end\":948}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":944,\"end\":948}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"description\",\"loc\":{\"start\":951,\"end\":962}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":951,\"end\":962}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"index\",\"loc\":{\"start\":965,\"end\":970}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":965,\"end\":970}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"alias\",\"loc\":{\"start\":973,\"end\":978}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":973,\"end\":978}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"externalId\",\"loc\":{\"start\":981,\"end\":991}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":981,\"end\":991}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"publicationDate\",\"loc\":{\"start\":994,\"end\":1009}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":994,\"end\":1009}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"access\",\"loc\":{\"start\":1012,\"end\":1018}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1012,\"end\":1018}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"productId\",\"loc\":{\"start\":1021,\"end\":1030}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1021,\"end\":1030}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"purchaseData\",\"loc\":{\"start\":1033,\"end\":1045}},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"purchased\",\"loc\":{\"start\":1052,\"end\":1061}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1052,\"end\":1061}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"purchasedBy\",\"loc\":{\"start\":1066,\"end\":1077}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1066,\"end\":1077}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":1082,\"end\":1092}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1082,\"end\":1092}}],\"loc\":{\"start\":1046,\"end\":1096}},\"loc\":{\"start\":1033,\"end\":1096}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"publication\",\"loc\":{\"start\":1099,\"end\":1110}},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\",\"loc\":{\"start\":1117,\"end\":1119}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1117,\"end\":1119}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":1124,\"end\":1134}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1124,\"end\":1134}}],\"loc\":{\"start\":1111,\"end\":1138}},\"loc\":{\"start\":1099,\"end\":1138}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"properties\",\"loc\":{\"start\":1141,\"end\":1151}},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"key\",\"loc\":{\"start\":1158,\"end\":1161}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1158,\"end\":1161}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"value\",\"loc\":{\"start\":1166,\"end\":1171}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1166,\"end\":1171}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":1176,\"end\":1186}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1176,\"end\":1186}}],\"loc\":{\"start\":1152,\"end\":1190}},\"loc\":{\"start\":1141,\"end\":1190}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"thumbnails\",\"loc\":{\"start\":1193,\"end\":1203}},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"kind\",\"loc\":{\"start\":1210,\"end\":1214}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1210,\"end\":1214}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"url\",\"loc\":{\"start\":1219,\"end\":1222}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1219,\"end\":1222}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":1227,\"end\":1237}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1227,\"end\":1237}}],\"loc\":{\"start\":1204,\"end\":1241}},\"loc\":{\"start\":1193,\"end\":1241}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"categories\",\"loc\":{\"start\":1244,\"end\":1254}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1244,\"end\":1254}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"tags\",\"loc\":{\"start\":1257,\"end\":1261}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1257,\"end\":1261}}],\"loc\":{\"start\":912,\"end\":1263}},\"loc\":{\"start\":876,\"end\":1263}},{\"kind\":\"FragmentDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"PostFragment\",\"loc\":{\"start\":1274,\"end\":1286}},\"typeCondition\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Post\",\"loc\":{\"start\":1290,\"end\":1294}},\"loc\":{\"start\":1290,\"end\":1294}},\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"postType\",\"loc\":{\"start\":1299,\"end\":1307}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1299,\"end\":1307}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"bundleId\",\"loc\":{\"start\":1310,\"end\":1318}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1310,\"end\":1318}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"taxonomies\",\"loc\":{\"start\":1321,\"end\":1331}},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"FragmentSpread\",\"name\":{\"kind\":\"Name\",\"value\":\"TaxonomySummaryFragment\",\"loc\":{\"start\":1341,\"end\":1364}},\"directives\":[],\"loc\":{\"start\":1338,\"end\":1364}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":1369,\"end\":1379}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1369,\"end\":1379}}],\"loc\":{\"start\":1332,\"end\":1383}},\"loc\":{\"start\":1321,\"end\":1383}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"authors\",\"loc\":{\"start\":1386,\"end\":1393}},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"name\",\"loc\":{\"start\":1400,\"end\":1404}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1400,\"end\":1404}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"email\",\"loc\":{\"start\":1409,\"end\":1414}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1409,\"end\":1414}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":1419,\"end\":1429}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1419,\"end\":1429}}],\"loc\":{\"start\":1394,\"end\":1433}},\"loc\":{\"start\":1386,\"end\":1433}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"bundleId\",\"loc\":{\"start\":1436,\"end\":1444}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1436,\"end\":1444}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"content\",\"loc\":{\"start\":1447,\"end\":1454}},\"arguments\":[],\"directives\":[{\"kind\":\"Directive\",\"name\":{\"kind\":\"Name\",\"value\":\"include\",\"loc\":{\"start\":1456,\"end\":1463}},\"arguments\":[{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"if\",\"loc\":{\"start\":1464,\"end\":1466}},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"includeBlocks\",\"loc\":{\"start\":1469,\"end\":1482}},\"loc\":{\"start\":1468,\"end\":1482}},\"loc\":{\"start\":1464,\"end\":1482}}],\"loc\":{\"start\":1455,\"end\":1483}}],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"FragmentSpread\",\"name\":{\"kind\":\"Name\",\"value\":\"ContentBlockFragment\",\"loc\":{\"start\":1493,\"end\":1513}},\"directives\":[],\"loc\":{\"start\":1490,\"end\":1513}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":1518,\"end\":1528}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1518,\"end\":1528}}],\"loc\":{\"start\":1484,\"end\":1532}},\"loc\":{\"start\":1447,\"end\":1532}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"previewContentBlocks\",\"loc\":{\"start\":1535,\"end\":1555}},\"arguments\":[],\"directives\":[{\"kind\":\"Directive\",\"name\":{\"kind\":\"Name\",\"value\":\"include\",\"loc\":{\"start\":1557,\"end\":1564}},\"arguments\":[{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"if\",\"loc\":{\"start\":1565,\"end\":1567}},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"includeBlocks\",\"loc\":{\"start\":1570,\"end\":1583}},\"loc\":{\"start\":1569,\"end\":1583}},\"loc\":{\"start\":1565,\"end\":1583}}],\"loc\":{\"start\":1556,\"end\":1584}}],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"FragmentSpread\",\"name\":{\"kind\":\"Name\",\"value\":\"ContentBlockFragment\",\"loc\":{\"start\":1594,\"end\":1614}},\"directives\":[],\"loc\":{\"start\":1591,\"end\":1614}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":1619,\"end\":1629}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1619,\"end\":1629}}],\"loc\":{\"start\":1585,\"end\":1633}},\"loc\":{\"start\":1535,\"end\":1633}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"contentHtml\",\"loc\":{\"start\":1636,\"end\":1647}},\"arguments\":[],\"directives\":[{\"kind\":\"Directive\",\"name\":{\"kind\":\"Name\",\"value\":\"include\",\"loc\":{\"start\":1649,\"end\":1656}},\"arguments\":[{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"if\",\"loc\":{\"start\":1657,\"end\":1659}},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"includeHtml\",\"loc\":{\"start\":1662,\"end\":1673}},\"loc\":{\"start\":1661,\"end\":1673}},\"loc\":{\"start\":1657,\"end\":1673}}],\"loc\":{\"start\":1648,\"end\":1674}}],\"loc\":{\"start\":1636,\"end\":1674}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"previewContentHtml\",\"loc\":{\"start\":1677,\"end\":1695}},\"arguments\":[],\"directives\":[{\"kind\":\"Directive\",\"name\":{\"kind\":\"Name\",\"value\":\"include\",\"loc\":{\"start\":1697,\"end\":1704}},\"arguments\":[{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"if\",\"loc\":{\"start\":1705,\"end\":1707}},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"includeHtml\",\"loc\":{\"start\":1710,\"end\":1721}},\"loc\":{\"start\":1709,\"end\":1721}},\"loc\":{\"start\":1705,\"end\":1721}}],\"loc\":{\"start\":1696,\"end\":1722}}],\"loc\":{\"start\":1677,\"end\":1722}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"resources\",\"loc\":{\"start\":1725,\"end\":1734}},\"arguments\":[],\"directives\":[{\"kind\":\"Directive\",\"name\":{\"kind\":\"Name\",\"value\":\"include\",\"loc\":{\"start\":1736,\"end\":1743}},\"arguments\":[{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"if\",\"loc\":{\"start\":1744,\"end\":1746}},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"includeResources\",\"loc\":{\"start\":1749,\"end\":1765}},\"loc\":{\"start\":1748,\"end\":1765}},\"loc\":{\"start\":1744,\"end\":1765}}],\"loc\":{\"start\":1735,\"end\":1766}}],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\",\"loc\":{\"start\":1773,\"end\":1775}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1773,\"end\":1775}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"url\",\"loc\":{\"start\":1780,\"end\":1783}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1780,\"end\":1783}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"type\",\"loc\":{\"start\":1788,\"end\":1792}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1788,\"end\":1792}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"contentLength\",\"loc\":{\"start\":1797,\"end\":1810}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1797,\"end\":1810}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"properties\",\"loc\":{\"start\":1815,\"end\":1825}},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"key\",\"loc\":{\"start\":1834,\"end\":1837}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1834,\"end\":1837}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"value\",\"loc\":{\"start\":1844,\"end\":1849}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1844,\"end\":1849}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"type\",\"loc\":{\"start\":1856,\"end\":1860}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1856,\"end\":1860}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":1867,\"end\":1877}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1867,\"end\":1877}}],\"loc\":{\"start\":1826,\"end\":1883}},\"loc\":{\"start\":1815,\"end\":1883}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":1888,\"end\":1898}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1888,\"end\":1898}}],\"loc\":{\"start\":1767,\"end\":1902}},\"loc\":{\"start\":1725,\"end\":1902}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":1905,\"end\":1915}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1905,\"end\":1915}}],\"loc\":{\"start\":1295,\"end\":1917}},\"loc\":{\"start\":1265,\"end\":1917}},{\"kind\":\"FragmentDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"ContentBlockFragment\",\"loc\":{\"start\":1928,\"end\":1948}},\"typeCondition\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"ContentBlock\",\"loc\":{\"start\":1952,\"end\":1964}},\"loc\":{\"start\":1952,\"end\":1964}},\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\",\"loc\":{\"start\":1969,\"end\":1971}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1969,\"end\":1971}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"type\",\"loc\":{\"start\":1974,\"end\":1978}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1974,\"end\":1978}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"parentId\",\"loc\":{\"start\":1981,\"end\":1989}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1981,\"end\":1989}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"children\",\"loc\":{\"start\":1992,\"end\":2000}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":1992,\"end\":2000}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"sequence\",\"loc\":{\"start\":2003,\"end\":2011}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":2003,\"end\":2011}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"html\",\"loc\":{\"start\":2014,\"end\":2018}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":2014,\"end\":2018}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"level\",\"loc\":{\"start\":2021,\"end\":2026}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":2021,\"end\":2026}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"properties\",\"loc\":{\"start\":2029,\"end\":2039}},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"key\",\"loc\":{\"start\":2046,\"end\":2049}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":2046,\"end\":2049}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"value\",\"loc\":{\"start\":2054,\"end\":2059}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":2054,\"end\":2059}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"type\",\"loc\":{\"start\":2064,\"end\":2068}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":2064,\"end\":2068}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":2073,\"end\":2083}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":2073,\"end\":2083}}],\"loc\":{\"start\":2040,\"end\":2087}},\"loc\":{\"start\":2029,\"end\":2087}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":2090,\"end\":2100}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":2090,\"end\":2100}}],\"loc\":{\"start\":1965,\"end\":2102}},\"loc\":{\"start\":1919,\"end\":2102}},{\"kind\":\"FragmentDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"BundleFragment\",\"loc\":{\"start\":2113,\"end\":2127}},\"typeCondition\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Bundle\",\"loc\":{\"start\":2131,\"end\":2137}},\"loc\":{\"start\":2131,\"end\":2137}},\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"taxonomies\",\"loc\":{\"start\":2142,\"end\":2152}},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"FragmentSpread\",\"name\":{\"kind\":\"Name\",\"value\":\"TaxonomySummaryFragment\",\"loc\":{\"start\":2162,\"end\":2185}},\"directives\":[],\"loc\":{\"start\":2159,\"end\":2185}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":2190,\"end\":2200}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":2190,\"end\":2200}}],\"loc\":{\"start\":2153,\"end\":2204}},\"loc\":{\"start\":2142,\"end\":2204}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"contents\",\"loc\":{\"start\":2207,\"end\":2215}},\"arguments\":[],\"directives\":[{\"kind\":\"Directive\",\"name\":{\"kind\":\"Name\",\"value\":\"include\",\"loc\":{\"start\":2217,\"end\":2224}},\"arguments\":[{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"if\",\"loc\":{\"start\":2225,\"end\":2227}},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"includeBundledContent\",\"loc\":{\"start\":2230,\"end\":2251}},\"loc\":{\"start\":2229,\"end\":2251}},\"loc\":{\"start\":2225,\"end\":2251}}],\"loc\":{\"start\":2216,\"end\":2252}}],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\",\"loc\":{\"start\":2259,\"end\":2261}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":2259,\"end\":2261}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"content\",\"loc\":{\"start\":2266,\"end\":2273}},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"FragmentSpread\",\"name\":{\"kind\":\"Name\",\"value\":\"ContentFragment\",\"loc\":{\"start\":2285,\"end\":2300}},\"directives\":[],\"loc\":{\"start\":2282,\"end\":2300}},{\"kind\":\"FragmentSpread\",\"name\":{\"kind\":\"Name\",\"value\":\"PostFragment\",\"loc\":{\"start\":2310,\"end\":2322}},\"directives\":[],\"loc\":{\"start\":2307,\"end\":2322}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":2329,\"end\":2339}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":2329,\"end\":2339}}],\"loc\":{\"start\":2274,\"end\":2345}},\"loc\":{\"start\":2266,\"end\":2345}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":2350,\"end\":2360}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":2350,\"end\":2360}}],\"loc\":{\"start\":2253,\"end\":2364}},\"loc\":{\"start\":2207,\"end\":2364}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":2367,\"end\":2377}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":2367,\"end\":2377}}],\"loc\":{\"start\":2138,\"end\":2379}},\"loc\":{\"start\":2104,\"end\":2379}},{\"kind\":\"FragmentDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"IssueFragment\",\"loc\":{\"start\":2390,\"end\":2403}},\"typeCondition\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Issue\",\"loc\":{\"start\":2407,\"end\":2412}},\"loc\":{\"start\":2407,\"end\":2412}},\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"contentLength\",\"loc\":{\"start\":2417,\"end\":2430}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":2417,\"end\":2430}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"numberOfPages\",\"loc\":{\"start\":2433,\"end\":2446}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":2433,\"end\":2446}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"previewContentLength\",\"loc\":{\"start\":2449,\"end\":2469}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":2449,\"end\":2469}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":2472,\"end\":2482}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":2472,\"end\":2482}}],\"loc\":{\"start\":2413,\"end\":2484}},\"loc\":{\"start\":2381,\"end\":2484}},{\"kind\":\"FragmentDefinition\",\"name\":{\"kind\":\"Name\",\"value\":\"TaxonomySummaryFragment\",\"loc\":{\"start\":2495,\"end\":2518}},\"typeCondition\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Taxonomy\",\"loc\":{\"start\":2522,\"end\":2530}},\"loc\":{\"start\":2522,\"end\":2530}},\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\",\"loc\":{\"start\":2535,\"end\":2537}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":2535,\"end\":2537}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"name\",\"loc\":{\"start\":2540,\"end\":2544}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":2540,\"end\":2544}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"type\",\"loc\":{\"start\":2547,\"end\":2551}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":2547,\"end\":2551}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"parentId\",\"loc\":{\"start\":2554,\"end\":2562}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":2554,\"end\":2562}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"properties\",\"loc\":{\"start\":2565,\"end\":2575}},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"key\",\"loc\":{\"start\":2582,\"end\":2585}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":2582,\"end\":2585}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"value\",\"loc\":{\"start\":2590,\"end\":2595}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":2590,\"end\":2595}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":2600,\"end\":2610}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":2600,\"end\":2610}}],\"loc\":{\"start\":2576,\"end\":2614}},\"loc\":{\"start\":2565,\"end\":2614}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"__typename\",\"loc\":{\"start\":2617,\"end\":2627}},\"arguments\":[],\"directives\":[],\"loc\":{\"start\":2617,\"end\":2627}}],\"loc\":{\"start\":2531,\"end\":2629}},\"loc\":{\"start\":2486,\"end\":2629}}],\"loc\":{\"start\":0,\"end\":2630}}"
  }