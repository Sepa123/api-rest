import { Router } from "express";
import { redirectUrl } from "../controller/redirect.controller.js";


const router = Router();

// A modo de prueba de redirect por backend
router.get("/:shortUrl", redirectUrl);

export default router;