import path from 'path';
import express from 'express';
import next from 'next';
import {log, color} from '../lib/logger';
import { Server } from 'http';

type NodeEnv = 'development' | 'production';

interface EnvVariables {
    PORT: string,
    NODE_ENV: NodeEnv
};

export default module.exports = async function start(env: EnvVariables): Promise<Server> {
    const expressApp = express();

    // Prepare Next.js
    const nextApp = next({
        dev: env.NODE_ENV == 'development',
        dir: './client/'
    });
    await nextApp.prepare();
    const nextRequestHandler = nextApp.getRequestHandler();
    expressApp.get('*', (req, res) => {
        nextRequestHandler(req, res);
    });

    // Start HTTP server
    const server = expressApp.listen(env.PORT, (error: Error) => {
        if (error) {
            log(color.red(`Couldn't start http server: ${Error}`));
            throw error;
        }

        log(color.green(`Http server listening on ${env.PORT}`));
    });

    return server;
}