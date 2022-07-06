import express from "express";
import {body, param} from "express-validator";

import noteController from "../controller/note-controller";

const router: express.Router = express.Router();

router.post("/note", [
    body("message").isLength({min: 1}),
], noteController.createNote);

router.post("/note/readed", [
    body("id").isLength({min: 5}),
], noteController.readNoteById);

router.get("/note/:id", [
    param("id").isLength({min: 5})
], noteController.getNoteById);

router.delete("/note/:id", [
    param("id").isLength({min: 5})
], noteController.deleteNoteById);

export default router;
