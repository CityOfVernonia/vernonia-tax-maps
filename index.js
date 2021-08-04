const fs = require('fs');
const { execFileSync } = require('child_process');
const download = require('download');
const chalk = require('chalk');

// tax map url
const taxMapUrl = 'https://gis.columbiacountymaps.com/TaxMaps/';

// array of tax maps
let taxMaps;

// convert pdf to tiff into `tiff` directory
const pdf2tiff = async taxMap => {
  await execFileSync(`gswin64c`, [
    `-sOutputFile=tax-maps/tiff/${taxMap}.tiff`,
    `-sDEVICE=tiff24nc`,
    `-sCompression=lzw`,
    `-r600`,
    `tax-maps/pdf/${taxMap}.pdf`
  ]);
  console.log(
    chalk.green(`${taxMap}.pdf successfully converted to ${taxMap}.tiff.`)
  );
};

// read list of tax maps
fs.readFile('tax-maps/tax_maps.txt', 'utf-8', (readError, readData) => {
  //handle read error
  if (readError) {
    console.log(
      chalk.red('Failed to read tax map list.'),
      readError
    );
    return;
  }

  // array of tax maps
  taxMaps = readData.split('\r\n');

  // download tax maps and write to `pdf` or `tiff` directory based on file type
  taxMaps.forEach(taxMap => {
    // download file
    download(`${taxMapUrl}${taxMap}.pdf`)
      .then(async downloadData => {
        // write pdf
        fs.writeFile(`tax-maps/pdf/${taxMap}.pdf`, downloadData, pdfWriteError => {

          // handle write error
          if (pdfWriteError) {
            console.log(
              chalk.red(`Failed to write ${taxMap}.pdf.`),
              pdfWriteError
            );
            return;
          }
          console.log(
            chalk.green(`${taxMap}.pdf successfully written.`)
          );

          // convert to tiff
          pdf2tiff(taxMap);
        });
      })
      .catch(downloadError => {
        // handle download error
        console.log(
          chalk.red(`Failed to download ${taxMap} PDF.`),
          downloadError
        );
      });
  });
});
