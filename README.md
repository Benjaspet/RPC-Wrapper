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
    "details": "", // the first line of the presence
    "state": "", // the second line of the presence
    "largeImageKey": "", // the key for the large image per your web application
    "largeImageText": "", // the text to display when hovering over the large image
    "smallImageKey": "", // the key for the small image per your web application
    "smallImageText": "" // the text to display when hovering over the small image
  },
  "rpc_login": {
    "clientId": "" // your WEB APPLICATION'S client ID, NOT YOUR UUID!
  }
}
```

This project is licensed under the [MIT License](https://www.mit.edu/~amini/LICENSE.md).