import express, { Request, Response } from "express";
import { getDetails, getHeader, getItems, postHeader } from "../controllers";
const router = express.Router();

router.get("/headers", getHeader);

router.post("/headers/multiple", postHeader);

router.get("/item", getItems);

router.get("/detail", getDetails);
export default router;
