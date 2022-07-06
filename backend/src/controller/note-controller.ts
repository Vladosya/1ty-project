import { Request, Response } from "express";
import { validationResult } from "express-validator";

import noteService from "../service/note-service";

import { INoteCreate, INoteGet } from "../types/controller/note-controller";

class NoteController {
  async createNote(req: Request, res: Response) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          status: 400,
          message: "Ошибка при валидации",
          result: errors,
        });
      }
      const { message } = req.body;
      const newNote: INoteCreate = await noteService.createNote(message);
      return res.status(200).json({
        status: 200,
        message: "Записка успешно создана",
        result: newNote,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: "Ошибка создания записки",
        result: error,
      });
    }
  }

  async readNoteById(req: Request, res: Response) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          status: 400,
          message: "Ошибка при валидации",
          result: errors,
        });
      }
      const { id } = req.body;
      await noteService.readNoteById(id);
      return res.status(200).json({
        status: 200,
        message: "Записка успешно прочитана",
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: "Ошибка при прочтении записки",
        result: error,
      });
    }
  }

  async getNoteById(req: Request, res: Response) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          status: 400,
          message: "Ошибка при валидации",
          result: errors,
        });
      }
      const { id } = req.params;
      const note: INoteGet[] = await noteService.getNoteById(id);
      return res.status(200).json({
        status: 200,
        message: "Записка успешно получена",
        result: note,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: "Ошибка при получении записки",
        result: error,
      });
    }
  }

  async deleteNoteById(req: Request, res: Response) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          status: 400,
          message: "Ошибка при валидации",
          result: errors,
        });
      }
      const { id } = req.params;
      await noteService.deleteNoteById(id);
      return res.status(200).json({
        status: 200,
        message: "Записка успешно удалена",
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: "Ошибка при удалении записки",
        result: error,
      });
    }
  }
}

export default new NoteController();
