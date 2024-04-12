import express,{ Application } from "express";
import ip from 'ip';
import cors from 'cors';

export class App{
    private readonly app:Application;
    private readonly APPLICATION_RUNNING = 'Application running on: ';
    private readonly ROUTE_NOT_FOUND = 'Route not found';

    constructor(private readonly port:(string | number ) = process.env.SERVER_PORT || 3000) {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    listen():void {
        this.app.listen(this.port);
        console.info(`${this.APPLICATION_RUNNING} ${ip.address()}:${this.port}`);
    }

    private middlewares(): void {
        this.app.use(cors({origin: '*'}));
        this.app.use(express.json());
    }

    private routes(): void {
        this.app.use('/notices',(req,res) => {});
        this.app.get('/',(req,res) => {
            res.status(200).send({message: 'Server is up'})
        });
        this.app.all('*',(req,res) => {
        res.status(404).send({message: this.ROUTE_NOT_FOUND})
        });
    }

}