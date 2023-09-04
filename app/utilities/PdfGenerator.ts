var pdf = require("pdf-creator-node");
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


