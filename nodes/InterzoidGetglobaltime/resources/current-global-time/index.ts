import type { INodeProperties } from 'n8n-workflow';

export const currentGlobalTimeDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Current Global Time"
					]
				}
			},
			"options": [
				{
					"name": "Getglobaltime",
					"value": "Getglobaltime",
					"action": "Gets the current time for a global locale",
					"description": "Gets the current time for a global locale (city, state, region, or country such as Chicago, London, Paris, Seoul, Spain, Buenos Aires, Hawaii, Moscow, Tokyo, Hanoi, etc.)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getglobaltime"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /getglobaltime",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Current Global Time"
					],
					"operation": [
						"Getglobaltime"
					]
				}
			}
		},
		{
			"displayName": "License",
			"name": "license",
			"required": true,
			"description": "Your Interzoid license API key. Register at www.interzoid.com/register",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "license",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Current Global Time"
					],
					"operation": [
						"Getglobaltime"
					]
				}
			}
		},
		{
			"displayName": "Locale",
			"name": "locale",
			"required": true,
			"description": "Geographic locale to get the current time for",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "locale",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Current Global Time"
					],
					"operation": [
						"Getglobaltime"
					]
				}
			}
		},
];
