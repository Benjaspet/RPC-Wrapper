const RPC = require('discord-rpc');
const config = require('./config.json');

const rpc = new RPC.Client({
    transport: "ipc"
});

rpc.on("ready", () => {
    rpc.setActivity({
        details: config.presence_settings.details,
        state: config.presence_settings.state,
        startTimestamp: new Date(),
        largeImageKey: config.presence_settings.largeImageKey,
        largeImageText: config.presence_settings.largeImageText,
        smallImageKey: config.presence_settings.smallImageKey,
        smallImageText: config.presence_settings.smallImageText
    });
    console.log("Active.");
});

rpc.login({
    clientId: config.rpc_login.clientId
});