import express, { Request, Response, NextFunction } from 'express';
import { respRest, crespRest } from './rest/rest_producer'

import { cf } from './config/config';

const app = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    let q = req.query.query;
    res.send(q);
});

app.get('*', (req: Request, res: Response, next: NextFunction) => {
    res.status(404).send('404 Not Found');
});
app.post('*', (req: Request, res: Response, next: NextFunction) => {
    res.header('Content-Type', 'application/json');
    res.status(404).send(crespRest(404));
});

app.listen(cf.server.port, () => {
    console.log(`Server start on port ${cf.server.port}`);
});
