const WebSocket = require('ws');
const ws_serv = new WebSocket.Server ({port:3005});

ws_serv.on ("connection", function connection (ws){
    
    ws.on ("message", function message (message){
        
        const data = JSON.parse(message);

        if(data.type === "message"){
                ws_serv.clients.forEach((client)=>{
                    if(client !== ws && client.readyState === WebSocket.OPEN){
                        client.send(JSON.stringify ({type: "message", data: data.data}));
                    }
                });
        }
    });    
});

console.log ("server web chat node js started...")