import { Request, Response } from "express";
import { Notice } from "../interface/Notice";
import { connection } from "../config/mysql.config";
import { QUERY } from "../query/notice.query";
import { Code } from "../enum/code.enum";
import { HttpResponse } from "../domain/response";
import { Status } from "../enum/status.enum";
import { FieldPacket, ResultSetHeader, RowDataPacket } from "mysql2";

type ResultSet = [
  RowDataPacket[] | RowDataPacket[][] | ResultSetHeader | FieldPacket[]
];

export const getNotice = async (
  req: Request,
  res: Response
): Promise<Response<Notice>> => {
  console.info(
    `[${new Date().toLocaleString()}] Incoming ${req.method}${
      req.originalUrl
    } Request from ${req.rawHeaders[0]} ${req.rawHeaders[1]}`
  );

  try {
    const pool = await connection();
    const result: any = await pool.query(QUERY.SELECT_NOTICE, [
      req.params.noticeId,
    ]);

    if ((result[0] as Array<any>).length > 0) {
      return res
        .status(Code.OK)
        .send(
          new HttpResponse(Code.OK, Status.OK, "Notice retrieved", result[0])
        );
    } else {
      return res
        .status(Code.NOT_FOUND)
        .send(
          new HttpResponse(Code.NOT_FOUND, Status.NOT_FOUND, "Notice not found")
        );
    }
  } catch (error: unknown) {
    console.error(error);
    return res
      .status(Code.INTERNAL_SERVER_ERROR)
      .send(
        new HttpResponse(
          Code.INTERNAL_SERVER_ERROR,
          Status.INTERNAL_SERVER_ERROR,
          "An Error Occurred"
        )
      );
  }
};

export const getNotices = async (
  req: Request,
  res: Response
): Promise<Response<Notice[]>> => {
  console.info(
    `[${new Date().toLocaleString()}] Incoming ${req.method}${
      req.originalUrl
    } Request from ${req.rawHeaders[0]} ${req.rawHeaders[1]}`
  );

  try {
    const pool = await connection();
    const result: any = await pool.query(QUERY.SELECT_NOTICE);
    return res.status(200);
  } catch (error: unknown) {
   
}
