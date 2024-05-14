import { Router } from "express";

const noticeRoutes = Router();

import {
  createNotice,
  deleteNotice,
  getNotice,
  getNotices,
  updateNotice,
} from "../controller/notice.controller";

const noticeRoutes = Router();

noticeRoutes.route("/").get(getNotices).post(createNotice);

noticeRoutes
  .route("/:noticeId")
  .get(getNotice)
  .put(updateNotice)
  .delete(deleteNotice);

export default noticeRoutes;
