import express, { Application } from "express";
import ip from "ip";
import cors from "cors";
import { Code } from "./enum/code.enum";
import { HttpResponse } from "./domain/response";
import { Status } from "./enum/status.enum";
import noticeRoutes from "./routes/notice.routes";
import { AppDataSource } from "./config/orm.config";

export class App {
  private readonly app: Application;
  private readonly APPLICATION_RUNNING = "Application running on: ";
  private readonly ROUTE_NOT_FOUND = "Route not found";

  constructor(
    private readonly port: string | number = process.env.SERVER_PORT || 3000
  ) {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  listen(): void {
    // Initialize the DataSource
    AppDataSource.initialize()
      .then(() => {
        console.log("Data Source has been initialized!");
        this.app.listen(this.port);
        console.info(`${this.APPLICATION_RUNNING} ${ip.address()}:${this.port}`);
      })
      .catch((err) => {
        console.error("Error during Data Source initialization:", err);
      });
  }


  private middlewares(): void {
    this.app.use(cors({ origin: "*" }));
    this.app.use(express.json());
  }


  private routes(): void {
    // this.app.use("/notices", noticeRoutes);
    this.app.get("/", (req, res) => {
      res
        .status(Code.OK)
        .send(
          new HttpResponse(
            Code.OK,
            Status.OK,
            "Welcome to the MaternyCare api v1.0"
          )
        );
    });
    this.app.all("*", (req, res) => {
      res
        .status(Code.NOT_FOUND)
        .send(
          new HttpResponse(
            Code.NOT_FOUND,
            Status.NOT_FOUND,
            this.ROUTE_NOT_FOUND
          )
        );
    });
  }
}
