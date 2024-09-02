import express, { Express, Request, Response } from 'express';

const app : Express = express();
const port = 3000;

app.use(express.json());

app.get('/', (req : Request, res : Response)=>{
    res.send('Home')
})

app.post('/', (req : Request, res : Response)=>{
    console.log(req.body);
    res.send('Smth')
})

app.use((err: Error, req: Request, res: Response, next: Function) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, ()=>{
    console.log(`Server is connected at http://localhost:${port}`);
})