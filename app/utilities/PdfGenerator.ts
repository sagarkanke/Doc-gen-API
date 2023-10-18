const puppeteer = require('puppeteer');

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
  // Close the page
  await page.close();

  // Close the browser
  await browser.close();
  
  return pdfBuffer

}

