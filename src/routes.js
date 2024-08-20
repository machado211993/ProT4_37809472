import { Router } from "express";
import { libro } from "./controller.js";
export const router = Router()
router.get('/libros', libro.getAll);
router.post('/libro', libro.add);
router.delete("/libro/:isbn", libro.delete);
router.put('/libro', libro.update);
router.get("/libros/:id", libro.getOne);