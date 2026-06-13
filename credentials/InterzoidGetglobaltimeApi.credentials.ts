import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class InterzoidGetglobaltimeApi implements ICredentialType {
        name = 'N8nDevInterzoidGetglobaltimeApi';

        displayName = 'Interzoid Getglobaltime API';

        icon: Icon = { light: 'file:../nodes/InterzoidGetglobaltime/interzoid-getglobaltime.png', dark: 'file:../nodes/InterzoidGetglobaltime/interzoid-getglobaltime.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.interzoid.com',
                        required: true,
                        placeholder: 'https://api.interzoid.com',
                        description: 'The base URL of your Interzoid Getglobaltime API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
