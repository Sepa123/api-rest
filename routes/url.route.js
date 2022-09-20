import { Router } from "express";
import { createUrl, deleteUrlByID, getUrlByID, getUrls, updateUrlByID } from "../controller/urls.controller.js";
import { requireToken } from "../middlewares/requireToken.js";
import { bodyUrlValidation, paramsUrlValidator } from "../middlewares/validatorManager.js";

const router = Router();


// TODO:
// GET : OBTENER TODOS LOS LINKS
// GET : OBTENER LOS URLs del usuario /:id
// POST: CREAR URL
// PUT / PATCH : EDITAR URL
// DELETE : ELIMINAR por /:id

router.get("/", requireToken, getUrls)
router.get("/:id",requireToken, getUrlByID)
router.post("/", requireToken, bodyUrlValidation, createUrl)
router.delete("/:id", requireToken, paramsUrlValidator, deleteUrlByID)
router.patch("/:id", requireToken, paramsUrlValidator,bodyUrlValidation ,updateUrlByID )


export default router;