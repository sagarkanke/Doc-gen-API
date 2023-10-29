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
    bookController.getBookById,
);

export default router;