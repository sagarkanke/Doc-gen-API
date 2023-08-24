import IController from '../Types/IController';
import apiResponse from '../utilities/ApiResponse';
import pdfService from '../Services/Pdf.service';
import * as fs from "fs";



const generatePDF: IController = async (req: any, res: any) => {
    let pdf: any;
    try {
        // Create a pdf using the pdfService
        pdf = await pdfService.generatePDF(req);
        console.log(pdf)
        // pdf = '/Users/digitalflakesagar/Home/XimKart-API/uplods/files/converted.pdf'
        // Check if the result is an Error object
        if (pdf instanceof Error) {
            // Return a bad request response using the apiResponse helper function
            apiResponse.error(res, 400, pdf.message);
        } else {
            // Send the PDF as a response
            res.download(pdf, () => {
                // After sending the response, delete the PDF file
                fs.unlink(pdf, (err) => {
                    if (err) {
                        console.error('Error deleting the PDF file:', err);
                    } else {
                        console.log('PDF file deleted successfully.');
                    }
                });
            });
        }
    } catch (e: any) {

        // Return a bad request response with the error message from the caught exception
        apiResponse.error(
            res,
            400,
            e.message
        );
    }
    return;
}

export default {
    generatePDF
};
