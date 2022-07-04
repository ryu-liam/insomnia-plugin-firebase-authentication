# insomnia-plugin-firebase-authentication
The plugin to use firebase authentication for Insomnia!

# Available features
* get current user's id token

# How to set up
1. Add this plugIn into Insomnia 
2. Set environment variables on Insomnia

# Environment Variables
``` json
{
  "firebase": {
		"auth": {
			"email": "userEmailAddress",
			"password": "userPassword"
		},
		"config": {
			"apiKey": "apiKey",
			"authDomain": "authDomain",
			"projectId": "projectId",
			"appId": "appId"
		}
	}
}
```
