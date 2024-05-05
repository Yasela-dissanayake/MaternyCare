import { Request, Response } from "express";
import { Notice } from "../interface/Notice";
import { connection } from "../config/mysql.config";
import { QUERY } from "../query/notice.query";

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
