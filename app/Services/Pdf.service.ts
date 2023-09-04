import { generate, generatePDFFromHtml } from '../utilities/PdfGenerator'
import * as fs from "fs";
import LOGGER from "../config/LOGGER";
const formidable = require('formidable');
const { v4: uuidv4 } = require('uuid');

const generatePDF = async (req: any) => {
    try {
        // Parse the incoming form data using formidable
        let fields, files;
        //@ts-ignore
        ({ fields, files } = await new Promise((resolve) => {
            new formidable.IncomingForm().parse(req, async (err: any, fields: any, files: any) => {
                resolve({ fields: fields, files: files });
            })
        }));
      
        //@ts-ignore
        if (!files.file || files.file.length === 0) {
            throw new Error(" file is missing.");
        }

        //@ts-ignore
        const uploadedFile = files.file[0];

        //@ts-ignore
        const uploadedFile = files.file[0];
        const html = await fs.promises.readFile(uploadedFile.filepath, "utf8");

        // Generate a PDF using the HTML content
        // const pdfBuffer = await generate( html, uuidv4());
        const pdfBuffer = await generatePDFFromHtml(html);
        
        // Return buffered file
        return pdfBuffer;

    } catch (err: any) {
        // Handle errors and return an error message if necessary
        throw new Error( err.message || "An error occurred.");
    }
};

export default {
    generatePDF

}