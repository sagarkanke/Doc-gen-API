import express from 'express';
import pdfController from '../../Controllers/Pdf.controller';
const router = express.Router();


router.post(
    '/generate',
    pdfController.generatePDF,
);



export default router;