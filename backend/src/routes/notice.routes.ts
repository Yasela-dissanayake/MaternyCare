import { Router } from "express";
import { getNotice, getNotices } from "../controller/notice.controller";

const noticeRoutes = Router();

noticeRoutes.route("/").get(getNotices);

noticeRoutes.route("/:noticeId").get(getNotice);

export default noticeRoutes;
