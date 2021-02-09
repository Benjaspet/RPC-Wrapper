# RPC-Wrapper
A rich presence RPC wrapper for JS web applications.

#### Dependencies:
- `discord.rpc`
- `node.js`

#### Steps to activate:
1. Locate your Discord web application.
2. Locate the `config.json` and add the following fields:

```json
{
  "presence_settings": {
    "details": "", 
    "state": "", 
    "largeImageKey": "", 
    "largeImageText": "", 
    "smallImageKey": "", 
    "smallImageText": "" 
  },
  
  "rpc_login": {
    "clientId": ""
  }
}
```

This project is licensed under the [MIT License](https://www.mit.edu/~amini/LICENSE.md).