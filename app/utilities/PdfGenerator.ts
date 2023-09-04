var pdf = require("pdf-creator-node");
const puppeteer = require('puppeteer');
// const jsPDF = require('jspdf');
export const generate = async (html: any, path: any) => {
  // var html = fs.readFileSync(__dirname + '/template.html', "utf8");
  const options = {
    format: "A4",
    orientation: "portrait",
    border: "10mm",
    header: {
      height: "0.001mm",
    },
    footer: {
      height: "0.001mm",
    }
      };
  const document = {
    html: html,
    data: {
      Data: [{}]
    },
    type: "buffer",
  };
  return new Promise<Buffer>((resolve, reject) => {
    pdf.create(document, options)
      .then((result: any) => {
        const buffer = Buffer.from(result.toString('binary'), 'binary');
        resolve(buffer);
      })
      .catch((error: any) => {
        console.error('Error generating PDF:', error);
        reject(error);
      });
  });

}


export async function generatePDFFromHtml(htmlContent: string) {
  const browser = await puppeteer.launch({
    headless: 'new', // Run in headless mode
    // other options...
  });
  const page = await browser.newPage();
  // Set custom viewport size (optional)
  await page.setViewport({ width: 1200, height: 800 });

  // Emulate media type for better rendering (optional)
  await page.emulateMediaType('print');

  await page.setContent(htmlContent);

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
  return pdfBuffer

}
