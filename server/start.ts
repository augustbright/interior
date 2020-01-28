import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import next from 'next';
import {log, color} from '../lib/logger';
import { Server } from 'http';
import nextI18NextInstance from '../lib/i18n';
import nextI18NextMiddleware from 'next-i18next/middleware';

type NodeEnv = 'development' | 'production';

interface EnvVariables {
    PORT: string,
    NODE_ENV: NodeEnv
};

export default module.exports = async function start(env: EnvVariables): Promise<Server> {
    const expressApp = express();

    // Cookies
    expressApp.use(cookieParser());

    // Set up server i18n
    await nextI18NextInstance.initPromise;
    expressApp.use(nextI18NextMiddleware(nextI18NextInstance));

    // A fix for next-i18next lang resolving
    expressApp.use('/client/public/', express.static(path.join(__dirname, '../client/public/')));

    expressApp.use(async (req, res, next) => {
        const lang = req.cookies['next-i18next'] || 'en';
        await req.i18n.changeLanguage(lang);
        next();
    });

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