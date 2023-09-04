var pdf = require("pdf-creator-node");
const puppeteer = require('puppeteer');
// const jsPDF = require('jspdf');
export const generate = async (html: any, path: any) => {
  // var html = fs.readFileSync(__dirname + '/template.html', "utf8");
  const options = {
    format: "A3",
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

export async function generatePDFFromHTML(htmlContent: any) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set a viewport size to match the desired page dimensions
  await page.setViewport({ width: 1200, height: 1600 });

  // Set the content to fit the page width
  await page.setContent(htmlContent, { waitUntil: 'domcontentloaded' });
  
  await page.waitForSelector('.content');

  await page.waitForTimeout(1000); // Adjust the wait time as needed

  // Set the media type to "print" for better PDF quality
  await page.emulateMediaType('print');
  // Check if content spans multiple pages
  const contentHeight = await page.evaluate(() => {
    const body: any = document.querySelector('body');
    const bodyHeight = body.scrollHeight;
    const viewportHeight = window.innerHeight;

    return bodyHeight > viewportHeight;
  });

  if (contentHeight) {
    // Content spans multiple pages, use additional page breaks or adjustments as needed
    await page.addStyleTag({
      content: `
            @media print {
                /* Add page breaks and adjustments for multi-page content here */
            }
        `
    });
  }
  // Generate PDF as a buffer instead of saving it to a file
  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true, // Include background colors and images
    margin: {
      top: '20px',
      right: '20px',
      bottom: '20px',
      left: '20px'
    },
    displayHeaderFooter: false, // Disable headers and footers
  });

  await browser.close();

  return pdfBuffer;
}
