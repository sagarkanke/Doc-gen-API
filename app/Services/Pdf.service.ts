import * as fs from "fs";
import { ConnectionManager } from "../utilities/browserPool";
import connectionManager from "../app";
const formidable = require('formidable');
// import { connectionManager } from '../app'
// connectionManager
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
        const html = await fs.promises.readFile(uploadedFile.filepath, "utf8");

       
        const browser = await connectionManager.getBrowser()
       
          const page = await browser.newPage();
          // Set custom viewport size (optional)
          await page.setViewport({ width: 1200, height: 800 });
        
          // Emulate media type for better rendering (optional)
          await page.emulateMediaType('print');
        
          await page.setContent(html);
        
          const pdfBuffer = await page.pdf({
            format: 'A4',
            printBackground: true, // Include background colors and images
            margin: {
              top: '15px',
              right: '15px',
              bottom: '15px',
              left: '15px'
            }
          });
          // Close the page
          await page.close();
        
          connectionManager.releaseBrowser(browser);

          return pdfBuffer
      

    } catch (err: any) {
        // Handle errors and return an error message if necessary
        throw new Error(err.message || "An error occurred.");
    }
};

export default {
    generatePDF
}