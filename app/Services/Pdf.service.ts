import { generate } from '../utilities/PdfGenerator'
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
        // if( !Object.keys(files).length) {
        //     throw new Error("No file uploaded.");
        // }
        // Ensure that a file was uploaded
        //@ts-ignore
        if (!files.file || files.file.length === 0) {
            throw new Error(" file is missing.");
        }

        //@ts-ignore
        const uploadedFile = files.file[0];
        const oldPath = uploadedFile.filepath;
        const newPath = `./uploads/files/${uploadedFile.originalFilename}`;

        // Rename the uploaded file to a new location
        await fs.promises.rename(oldPath, newPath);
        console.log("Successfully uploaded: ", uploadedFile.originalFilename);

        // Read the HTML content from the newly saved file
        const html = await fs.promises.readFile(newPath, "utf8");

        // Generate a PDF using the HTML content
        const pdf = await generate([{}], html, uuidv4());
      
        // try {
        //     await fs.promises.unlink(newPath);
        // } catch {
        //     LOGGER.info('There was an error deleting the file.');
        // }
        // Return the URL of the uploaded PDF
        return pdf.filename
    } catch (err: any) {
        // Handle errors and return an error message if necessary
        throw new Error( err.message || "An error occurred.");
    }
};


// const generatePDF = async (req: any) => {
//     try {
//         let fields, files;
//         //@ts-ignore
//         ({ fields, files } = await new Promise((resolve) => {
//             new formidable.IncomingForm().parse(req, async (err: any, fields: any, files: any) => {
//                 resolve({ fields: fields, files: files });
//             })
//         }));
//         // `files` contains information about the uploaded file.
//         const uploadedFile = files.file[0];
//         const oldPath = uploadedFile.filepath;

//         const newPath = './uploads/files/' + uploadedFile.originalFilename;

//         let res: any = await new Promise((resolve, reject) => {
//             fs.rename(oldPath, newPath, async function (err) {
//                 if (err) {
//                     console.error(err);
//                     return;
//                 }
//                 console.log(" successfully uploaded : ", uploadedFile.originalFilename)
//                 const html = fs.readFileSync(newPath, "utf8");

//                 let pdf = await generate([{}], html, uuidv4());
//                 const fileContent = fs.readFileSync(pdf.filename);
//                 let fileName = "pdf/" + moment().unix() + ".pdf";
//                 let s3Result = await uploadLocalFile(fileContent, fileName, 'application/pdf');
//                 console.log(s3Result)

//                 try {
//                     await promises.unlink(pdf.filename);
//                 } catch {
//                     LOGGER.info('there was an error reading the file :',);
//                 }
//                 resolve(config.baseUrl + '/' + fileName)
//             });
//         })
//         return res

//     }
//     catch (err) {
//         return err
//     }
// }

export default {
    generatePDF

}