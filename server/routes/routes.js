import express from "express";
import { downloadImage, uploadImage } from "../controllers/imageControllers.js";
import upload from "../utils/upload.js";

const router = express.Router();

router.post("/upload", upload.single("file"), uploadImage);
router.get("/file-shares/:id", downloadImage);

export default router;
