import * as WebSocket from 'ws';
import {Server} from 'http';

const QuickstartServer = (server: Server) => {
    const ws = new WebSocket.Server({ server, clientTracking: true });
    ws.on('connection', (ws: WebSocket) => {
        console.log("client connected\n");

        ws.on('message', (message: string) => {
            console.log("message received: " + message + "\n");
        });
        
    });
} 

export default QuickstartServer;