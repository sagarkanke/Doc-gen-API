var pdf = require("pdf-creator-node");
var fs = require("fs");

export const generate = async (pdfData : any, html : any, path : any) => {
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
  console.log( " `./`+`${path}`+`.pdf` ", `./`+`${path}`+`.pdf`,)
  const document = {
    html: html,
    data: {
      Data:pdfData
    },
    // path: `./uplods/files/converted.pdf`,
    path: `./uploads/files/`+`${path}`+`.pdf`,
    type: "",
  };
  return await pdf.create(document, options)
}
