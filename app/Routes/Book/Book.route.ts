import express from 'express';
import bookController from '../../Controllers/Book.controller';
import bookSchema from '../../Constants/Schema/Book.shcema'
const router = express.Router();
import { celebrate } from "celebrate";


router.post(
    '/add',
    celebrate(bookSchema.add),
    bookController.addBook,
);


router.put(
    '/edit',
    celebrate(bookSchema.edit),
    bookController.editBook
);


router.get(
    '/all',
    bookController.getAllBook,
);

router.get(
    '/',
    celebrate(bookSchema.id),
    bookController.getBookById,
);

router.delete(
    '/delete',
    celebrate(bookSchema.id),
    bookController.deleteBookById,
);
export default router;