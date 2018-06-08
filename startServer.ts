import QuickstartServer from "./src/QuickstartServer";

import * as express from 'express';
import * as http from 'http';

const app = express();
const server = http.createServer(app);
const PORT = 8999;
QuickstartServer(server);

server.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${process.env.PORT || PORT}`);
});