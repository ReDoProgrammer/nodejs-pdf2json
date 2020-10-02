const express = require('express');
const app = express();
 const fs = require('fs');
 const PDFParser = require("pdf2json");

 let pdfParser = new PDFParser();

 pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
 pdfParser.on("pdfParser_dataReady", pdfData => {
     fs.writeFile("./pdf2json/test/F1040EZ.json", JSON.stringify(pdfData));
 });

app.listen(3000,()=>{
  console.log('app is running: 3000');
});
