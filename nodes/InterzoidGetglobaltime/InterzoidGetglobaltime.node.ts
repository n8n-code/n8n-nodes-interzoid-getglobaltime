import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { currentGlobalTimeDescription } from './resources/current-global-time';

export class InterzoidGetglobaltime implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Interzoid Getglobaltime',
                name: 'N8nDevInterzoidGetglobaltime',
                icon: { light: 'file:./interzoid-getglobaltime.png', dark: 'file:./interzoid-getglobaltime.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'API retrieves current time for any global city or location.',
                defaults: { name: 'Interzoid Getglobaltime' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevInterzoidGetglobaltimeApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Current Global Time",
					"value": "Current Global Time",
					"description": ""
				}
			],
			"default": ""
		},
		...currentGlobalTimeDescription
                ],
        };
}
