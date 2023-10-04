import express from 'express';
import http from 'http';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import compression from 'compression';

import environment from './config/environment';

const { port } = environment;

const app = express();
const server = http.createServer(app);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.disable('x-powered-by');

app.set('port', port);

export { app, server };
