import express, { Request, Response, NextFunction } from 'express';

import { cf } from './config/config';

const app = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    let q = req.query.query;
    res.send(q);
});

app.get('', (req: Request, res: Response) => {
    res.send('404 Not found')
});
app.post('', (req: Request, res: Response) => {
    res.send();
})

app.listen(cf.server.port, () => {
    console.log(`Server start on port ${cf.server.port}`);
});
